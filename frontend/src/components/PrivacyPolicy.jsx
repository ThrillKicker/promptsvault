import React from 'react';
import Layout from './Layout';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="section-padding pt-32">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="heading-1 mb-4">Privacy Policy</h1>
            <p className="body-large text-gray-600">
              Last updated: January 24, 2025
            </p>
          </div>

          <Card className="feature-card mb-8">
            <CardHeader>
              <CardTitle className="heading-3">Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Account Information</h4>
                <p className="body-medium">
                  When you create an account, we collect your email address, username, and encrypted password. We use industry-standard encryption to protect your login credentials.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Prompt Data</h4>
                <p className="body-medium">
                  Your AI prompts are encrypted before being stored on our servers. We cannot read or access the content of your prompts - only you have the keys to decrypt your data.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Usage Information</h4>
                <p className="body-medium">
                  We collect basic usage analytics to improve our service, including login times, feature usage, and performance metrics. This data is anonymized and cannot be linked to your personal information.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="feature-card mb-8">
            <CardHeader>
              <CardTitle className="heading-3">How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Service Provision</h4>
                <p className="body-medium">
                  We use your information to provide, maintain, and improve PromptsVault. This includes syncing your encrypted prompts across devices and providing customer support.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Communication</h4>
                <p className="body-medium">
                  We may send you service-related emails, such as security alerts, feature updates, or account notifications. You can opt out of non-essential communications at any time.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Security and Fraud Prevention</h4>
                <p className="body-medium">
                  We use your information to detect and prevent unauthorized access, fraud, and abuse of our service.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="feature-card mb-8">
            <CardHeader>
              <CardTitle className="heading-3">Data Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Encryption</h4>
                <p className="body-medium">
                  All your prompts are encrypted using AES-256 encryption before being stored. Your encryption keys are derived from your password and are never stored on our servers.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Infrastructure Security</h4>
                <p className="body-medium">
                  We use industry-standard security measures including encrypted connections (HTTPS/TLS), secure data centers, and regular security audits.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Access Controls</h4>
                <p className="body-medium">
                  Access to your data is strictly limited to authorized personnel who need it to provide support or maintain the service. All access is logged and monitored.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="feature-card mb-8">
            <CardHeader>
              <CardTitle className="heading-3">Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Data Access and Portability</h4>
                <p className="body-medium">
                  You can export all your data at any time through your account settings. This includes all your prompts, categories, and account information.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Data Deletion</h4>
                <p className="body-medium">
                  You can delete your account and all associated data at any time. Upon deletion, your data is permanently removed from our servers within 30 days.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Data Correction</h4>
                <p className="body-medium">
                  You can update or correct your account information and prompts at any time through the PromptsVault interface.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="feature-card mb-8">
            <CardHeader>
              <CardTitle className="heading-3">Third-Party Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="body-medium">
                PromptsVault uses minimal third-party services to operate:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="body-medium">Payment processing through Stripe (for subscription management)</li>
                <li className="body-medium">Email delivery through trusted providers (for account notifications)</li>
                <li className="body-medium">Analytics services (with anonymized data only)</li>
              </ul>
              <p className="body-medium">
                These services are carefully selected and bound by strict data protection agreements. Your encrypted prompt data is never shared with third parties.
              </p>
            </CardContent>
          </Card>

          <Card className="feature-card mb-8">
            <CardHeader>
              <CardTitle className="heading-3">Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="body-medium">
                We may update this Privacy Policy from time to time. We will notify you of any significant changes by email or through the PromptsVault interface. Your continued use of the service after such modifications constitutes acceptance of the updated Privacy Policy.
              </p>
            </CardContent>
          </Card>

          <Card className="feature-card">
            <CardHeader>
              <CardTitle className="heading-3">Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="body-medium">
                If you have questions about this Privacy Policy or how we handle your data, please contact us at:
              </p>
              <div className="mt-4">
                <p className="body-medium font-semibold">Email: privacy@promptsvault.app</p>
                <p className="body-medium">We will respond to privacy inquiries within 48 hours.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;