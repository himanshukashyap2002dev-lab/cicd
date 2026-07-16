"use client";
import { useState } from "react";
import LoanStepFlow from "./dummy-component";

/* eslint-disable @next/next/no-img-element */

const IMAGES = [
  {
    imageNo: 0,
    imageUrl: "/home/lending-one.png",
    alt: "Lead capture and eligibility check screen",
  },
  {
    imageNo: 1,
    imageUrl: "/home/lending-two.png",
    alt: "Offer generation and eKYC screen",
  },
  {
    imageNo: 2,
    imageUrl: "/home/lending-three.png",
    alt: "Mandate setup and risk verification screen",
  },
  {
    imageNo: 3,
    imageUrl: "/home/lending-four.png",
    alt: "eSign and disbursal screen",
  },
];

export default function LendingFlowSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const selectedImage = IMAGES[activeIndex];

  return (
    <section
      id="features"
      className="bg-custom-gradient py-10 sm:py-14 lg:py-8 px-6 sm:px-10 lg:px-[112px] flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-12"
    >
      <div className="w-full lg:w-1/2 max-w-[640px]">
        <div className="bg-[#E5EDE6] w-fit rounded-[8px] px-[12px] flex items-center justify-center py-[7px] gap-[8px]">
          <img
            src="/home/header-logo.png"
            alt=""
            className="h-[15px] w-[15px]"
          />
          <p className="text-[14px] font-medium text-[#00000099]">
            AI-Powered Lending Infrastructure
          </p>
        </div>

        <p className="mt-5 font-space text-black text-[30px] sm:text-[36px] lg:text-[45px] font-bold leading-tight">
          How We Turn Clicks into <span className="block">Credit?</span>
        </p>

        <p className="text-[#40404F]">
          An AI-powered flow from interest to instant{" "}
          <span className="block sm:inline">disbursal, friction-free.</span>
        </p>

        <LoanStepFlow activeIndex={activeIndex} onStepSelect={setActiveIndex} />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="relative w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[420px] aspect-[558/772] flex items-center justify-center overflow-hidden bg-[#E8EFE9] rounded-[20px] sm:rounded-[25px]">
          <img
            key={selectedImage.imageNo}
            src={selectedImage.imageUrl}
            alt={selectedImage.alt}
            className="max-h-full max-w-full object-contain [animation:lending-fade-in_0.4s_ease-out]"
          />
        </div>
      </div>

      <style>{`
        @keyframes lending-fade-in {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
