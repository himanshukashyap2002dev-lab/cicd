import TermsAndCondition from "@/feature/terms&cond/terms-condition";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | OneTone",
  description:
    "Read OneTone's Terms and Conditions to understand the rules, guidelines, and policies governing the use of our AI-powered lending infrastructure and services.",
  keywords: [
    "OneTone terms and conditions",
    "terms of service",
    "lending infrastructure terms",
    "OneTone policies",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms & Conditions | OneTone",
    description:
      "Read OneTone's Terms and Conditions to understand the rules, guidelines, and policies governing the use of our AI-powered lending infrastructure and services.",
    url: "https://www.onetone.ai/terms-and-conditions",
    siteName: "OneTone",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | OneTone",
    description:
      "Read OneTone's Terms and Conditions to understand the rules, guidelines, and policies governing the use of our AI-powered lending infrastructure and services.",
  },
  alternates: {
    canonical: "https://www.onetone.ai/terms-and-conditions",
  },
};

export default function Page() {
  return <TermsAndCondition />;
}
