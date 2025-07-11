// netlify/functions/send-contact-email.js

// Import the Resend SDK
// You'll need to install this in your Netlify project's build settings or package.json
// npm install resend
const { Resend } = require('resend');

// Initialize Resend with your API Key
// This key will be set as an Environment Variable in Netlify (see instructions below)
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
    requestBody = JSON.parse(event.body);
  } catch (error) {
    console.error('JSON parse error:', error);
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Invalid JSON body' }),
      headers: { 'Content-Type': 'application/json' },
    };
  }

  const { name, email, subject, comment } = requestBody;

  // Basic validation
  if (!email || !comment) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Email and Comment are required.' }),
      headers: { 'Content-Type': 'application/json' },
    };
  }

  try {
    // Ensure the API key is set
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set in Netlify environment variables.');
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Server configuration error: API key missing.' }),
        headers: { 'Content-Type': 'application/json' },
      };
    }

    // Send the email using Resend
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

    console.log('Email sent successfully:', data);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message sent successfully!' }),
      headers: { 'Content-Type': 'application/json' },
    };

  } catch (error) {
    console.error('Failed to send email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: `An unexpected error occurred: ${error.message}` }),
      headers: { 'Content-Type': 'application/json' },
    };
  }
};
