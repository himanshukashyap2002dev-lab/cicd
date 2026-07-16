/* eslint-disable @next/next/no-img-element */
"use client";
import { SecondaryButton, PrimaryButton } from "@/components/common/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const navItems = [
    { serialNo: "1", name: "Products", route: "#lumina" },
    { serialNo: "2", name: "Platform", route: "#lumina" },
    { serialNo: "5", name: "Pricing", route: "#pricing" },
    { serialNo: "6", name: "Company", route: "#main" },
  ];

  const handleNavigate = (route: string) => {
    setOpen(false);
    router.push(route);
  };

  return (
    <nav className="relative z-30 flex items-center justify-between text-black h-[72px] sm:h-[84px] xl:h-[100px] px-6 sm:px-8 lg:px-10 xl:pl-[68px] xl:pr-[73px] bg-[#F6F9F780]">
      <div
        onClick={() => router.push("/#main")}
        className="flex items-center text-black cursor-pointer"
      >
        <img
          src="/home/company-logo-dark.png"
          alt=""
          className="duration-300 h-[44px] sm:h-[56px] xl:h-[100px]"
        />
      </div>

      {/* Desktop nav links */}
      <div className="hidden xl:flex items-center gap-[25.11px]">
        {navItems.map((item) => (
          <p
            key={item.serialNo}
            onClick={() => router.push(item.route)}
            className="text-[1rem] leading-[26px] font-medium cursor-pointer transition-all duration-200 hover:text-[#182700] hover:-translate-y-[1px] active:translate-y-0"
          >
            {item.name}
          </p>
        ))}
      </div>

      {/* Desktop buttons */}
      <div className="hidden xl:flex gap-[14px]">
        <SecondaryButton onClick={() => router.push("/contact-us")}>
          Get Started
        </SecondaryButton>

        <PrimaryButton onClick={() => router.push("/contact-us")}>
          Get a Demo
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            <img src="/home/arrow.svg" alt="" />
          </span>
        </PrimaryButton>
      </div>

      {/* Mobile / tablet menu toggle */}
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="xl:hidden flex items-center justify-center h-10 w-10 -mr-1"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile / tablet menu panel */}
      <div
        className={`xl:hidden absolute left-0 top-full z-20 w-full bg-[#F6F9F7] shadow-md overflow-hidden transition-all duration-300 ease-out ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-5">
          {navItems.map((item) => (
            <p
              key={item.serialNo}
              onClick={() => handleNavigate(item.route)}
              className="text-[1rem] leading-[26px] font-medium cursor-pointer py-2 transition-colors duration-200 hover:text-[#182700]"
            >
              {item.name}
            </p>
          ))}

          <div className="flex flex-col gap-3 mt-3">
            <SecondaryButton className="w-full">Get Started</SecondaryButton>

            <PrimaryButton className="w-full">
              Get a Demo
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <img src="/home/arrow.svg" alt="" />
              </span>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </nav>
  );
}
