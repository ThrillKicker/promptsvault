import React from 'react';
import Layout from './Layout';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const TermsOfService = () => {
  return (
    <Layout>
      <div className="section-padding pt-32">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="heading-1 mb-4">Terms of Service</h1>
            <p className="body-large text-gray-600">
              Last updated: January 24, 2025
            </p>
          </div>

          <Card className="feature-card mb-8">
            <CardHeader>
              <CardTitle className="heading-3">Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="body-medium">
                By accessing and using PromptsVault ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </CardContent>
          </Card>

          <Card className="feature-card mb-8">
            <CardHeader>
              <CardTitle className="heading-3">Description of Service</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="body-medium">
                PromptsVault is a secure storage and management service for AI prompts. Our service allows you to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="body-medium">Store and organize your AI prompts securely</li>
                <li className="body-medium">Sync your prompts across multiple devices</li>
                <li className="body-medium">Share prompts with others securely</li>
                <li className="body-medium">Search and categorize your prompt library</li>
              </ul>
              <p className="body-medium">
                The Service is provided on a subscription basis with different tiers of functionality.
              </p>
            </CardContent>
          </Card>

          <Card className="feature-card mb-8">
            <CardHeader>
              <CardTitle className="heading-3">User Accounts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Account Creation</h4>
                <p className="body-medium">
                  You must create an account to use PromptsVault. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Account Security</h4>
                <p className="body-medium">
                  You agree to notify us immediately of any unauthorized use of your account. We cannot be held responsible for losses arising from unauthorized use of your account.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Account Termination</h4>
                <p className="body-medium">
                  You may terminate your account at any time. We reserve the right to terminate accounts that violate these terms or engage in prohibited activities.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="feature-card mb-8">
            <CardHeader>
              <CardTitle className="heading-3">Acceptable Use</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="body-medium">
                You agree not to use PromptsVault for any of the following prohibited activities:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="body-medium">Storing illegal, harmful, or offensive content</li>
                <li className="body-medium">Violating any applicable laws or regulations</li>
                <li className="body-medium">Attempting to gain unauthorized access to our systems</li>
                <li className="body-medium">Interfering with the proper functioning of the Service</li>
                <li className="body-medium">Sharing your account credentials with others</li>
                <li className="body-medium">Using the Service to spam or harass others</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="feature-card mb-8">
            <CardHeader>
              <CardTitle className="heading-3">Subscription and Billing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Subscription Plans</h4>
                <p className="body-medium">
                  PromptsVault offers monthly and annual subscription plans. Subscription fees are billed in advance and are non-refundable except as required by law.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Price Changes</h4>
                <p className="body-medium">
                  We reserve the right to change our subscription prices with 30 days advance notice. Price changes will not affect your current billing cycle.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Cancellation</h4>
                <p className="body-medium">
                  You may cancel your subscription at any time. Your access will continue until the end of your current billing period.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="feature-card mb-8">
            <CardHeader>
              <CardTitle className="heading-3">Data Ownership and Privacy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Your Content</h4>
                <p className="body-medium">
                  You retain all rights to the prompts and content you store in PromptsVault. We do not claim ownership of your content.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Data Security</h4>
                <p className="body-medium">
                  We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Data Export</h4>
                <p className="body-medium">
                  You can export your data at any time. Upon account termination, your data will be permanently deleted within 30 days.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="feature-card mb-8">
            <CardHeader>
              <CardTitle className="heading-3">Service Availability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="body-medium">
                While we strive to maintain high availability, PromptsVault is provided "as is" without guarantees of uptime. We may need to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="body-medium">Perform scheduled maintenance</li>
                <li className="body-medium">Update or modify the Service</li>
                <li className="body-medium">Temporarily suspend access for security reasons</li>
              </ul>
              <p className="body-medium">
                We will provide advance notice of planned maintenance whenever possible.
              </p>
            </CardContent>
          </Card>

          <Card className="feature-card mb-8">
            <CardHeader>
              <CardTitle className="heading-3">Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="body-medium">
                To the maximum extent permitted by law, PromptsVault and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of data, loss of profits, or business interruption, arising from your use of the Service.
              </p>
            </CardContent>
          </Card>

          <Card className="feature-card mb-8">
            <CardHeader>
              <CardTitle className="heading-3">Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="body-medium">
                We reserve the right to modify these Terms of Service at any time. We will notify users of significant changes via email or through the Service. Your continued use of PromptsVault after such modifications constitutes acceptance of the updated terms.
              </p>
            </CardContent>
          </Card>

          <Card className="feature-card">
            <CardHeader>
              <CardTitle className="heading-3">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="body-medium">
                If you have questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4">
                <p className="body-medium font-semibold">Email: legal@promptsvault.app</p>
                <p className="body-medium">We will respond to legal inquiries within 48 hours.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;