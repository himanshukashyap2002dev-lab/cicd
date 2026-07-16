import ContactUsPage from "@/feature/contact-us/contact-us";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | OneTone",
  description:
    "Get in touch with OneTone to learn more about our AI-powered lending infrastructure, request a demo, or ask any questions about our products and services.",
  keywords: [
    "OneTone contact us",
    "contact OneTone",
    "lending infrastructure demo",
    "OneTone support",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact Us | OneTone",
    description:
      "Get in touch with OneTone to learn more about our AI-powered lending infrastructure, request a demo, or ask any questions about our products and services.",
    url: "https://www.onetone.ai/contact-us",
    siteName: "OneTone",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | OneTone",
    description:
      "Get in touch with OneTone to learn more about our AI-powered lending infrastructure, request a demo, or ask any questions about our products and services.",
  },
  alternates: {
    canonical: "https://www.onetone.ai/contact-us",
  },
};

export default function ContactUs() {
  return <ContactUsPage />;
}
