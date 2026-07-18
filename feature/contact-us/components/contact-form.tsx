"use client";

import { useBaseContext } from "@/components/context/use-base-context";
import { useState, useRef, type FormEvent, type ChangeEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const { appconfig } = useBaseContext();
  const RECAPTCHA_SITE_KEY = appconfig.recaptchaSiteKey;

  const captchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Invisible reCAPTCHA calls this once the background challenge resolves.
  // The actual submission happens here — not in handleSubmit — because the
  // token only exists after execute() finishes.
  const handleCaptchaVerified = async (token: string | null) => {
    if (!token) {
      setStatus("error");
      setErrorMessage("Captcha verification failed. Please try again.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          source: "Website Contact Form",
          captchaToken: token,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          data?.error || "Something went wrong. Please try again.",
        );
      }

      setStatus("success");
      setFormData(initialFormData);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      captchaRef.current?.reset();
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    // No checkbox to click first — this triggers the invisible challenge,
    // which calls handleCaptchaVerified with a token once it resolves.
    captchaRef.current?.execute();
  };

  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="text-2xl font-space font-bold text-gray-900 text-center sm:text-3xl">
        Send us a message
      </h2>
      <p className="mt-2 text-center text-gray-500">
        Don&apos;t hesitate, we&apos;re just a message away. Our super friendly
        team will get back to you as soon as possible
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@framer.com"
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>

        {/* <div>
          <label
            htmlFor="subject"
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder="Type here"
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div> */}

        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Type here..."
            className="w-full resize-none rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>

        {status === "error" && (
          <p role="alert" className="text-sm text-red-600">
            {errorMessage}
          </p>
        )}
        {status === "success" && (
          <p role="status" className="text-sm text-green-600">
            Thanks! Your message has been sent — we&apos;ll be in touch soon.
          </p>
        )}

        {/* size="invisible" renders no checkbox — only Google's small
            floating badge (bottom-right by default). Keep the badge
            visible per Google's terms unless you add the required
            attribution text elsewhere on the page if you hide it. */}
        <ReCAPTCHA
          ref={captchaRef}
          sitekey={RECAPTCHA_SITE_KEY}
          size="invisible"
          onChange={handleCaptchaVerified}
          onExpired={() => handleCaptchaVerified(null)}
          onErrored={() => handleCaptchaVerified(null)}
        />

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-lg cursor-pointer bg-[#439361] py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
