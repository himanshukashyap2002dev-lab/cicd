/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const footerLinks = {
  mainPages: [
    { label: "Home", href: "/#main" },
    { label: "Features", href: "/#features" },
    // { label: "About", href: "/#" },
    { label: "Contact", href: "/contact-us" },
    { label: "Pricing", href: "/#pricing" },
  ],

  company: [
    { label: "Terms & Condition", href: "/terms-condition" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};

function ArrowUpRight() {
  return (
    <svg
      className="inline-block ml-1 w-3 h-3 opacity-70"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center"
      >
        {children}
        <ArrowUpRight />
      </Link>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0D1C14] text-white px-6 py-12 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row gap-12 justify-between">
          {/* Left — Brand */}
          <div className="flex flex-col gap-5 max-w-xs">
            {/* Logo */}
            <div className="flex items-center  text-black cursor-pointer ">
              <img
                src="/home/company-logo-light.png"
                alt=""
                className="transition-transform duration-300 h-[80px]  "
              />
            </div>

            {/* Description */}
            <p className="text-sm text-gray-400 leading-relaxed">
              AI-powered lending infrastructure for banks, NBFCs, and fintechs
              to originate, decide, and manage credit with intelligence.
            </p>

            {/* Social */}
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                Social
              </p>
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="currentColor"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="currentColor"
                  >
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-colors"
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
                </a>
              </div>
            </div>
          </div>

          {/* Right — Newsletter + Nav */}
          <div className="flex flex-col gap-10 lg:max-w-lg">
            {/* Newsletter */}
            <div>
              <p className="text-sm font-medium mb-3 text-gray-300">
                Subscribe to our Newsletter
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="jane@framer.com"
                  className="w-[400px] bg-white border border-gray-200 rounded-md px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-emerald-500 transition-colors"
                />
                <button className="bg-emerald-500 hover:bg-emerald-400 transition-colors text-white text-sm font-medium px-5 py-2.5 rounded-md whitespace-nowrap">
                  Submit
                </button>
              </div>
            </div>

            {/* Nav columns */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-white mb-4">
                  Main Pages
                </h3>
                <ul className="space-y-3">
                  {footerLinks.mainPages.map((link, i) => (
                    <NavLink key={i} href={link.href}>
                      {link.label}
                    </NavLink>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white mb-4">
                  Company
                </h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, i) => (
                    <NavLink key={i} href={link.href}>
                      {link.label}
                    </NavLink>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex justify-end">
          <p className="text-xs text-gray-500">
            Copyright © 2026 OneTone. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
