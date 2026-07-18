import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/feature/home/components/navbar";
import Footer from "@/feature/home/components/footer";
import { BaseContextProvider } from "@/components/context/use-base-context";
import { ENVVARIABLES } from "@/components/types/types";
import { unstable_noStore as nostore } from "next/cache";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OneTone Collective",
  description:
    "One Tone Collective provides a fully modular platform of intelligent agents, APIs, and deployable solutions that automate every stage of the lending lifecycle. Seamless, scalable, and compliant from day one.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  nostore();
  const appConfig: ENVVARIABLES = {
    recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY!,
  };
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#F6F9F780] flex flex-col font-sans">
        <BaseContextProvider appconfig={appConfig}>
          <Navbar />
          {children}
          <Footer />
        </BaseContextProvider>
      </body>
    </html>
  );
}
