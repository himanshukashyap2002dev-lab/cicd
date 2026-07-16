"use client";
import { PrimaryButton, SecondaryButton } from "@/components/common/button";
import { useRouter } from "next/navigation";
import React from "react";

/* eslint-disable @next/next/no-img-element */
export default function Hero() {
  const router = useRouter();
  const statDetails = [
    {
      logo: "/home/shield.svg",
      children: (
        <p className="text-[13px] sm:text-[14px] leading-[16px] sm:leading-[17px] font-semibold text-[#000000B2]">
          Build for Banks <span className="block"> & NBFCs </span>
        </p>
      ),
    },
    {
      logo: "/home/lock.svg",
      children: (
        <p className="text-[13px] sm:text-[14px] leading-[16px] sm:leading-[17px] font-semibold text-[#000000B2]">
          Enterprise <span className="block"> Grade Security </span>
        </p>
      ),
    },
    {
      logo: "/home/network.svg",
      children: (
        <p className="text-[13px] sm:text-[14px] leading-[16px] sm:leading-[17px] font-semibold text-[#000000B2]">
          Seamless <span className="block"> Integrations </span>
        </p>
      ),
    },
  ];
  return (
    <section
      id="main"
      className="w-full bg-custom-gradient flex flex-col lg:flex-row lg:justify-between pt-10 sm:pt-12 lg:pt-[56px] pb-10 sm:pb-12 lg:pb-[66px] gap-10 lg:gap-[25px] overflow-hidden"
    >
      <div className="px-6 sm:px-10 lg:px-0 lg:pl-[68px] lg:flex-1 lg:min-w-0">
        <div className="bg-[#E5EDE6] w-fit rounded-[8px] px-[12px] mt-6 sm:mt-8 lg:mt-[44px] py-[7px] flex items-center gap-[8px]">
          <img
            src="/home/header-logo.png"
            alt=""
            className="h-[15px] w-[15px]"
          />
          <p className="text-[14px] font-medium text-[#00000099]">
            AI-Powered Lending Infrastructure
          </p>
        </div>
        <p className="font-space font-bold text-[34px] sm:text-[44px] md:text-[52px] lg:text-[60px] mt-5 sm:mt-6 lg:mt-[33px] leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[69px] text-black">
          Transform Credit
          <span className="block">Access for</span>
          <span className="text-[#439361]">Banks & NBFCs</span>
        </p>
        <p className="font-medium mt-6 sm:mt-8 lg:mt-[40px] text-[15px] sm:text-[17px] lg:text-[19px] leading-[22px] sm:leading-[25px] lg:leading-[28px]">
          OneTone is the AI infrastructure layer for modern lenders,{" "}
          <span className="block">
            {" "}
            Automate onboarding, verification, risk assessment, and{" "}
          </span>{" "}
          credit decisioing across your lending lifecycle.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-[14px] mt-8 sm:mt-10 lg:mt-[48px]">
          <PrimaryButton
            onClick={() => router.push("/contact-us")}
            className="h-[52px] sm:h-[56px] w-full sm:w-[206px]"
          >
            Get a Demo
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <img src="/home/arrow.svg" alt="" />
            </span>
          </PrimaryButton>
          <SecondaryButton className="h-[52px] sm:h-[56px] w-full sm:w-auto">
            Explore Products
          </SecondaryButton>
        </div>
        <div className="mt-10 sm:mt-12 lg:mt-[69px] flex items-center gap-x-6 gap-y-5 sm:gap-x-[49px]">
          {statDetails.map((item, index) => {
            return (
              <div
                className="flex items-center gap-[20px] sm:gap-[39px]"
                key={index}
              >
                <StatCard {...item} />
                {index !== statDetails.length - 1 && (
                  <div className="hidden sm:block h-[29px] w-[1px] bg-[#00000026]" />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <img
        src={"/home/hero.webp"}
        alt="Hero image"
        className="w-auto max-w-full h-auto max-h-[320px] sm:max-h-[420px] md:max-h-[480px] lg:max-h-[420px] lg:flex-shrink-0 xl:max-h-[550px] xl:mt-[50px] 2xl:max-h-[650px] mt-[40px] lg:mt-0"
      />
    </section>
  );
}

function StatCard({
  logo,
  children,
}: {
  logo: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-[16.3px]">
      <img src={logo} alt="" />
      {children}
    </div>
  );
}
