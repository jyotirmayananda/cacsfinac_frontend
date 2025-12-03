
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export default function PrivacyPolicyPage() {
  return (
    <main className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Privacy Policy' },
          ]}
        />
        <div className="mt-8 bg-secondary p-6 md:p-10 rounded-2xl shadow-sm">
          <div className="prose max-w-none prose-headings:font-headline prose-headings:text-primary prose-a:text-primary hover:prose-a:underline prose-strong:text-foreground">
            
            <div className="text-center mb-10">
                <h1 className='text-3xl md:text-4xl'>Privacy Policy</h1>
            </div>

            <div className="text-justify space-y-4">
              <h2 className='text-2xl'>1. Purpose and Scope</h2>
              <p>
                CACS FINACC is committed to protecting the privacy and confidentiality of individuals and businesses interacting with our platform. This Privacy Policy outlines how we collect, process, use, disclose, and safeguard your personal and financial data in accordance with applicable Indian laws and allied regulations.
                This policy applies to all users of our website, services, contact forms, and communications.
              </p>

              <h2 className='text-2xl'>2. Information We Collect</h2>
              <p>We may collect the following categories of data:</p>
              <ul>
                <li>
                  <p><strong>Personally Identifiable Information (PII)</strong></p>
                  <ul>
                    <li>Full name, email address, contact number, address</li>
                    <li>PAN, Aadhaar (only if required), and other identification documents</li>
                  </ul>
                </li>
                <li>
                  <p><strong>Financial & Regulatory Data</strong></p>
                  <ul>
                    <li>Income statements, GST details, bank statements, invoices</li>
                    <li>ROC compliance documents, tax filings, audit reports</li>
                  </ul>
                </li>
                <li>
                  <p><strong>Business Information</strong></p>
                  <ul>
                    <li>Company incorporation details, statutory filings, director data</li>
                  </ul>
                </li>
                <li>
                  <p><strong>Technical and Browsing Data</strong></p>
                  <ul>
                    <li>IP address, device/browser data, geolocation, pages visited</li>
                    <li>Cookies, session information, and usage behavior</li>
                  </ul>
                </li>
              </ul>

              <h2 className='text-2xl'>3. Legal Basis for Data Processing</h2>
              <p>Our data processing activities are grounded in:</p>
              <ul>
                <li><strong>Consent:</strong> For communication, updates, and onboarding</li>
                <li><strong>Contractual necessity:</strong> For delivering professional services</li>
                <li><strong>Legal obligation:</strong> For compliance with tax and regulatory laws</li>
                <li><strong>Legitimate interest:</strong> To improve services and ensure system integrity</li>
              </ul>

              <h2 className='text-2xl'>4. Purpose of Data Collection</h2>
              <p>We collect and process your information strictly for:</p>
              <ul>
                <li>Providing chartered accountancy, taxation, and legal compliance services</li>
                <li>Filing of GST, ITR, TDS, and ROC returns</li>
                <li>Conducting audits, reconciliations, and statutory verifications</li>
                <li>Delivering client service and support</li>
                <li>Internal documentation, billing, and communication</li>
                <li>Enhancing website functionality and user experience</li>
              </ul>

              <h2 className='text-2xl'>5. Data Security Measures</h2>
              <p>We implement robust administrative, technical, and physical safeguards to protect your data, including:</p>
              <ul>
                <li>Secure Sockets Layer (SSL) encryption</li>
                <li>Controlled user access and role-based data permissions</li>
                <li>Secure document storage with restricted access</li>
                <li>Periodic data audits and penetration testing</li>
                <li>Compliance with data retention and disposal norms</li>
              </ul>

              <h2 className='text-2xl'>6. Data Retention Policy</h2>
              <p>We retain your data only for as long as necessary to fulfill the purposes outlined in this policy or as required by law (e.g., 8 years under Indian tax laws).</p>
              
              <h2 className='text-2xl'>7. Disclosure of Information</h2>
              <p>Your data may be disclosed to the following, only when necessary:</p>
              <ul>
                <li>Authorized regulatory/government bodies (e.g., GSTN, MCA, Income Tax Department)</li>
                <li>Authorized third-party partners under strict confidentiality (e.g., cloud storage, digital signature agencies)</li>
                <li>Legal professionals, if required during dispute resolution</li>
                <li>We do not sell, rent, or trade your personal information.</li>
              </ul>

              <h2 className='text-2xl'>8. Use of Cookies and Analytics Tools</h2>
              <p>We use cookies and third-party tools (such as Google Analytics) to:</p>
              <ul>
                <li>Track site performance and user behavior</li>
                <li>Improve page load speed and content delivery</li>
                <li>Personalize your browsing experience</li>
              </ul>
              <p>You may manage cookie preferences through your browser settings.</p>

              <h2 className='text-2xl'>9. Your Rights Under Indian Law</h2>
              <p>As a data subject, you have the right to:</p>
              <ul>
                <li>Access the data we hold about you</li>
                <li>Request rectification of inaccurate data</li>
                <li>Withdraw consent at any time (subject to legal limitations)</li>
                <li>Request erasure of your data, unless prohibited by statutory recordkeeping</li>
              </ul>

              <h2 className='text-2xl'>10. Third-Party Links and Integrations</h2>
              <p>Our website may contain links to external websites or tools (e.g., payment gateways, digital signature platforms). We are not responsible for their privacy practices and recommend reviewing their privacy policies before engagement.</p>
              
              <h2 className='text-2xl'>11. Children’s Privacy</h2>
              <p>Our services are not intended for use by individuals under the age of 18. We do not knowingly collect data from minors.</p>

              <h2 className='text-2xl'>12. Changes to This Privacy Policy</h2>
              <p>We reserve the right to update or revise this Privacy Policy at any time. Updates will be posted on this page with a revised "Effective Date". Your continued use of our services constitutes acceptance of such updates.</p>

              <h2 className='text-2xl'>13. Contact Information</h2>
              <p>
                For questions, concerns, or data requests, contact:<br />
                <strong>CA CS FINACC</strong><br />
                Email: <a href="mailto:info@cacsfinaccservices.com">info@cacsfinaccservices.com</a><br />
                Phone/WhatsApp: +91-9591633648<br />
                Bengaluru, Karnataka | Serving Clients Across India
              </p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
