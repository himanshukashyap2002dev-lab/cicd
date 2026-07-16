import PrivacyPolicy from "@/feature/privacy-policy/privacy-policy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | OneTone",
  description:
    "Read OneTone's Privacy Policy to learn how we collect, use, and protect your data across our AI-powered lending infrastructure and services.",
  keywords: [
    "OneTone privacy policy",
    "data protection",
    "lending infrastructure privacy",
    "OneTone data security",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | OneTone",
    description:
      "Read OneTone's Privacy Policy to learn how we collect, use, and protect your data across our AI-powered lending infrastructure and services.",
    url: "https://www.onetone.ai/privacy-policy",
    siteName: "OneTone",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | OneTone",
    description:
      "Read OneTone's Privacy Policy to learn how we collect, use, and protect your data across our AI-powered lending infrastructure and services.",
  },
  alternates: {
    canonical: "https://www.onetone.ai/privacy-policy",
  },
};

export default function Page() {
  return <PrivacyPolicy />;
}
