export function TermsContent() {
  return (
    <div className="flex flex-col gap-[24px] text-[15px] leading-[1.7] text-black">
      {/* Subtitle */}
      <p className="text-center font-bold text-[16px]">
        Clear Terms. Trusted Partnerships.
      </p>

      {/* Intro */}
      <p>
        Welcome to <strong>OneTone Collective</strong>. These Terms & Conditions
        ("Terms") govern your access to and use of the OneTone website, APIs,
        AI-powered products, enterprise platform, and related services
        (collectively, the "Platform"). By accessing or using the Platform, you
        agree to comply with these Terms.
      </p>

      {/* 1. General */}
      <Section title="1. General">
        <p>
          This Agreement constitutes a legally binding agreement between{" "}
          <strong>OneTone Collective</strong> ("OneTone", "Company", "we",
          "our", or "us") and any individual or organization ("User",
          "Customer", "you", or "your") accessing or using the Platform.
        </p>
        <p>
          OneTone provides enterprise AI-powered lending infrastructure that
          enables Banks, NBFCs, Fintechs, Financial Institutions, and Enterprise
          Customers to automate lending operations through AI Agents, APIs,
          workflow automation, intelligent decisioning, and secure digital
          infrastructure.
        </p>
        <p>
          By accessing the Platform, registering an account, requesting a demo,
          integrating our APIs, or using any of our products or services, you
          acknowledge that you have read, understood, and agree to be bound by
          these Terms, our Privacy Policy, and any additional policies
          referenced herein.
        </p>
      </Section>

      {/* 2. Eligibility */}
      <Section title="2. Eligibility">
        <p>
          The Platform is intended solely for organizations and individuals who
          are legally capable of entering into binding contracts under
          applicable law.
        </p>
        <p>By using the Platform, you represent and warrant that:</p>
        <ul className="list-disc pl-[20px] flex flex-col gap-[4px]">
          <li>You are at least 18 years of age.</li>
          <li>
            You possess the legal authority to represent your organization,
            where applicable.
          </li>
          <li>
            All information provided is accurate, complete, and up to date.
          </li>
          <li>
            Your use of the Platform complies with all applicable laws and
            regulations.
          </li>
        </ul>
        <p>
          OneTone reserves the right to suspend or terminate access if these
          eligibility requirements are not met.
        </p>
      </Section>

      {/* 3. Privacy */}
      <Section title="3. Privacy">
        <p>Your use of the Platform is governed by our Privacy Policy.</p>
        <p>
          By using OneTone, you acknowledge that information may be collected,
          processed, stored, and secured in accordance with our Privacy Policy
          and applicable data protection laws.
        </p>
      </Section>

      {/* 4. Registration & Account */}
      <Section title="4. Registration & Account">
        <p>Certain Platform features require account registration.</p>
        <p>You agree to:</p>
        <ul className="list-disc pl-[20px] flex flex-col gap-[4px]">
          <li>Provide accurate and complete information.</li>
          <li>Maintain the confidentiality of your credentials.</li>
          <li>Notify us immediately of any unauthorized account activity.</li>
          <li>
            Accept responsibility for all activities performed through your
            account.
          </li>
        </ul>
        <p>
          OneTone reserves the right to suspend, restrict, or terminate accounts
          containing inaccurate, misleading, or fraudulent information.
        </p>
      </Section>

      {/* 5. Communications */}
      <Section title="5. Communications">
        <p>
          By using the Platform, you consent to receive communications from
          OneTone, including:
        </p>
        <ul className="list-disc pl-[20px] flex flex-col gap-[4px]">
          <li>Product updates</li>
          <li>Service notifications</li>
          <li>Security alerts</li>
          <li>Maintenance announcements</li>
          <li>Technical support</li>
          <li>Contractual communications</li>
          <li>Compliance notices</li>
        </ul>
        <p>
          Communications may be delivered via email, phone, SMS, platform
          notifications, or other electronic means.
        </p>
      </Section>

      {/* 6. Platform Services */}
      <Section title="6. Platform Services">
        <p>
          OneTone provides enterprise software and technology infrastructure
          including, but not limited to:
        </p>
        <ul className="list-disc pl-[20px] flex flex-col gap-[4px]">
          <li>AI Lending Agents</li>
          <li>Lending APIs</li>
          <li>Credit Decision Engine</li>
          <li>Workflow Automation</li>
          <li>Customer Onboarding</li>
          <li>KYC & Identity Verification Integrations</li>
          <li>Document Processing</li>
          <li>Voice & Vernacular AI</li>
          <li>Risk Assessment</li>
          <li>Credit Operations</li>
          <li>MobileForge</li>
          <li>CreditForge</li>
          <li>DataShield Security</li>
        </ul>
        <p>OneTone acts solely as a technology platform provider.</p>
        <p>
          Unless explicitly agreed otherwise, OneTone does not operate as a
          bank, NBFC, lender, financial institution, or credit provider and does
          not make lending decisions on behalf of customers.
        </p>
        <p>
          Any lending decisions remain the sole responsibility of the respective
          financial institution using the Platform.
        </p>
      </Section>

      {/* 7. Customer Responsibilities */}
      <Section title="7. Customer Responsibilities">
        <p>Customers agree to:</p>
        <ul className="list-disc pl-[20px] flex flex-col gap-[4px]">
          <li>Use the Platform lawfully.</li>
          <li>Maintain the security of their systems.</li>
          <li>Protect API credentials.</li>
          <li>Ensure data shared with OneTone is accurate.</li>
          <li>
            Obtain all necessary customer consents before processing personal
            data through the Platform.
          </li>
          <li>
            Comply with applicable banking, financial, and data protection
            regulations.
          </li>
        </ul>
        <p>
          Customers remain solely responsible for lending decisions, customer
          interactions, regulatory compliance, and business operations conducted
          through the Platform.
        </p>
      </Section>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-[12px]">
      <p className="font-bold text-[30px]  text-black">{title}</p>
      {children}
    </div>
  );
}
