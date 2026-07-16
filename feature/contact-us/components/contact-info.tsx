import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <div>
          <h2 className="text-2xl font-space font-bold text-gray-900 sm:text-3xl">
            Contact Information
          </h2>
          <p className="mt-4 max-w-md text-gray-500">
            We&apos;re here to help! Whether you have questions, need support,
            or want to share feedback, our team is ready to assist you. Reach
            out anytime and we&apos;ll get back to you as quickly as possible.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Contact Us
              </h3>
              <div className="mt-3 space-y-2.5">
                <a
                  href="tel:+918796166220"
                  className="flex items-center gap-2 text-sm text-[#439361] transition-colors hover:text-green-700"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  +91 8796166220
                </a>
                <a
                  href="mailto:info@onetonecollective.com"
                  className="flex items-center gap-2 text-sm text-[#439361] transition-colors hover:text-green-700"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  info@onetonecollective.com
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Visit our Office
              </h3>
              <div className="mt-3 flex items-start gap-2 text-sm text-[#439361]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  2nd Floor, Plot No. 34, Udyog Vihar, Phase-4, Gurugram,
                  Haryana – 122015
                </span>
              </div>
            </div>
          </div>

          <hr className="my-10 border-gray-200" />
        </div>
      </div>
      <div className=" -mt-[20px]">
        <h3 className="text-sm font-semibold text-gray-900">
          Follow us on Socials
        </h3>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="#"
            className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
            Facebook
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
