// netlify/functions/send-contact-email.cjs

// Import the Resend SDK
const { Resend } = require('resend');

// Node.js built-in module for URL query string parsing
const querystring = require('querystring');

// Initialize Resend with your API Key
const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
      headers: { 'Content-Type': 'application/json' },
    };
  }

  let requestBody;
  try {
    // Determine content type and parse accordingly
    const contentType = event.headers['content-type'] || event.headers['Content-Type'] || '';
    let rawBody = event.body;

    // Decode base64 if necessary (Netlify often base64-encodes non-JSON bodies)
    if (event.isBase64Encoded) {
      rawBody = Buffer.from(rawBody, 'base64').toString('utf8');
    }

    if (contentType.includes('application/json')) {
      requestBody = JSON.parse(rawBody);
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      requestBody = querystring.parse(rawBody); // Parse URL-encoded string
    } else {
      // Fallback for other content types or if type is missing
      // Attempt JSON parse first, then querystring, then raw body
      try {
        requestBody = JSON.parse(rawBody);
      } catch (jsonError) {
        requestBody = querystring.parse(rawBody);
      }
    }

    console.log('Parsed Request Body:', JSON.stringify(requestBody)); // Log the parsed body

  } catch (error) {
    console.error('Body parsing error:', error.message);
    return {
      statusCode: 400,
      body: JSON.stringify({ message: `Failed to parse request body: ${error.message}` }),
      headers: { 'Content-Type': 'application/json' },
    };
  }

  const { name, email, subject, comment } = requestBody;

  // Basic validation (using the parsed fields)
  if (!email || !comment) {
    console.error('Validation Error: Missing email or comment.');
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Email and Comment are required.' }),
      headers: { 'Content-Type': 'application/json' },
    };
  }

  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set in Netlify environment variables.');
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Server configuration error: API key missing.' }),
        headers: { 'Content-Type': 'application/json' },
      };
    }

    const data = await resend.emails.send({
      from: 'Contact Form <contact@promptsvault.app>', // <--- IMPORTANT: Use an email FROM YOUR RESEND-VERIFIED DOMAIN
      to: ['support@promptsvault.app'], // <--- YOUR TARGET SUPPORT EMAIL HERE
      subject: `New PromptsVault Contact: ${subject || 'No Subject'} from ${name || 'Anonymous'}`,
      html: `
        <p><strong>Name:</strong> ${name || 'Not provided'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'Not provided'}</p>
        <p><strong>Comment:</strong></p>
        <p>${comment}</p>
      `,
    });

    console.log('Resend API Response Status:', data.statusCode); // Resend's response status
    console.log('Resend API Response Body:', JSON.stringify(data)); // Resend's full response

    // Check if Resend operation was successful
    if (data.error) { // Resend returns an 'error' object on failure
        console.error('Resend API call failed:', data.error.message);
        return {
            statusCode: 500, // Or data.error.statusCode if Resend provides it
            body: JSON.stringify({ message: data.error.message || 'Failed to send message via Resend API.' }),
            headers: { 'Content-Type': 'application/json' },
        };
    }


    console.log('Email sent successfully via Resend API:', JSON.stringify(data));
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message sent successfully!' }),
      headers: { 'Content-Type': 'application/json' },
    };

  } catch (error) {
    console.error('Function runtime error during email sending:', error.message, error.stack);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: `An unexpected error occurred: ${error.message}` }),
      headers: { 'Content-Type': 'application/json' },
    };
  }
};
