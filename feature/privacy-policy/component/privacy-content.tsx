export function PrivacyContent() {
  return (
    <div className="flex flex-col gap-[24px] text-[15px] leading-[1.7] text-black">
      {/* Subtitle */}
      <p className="text-center font-bold text-[16px]">
        Your Data. Protected by Design.
      </p>

      {/* Intro */}
      <p>
        At <strong>OneTone Collective</strong>, protecting your data is
        fundamental to everything we build. We are committed to maintaining the
        highest standards of security, transparency, and compliance while
        empowering banks, NBFCs, and fintechs with AI-powered lending
        infrastructure.
      </p>

      {/* 1. Introduction */}
      <Section title="1. Introduction">
        <p>
          This Privacy Policy ("Policy") describes how{" "}
          <strong>OneTone Collective</strong> ("OneTone", "we", "our", or "us")
          collects, processes, stores, and protects personal and business
          information when you access our website, platform, APIs, AI-powered
          products, or enterprise services (collectively referred to as the{" "}
          <strong>"Platform"</strong>).
        </p>
        <p>
          Our Platform provides AI-powered lending infrastructure that enables
          financial institutions to automate customer onboarding, credit
          decisioning, underwriting, loan processing, collections, and other
          lending workflows.
        </p>
        <p>
          By accessing or using the Platform, you acknowledge that you have read
          and understood this Privacy Policy and consent to the collection, use,
          processing, storage, and disclosure of information as described
          herein.
        </p>
      </Section>

      {/* 2. Information We Collect */}
      <Section title="2. Information We Collect">
        <p>
          To provide our products and services, we may collect the following
          categories of information:
        </p>

        <SubSection title="Business Information">
          <ul className="list-disc pl-[20px] flex flex-col gap-[4px]">
            <li>Organization Name</li>
            <li>Business Email</li>
            <li>Business Phone Number</li>
            <li>Company Details</li>
            <li>Designation</li>
            <li>Industry Information</li>
          </ul>
        </SubSection>

        <SubSection title="Account Information">
          <ul className="list-disc pl-[20px] flex flex-col gap-[4px]">
            <li>User Profile</li>
            <li>Login Credentials</li>
            <li>Authentication Details</li>
            <li>User Preferences</li>
          </ul>
        </SubSection>

        <SubSection title="Customer Data">
          <p>
            Where our enterprise customers choose to use our Platform for
            lending workflows, customer information may include:
          </p>
          <ul className="list-disc pl-[20px] flex flex-col gap-[4px]">
            <li>Identity Verification Information</li>
            <li>KYC Documentation</li>
            <li>Financial Information</li>
            <li>Loan Application Data</li>
            <li>Credit Assessment Information</li>
            <li>Supporting Documents</li>
          </ul>
          <p>
            Such information is processed solely on behalf of our enterprise
            customers in accordance with applicable agreements and regulatory
            requirements.
          </p>
        </SubSection>

        <SubSection title="Technical Information">
          <p>We automatically collect:</p>
          <ul className="list-disc pl-[20px] flex flex-col gap-[4px]">
            <li>IP Address</li>
            <li>Browser Type</li>
            <li>Device Information</li>
            <li>Operating System</li>
            <li>Session Logs</li>
            <li>Usage Analytics</li>
            <li>Performance Metrics</li>
          </ul>
        </SubSection>

        <SubSection title="API & Platform Data">
          <p>When using our APIs and AI services, we may collect:</p>
          <ul className="list-disc pl-[20px] flex flex-col gap-[4px]">
            <li>API Requests</li>
            <li>Authentication Logs</li>
            <li>System Events</li>
            <li>Error Reports</li>
            <li>Performance Metrics</li>
            <li>Integration Metadata</li>
          </ul>
        </SubSection>
      </Section>

      {/* 3. How We Collect Information */}
      <Section title="3. How We Collect Information">
        <p>We collect information through:</p>
        <ul className="list-disc pl-[20px] flex flex-col gap-[4px]">
          <li>Information provided directly by users</li>
          <li>Enterprise onboarding</li>
          <li>API integrations</li>
          <li>Customer support interactions</li>
          <li>Website forms</li>
          <li>Cookies and analytics technologies</li>
          <li>Third-party integrations authorized by our customers</li>
        </ul>
      </Section>

      {/* 4. How We Use Information */}
      <Section title="4. How We Use Information">
        <p>We use information to:</p>
        <ul className="list-disc pl-[20px] flex flex-col gap-[4px]">
          <li>Deliver our products and services</li>
          <li>Authenticate users</li>
          <li>Process enterprise requests</li>
          <li>Enable AI-powered lending workflows</li>
          <li>Improve platform performance</li>
          <li>Secure our infrastructure</li>
          <li>Detect fraud and misuse</li>
          <li>Provide customer support</li>
          <li>Generate analytics</li>
          <li>Maintain regulatory compliance</li>
          <li>Communicate important platform updates</li>
        </ul>
      </Section>

      {/* 5. Information Sharing */}
      <Section title="5. Information Sharing">
        <p>
          We do <strong>not</strong> sell personal information.
        </p>
        <p>Information may be shared only with:</p>
        <ul className="list-disc pl-[20px] flex flex-col gap-[4px]">
          <li>Authorized Banking Partners</li>
          <li>NBFCs</li>
          <li>Financial Institutions</li>
          <li>Enterprise Customers</li>
          <li>Technology Service Providers</li>
          <li>Identity Verification Providers</li>
          <li>Credit Bureaus (where applicable)</li>
          <li>Cloud Infrastructure Providers</li>
          <li>Regulatory Authorities where required by applicable law</li>
        </ul>
        <p>
          All third parties are contractually obligated to maintain appropriate
          security, confidentiality, and data protection standards.
        </p>
      </Section>

      {/* 6. AI & Automated Decision Systems */}
      <Section title="6. AI & Automated Decision Systems">
        <p>
          Our Platform utilizes artificial intelligence to assist enterprise
          customers with:
        </p>
        <ul className="list-disc pl-[20px] flex flex-col gap-[4px]">
          <li>Credit Decisioning</li>
          <li>Document Processing</li>
          <li>Risk Analysis</li>
          <li>Customer Onboarding</li>
          <li>Workflow Automation</li>
          <li>Fraud Detection</li>
          <li>Lending Operations</li>
        </ul>
        <p>
          AI-generated outputs are intended solely to assist enterprise
          customers in their business operations. Customers remain responsible
          for reviewing, validating, and making all final business, lending,
          operational, compliance, and regulatory decisions. AI-generated
          outputs should not be interpreted as legal, financial, or regulatory
          advice.
        </p>
      </Section>

      {/* 7. Data Security */}
      <Section title="7. Data Security">
        <p>
          OneTone follows industry-standard security practices to safeguard
          customer information.
        </p>
        <p>These include:</p>
        <ul className="list-disc pl-[20px] flex flex-col gap-[4px]">
          <li>Encryption at Rest</li>
          <li>Encryption in Transit</li>
          <li>Secure Cloud Infrastructure</li>
          <li>Role-Based Access Controls</li>
          <li>Continuous Monitoring</li>
          <li>Security Audits</li>
          <li>Infrastructure Logging</li>
          <li>Vulnerability Assessments</li>
          <li>Disaster Recovery Procedures</li>
        </ul>
        <p>
          We continuously review and improve our security controls to protect
          enterprise and customer data. While OneTone implements commercially
          reasonable technical and organizational safeguards, no method of
          electronic transmission or storage can be guaranteed to be completely
          secure. Accordingly, OneTone cannot guarantee absolute security of
          information transmitted through or stored on the Platform.
        </p>
      </Section>

      {/* 8. Data Retention */}
      <Section title="8. Data Retention">
        <p>We retain information only for as long as necessary to:</p>
        <ul className="list-disc pl-[20px] flex flex-col gap-[4px]">
          <li>Deliver our services</li>
          <li>Fulfill contractual obligations</li>
          <li>Meet regulatory requirements</li>
          <li>Resolve disputes</li>
          <li>Maintain security records</li>
        </ul>
        <p>
          Data is securely deleted or anonymized when it is no longer required,
          unless a longer retention period is required or permitted under
          applicable laws or contractual obligations.
        </p>
      </Section>

      {/* 9. Your Rights */}
      <Section title="9. Your Rights">
        <p>Subject to applicable laws, users may have the right to:</p>
        <ul className="list-disc pl-[20px] flex flex-col gap-[4px]">
          <li>Access their information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of their information</li>
          <li>Withdraw consent, where applicable</li>
          <li>Restrict certain processing activities</li>
          <li>Request data portability</li>
        </ul>
        <p>
          Requests may be submitted through our designated support channels. We
          will process such requests in accordance with applicable laws and
          regulatory requirements.
        </p>
      </Section>

      {/* 10. Data Storage */}
      <Section title="10. Data Storage">
        <p>
          Customer information is processed and stored{" "}
          <strong>only within India</strong> using secure infrastructure managed
          by OneTone and its authorized service providers.
        </p>
        <p>
          OneTone does <strong>not</strong> transfer or store customer
          information outside India. Appropriate technical and organizational
          safeguards are implemented to protect all information stored within
          India in accordance with applicable laws, industry standards, and
          security best practices.
        </p>
      </Section>

      {/* 11. Cookies */}
      <Section title="11. Cookies">
        <p>We use cookies and similar technologies to:</p>
        <ul className="list-disc pl-[20px] flex flex-col gap-[4px]">
          <li>Improve website performance</li>
          <li>Maintain user sessions</li>
          <li>Analyze website traffic</li>
          <li>Enhance user experience</li>
          <li>Understand platform usage and performance</li>
        </ul>
        <p>
          Cookies help us provide a secure and efficient browsing experience.
          Users may manage or disable cookies through their browser settings.
          Please note that disabling certain cookies may affect the
          functionality of the Platform.
        </p>
      </Section>

      {/* 12. Third-Party Services */}
      <Section title="12. Third-Party Services">
        <p>
          Our Platform may integrate with trusted third-party service providers,
          including:
        </p>
        <ul className="list-disc pl-[20px] flex flex-col gap-[4px]">
          <li>Banking Systems</li>
          <li>Identity Verification Providers</li>
          <li>Credit Bureaus</li>
          <li>Cloud Infrastructure Providers</li>
          <li>Payment Providers</li>
          <li>Analytics Platforms</li>
        </ul>
        <p>
          The Platform also utilizes{" "}
          <strong>OneTone's proprietary internal systems</strong>, including its
          own CRM platform, to manage enterprise services, customer
          relationships, and operational workflows.
        </p>
        <p>
          Each third-party provider maintains its own privacy and security
          practices. While OneTone carefully selects trusted service providers,
          we are not responsible for the privacy practices or policies of
          third-party platforms that operate independently of OneTone.
        </p>
      </Section>

      {/* 13. Changes to this Policy */}
      <Section title="13. Changes to this Policy">
        <p>
          We may revise or update this Privacy Policy from time to time to
          reflect changes in:
        </p>
        <ul className="list-disc pl-[20px] flex flex-col gap-[4px]">
          <li>Applicable laws and regulations</li>
          <li>Regulatory or compliance requirements</li>
          <li>Industry standards and best practices</li>
          <li>Platform functionality and services</li>
          <li>Business operations</li>
        </ul>
        <p>
          This Privacy Policy is intended to comply with applicable laws and
          regulations governing OneTone's operations, including, where
          applicable:
        </p>
        <ul className="list-disc pl-[20px] flex flex-col gap-[4px]">
          <li>
            <strong>
              Digital Personal Data Protection Act, 2023 (DPDP Act)
            </strong>
          </li>
          <li>
            <strong>Information Technology Act, 2000</strong> and applicable
            rules thereunder
          </li>
          <li>
            <strong>Applicable Reserve Bank of India (RBI) guidelines</strong>,
            where relevant
          </li>
          <li>
            Industry-recognized security and compliance standards, including{" "}
            <strong>ISO 27001</strong> and <strong>SOC 2</strong>, where
            applicable
          </li>
        </ul>
        <p>
          Updated versions of this Privacy Policy will be published on this page
          together with the revised effective date. Continued use of the
          Platform after such updates constitutes acceptance of the revised
          Policy.
        </p>
      </Section>

      {/* 14. Contact Us */}
      <Section title="14. Contact Us">
        <p>
          If you have any questions regarding this Privacy Policy or wish to
          exercise your privacy rights, please contact us.
        </p>
        <p>
          <strong>OneTone Collective</strong>
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:info@onetonecollective.com"
            className="text-black underline underline-offset-2"
          >
            info@onetonecollective.com
          </a>
        </p>
        <p>
          <strong>Website:</strong>{" "}
          <a
            href="http://www.onetonecollective.com"
            className="text-black underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.onetonecollective.com
          </a>
        </p>
      </Section>

      {/* 15. Governing Law */}
      <Section title="15. Governing Law">
        <p>
          This Privacy Policy shall be governed by and construed in accordance
          with the laws of India.
        </p>
        <p>
          Any disputes arising out of or relating to this Privacy Policy shall
          be subject to the applicable legal and regulatory requirements and,
          unless otherwise required by law, the exclusive jurisdiction of the
          competent courts located in <strong>Gurugram, Haryana</strong>.
        </p>
      </Section>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Section — bold heading + stacked children
// ---------------------------------------------------------------------------

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-[12px]">
      <p className="font-bold text-[15px] text-black">{title}</p>
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// SubSection — bold sub-heading inside a Section (used in section 2)
// ---------------------------------------------------------------------------

function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-[8px]">
      <p className="font-bold text-[14px] text-black">{title}</p>
      {children}
    </div>
  );
}
