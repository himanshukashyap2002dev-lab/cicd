/* eslint-disable @next/next/no-img-element */
import { Home, Car, User, CreditCard } from "lucide-react";

const loanCards = [
  {
    icon: Home,
    title: "Mortgages",
    amount: "₹11T",
    description:
      "India's mortgage market is set for exponential growth over the next decade.",
  },
  {
    icon: Car,
    title: "Auto Loans",
    amount: "₹1.4T",
    description:
      "Rising vehicle ownership and financing penetration fueling strong demand.",
  },
  {
    icon: User,
    title: "Personal Loans",
    amount: "₹300B",
    description:
      "Large underserved segment with increasing digital lending adoption.",
  },
  {
    icon: CreditCard,
    title: "Credit Cards",
    amount: "₹1T",
    description:
      "Growing card base and spend driven by digital-first consumers.",
  },
];

const stats = [
  {
    value: "₹250B+",
    label: "Indian Untapped Credit Demand",
    description: "Opportunity to be unlocked through digital lending.",
  },
  {
    value: "29%",
    label: "Digital Lending Market CAGR (2023–30)",
    description: "Consistent growth driven by technology and inclusion.",
  },
];

export default function MarketOpportunity() {
  return (
    <section className="bg-white py-10 sm:py-14 lg:py-8 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center lg:flex-row gap-12 lg:gap-0">
          {/* Left — Loan cards grid */}
          <div className="w-full lg:w-1/2 lg:pr-16 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12 lg:mt-[100px]">
              {loanCards.map(({ icon: Icon, title, amount, description }) => (
                <div
                  key={title}
                  className="bg-[#F3F8F4] rounded-2xl px-4 sm:px-5 pt-4 sm:pt-[18px] pb-4 sm:pb-[18px] flex flex-col gap-3 shadow-sm border border-gray-100"
                >
                  <div className="flex items-center gap-2 text-gray-700">
                    <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-[10px] flex items-center justify-center bg-[#e7f1ea] shrink-0">
                      <Icon
                        className="w-5 h-5 text-black-500"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="text-[18px] sm:text-[20px] lg:text-[24px] font-space font-semibold">
                      {title}
                    </span>
                  </div>
                  <p className="text-[22px] sm:text-[26px] lg:text-[30px] font-space font-bold text-emerald-600">
                    {amount}
                  </p>
                  <p className="text-[13px] sm:text-[14px] lg:text-[15px] font-medium text-black leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            {/* Source note */}
            <p className="mt-8 sm:mt-10 lg:mt-[50px] text-xs text-black opacity-[75%] flex items-start gap-1.5">
              <span className="mt-0.5 text-emerald-500">ⓘ</span>
              Sources: RBI, IBEF, Statista, Redseer · Market estimates as of
              2024.
            </p>
          </div>

          {/* Right — Headline + stats */}
          <div className="w-full lg:w-1/2 lg:pl-16 flex flex-col items-center text-center lg:items-end lg:text-right justify-center lg:justify-end">
            {/* Eyebrow */}
            <div className="bg-[#E5EDE6] w-fit rounded-[8px] px-[12px] py-[7px] flex items-center gap-[8px]">
              <img
                src="/home/header-logo.png"
                alt=""
                className="h-[15px] w-[15px]"
              />
              <p className="text-[14px] font-medium text-[#00000099]">
                Market Opportunity
              </p>
            </div>

            {/* Headline */}
            <h2 className="mt-5 sm:mt-6 lg:mt-[23px] text-[28px] sm:text-[36px] lg:text-[45px] leading-[36px] sm:leading-[44px] lg:leading-[58px] font-bold font-space text-gray-900">
              A Massive Market.{" "}
              <span className="block">
                {" "}
                A <span className="text-[#439361]"> Smarter </span>{" "}
                Infrastructure.
              </span>
            </h2>

            {/* Body */}
            <p className="mt-4 sm:mt-5 lg:mt-[23px] text-sm sm:text-base text-black leading-relaxed">
              India's lending ecosystem is expanding rapidly, driven by digital
              adoption and underserved credit demand. OneTone is building the
              AI-powered infrastructure to unlock this opportunity.
            </p>

            <div className="mt-10 sm:mt-14 lg:mt-[76px] w-full grid grid-cols-2 grid-rows-1 gap-4 sm:gap-6">
              {/* 1st */}
              <div>
                <p className="text-[#439361] text-[28px] sm:text-[36px] lg:text-[45px] leading-[100%] font-bold font-space">
                  ₹250B+
                </p>
                <p className="mt-2 sm:mt-[10px] text-[15px] sm:text-[18px] lg:text-[20px] font-bold font-space">
                  Indian Untapped <span className="block">Credit Demand</span>
                </p>
                <p className="text-xs sm:text-sm font-medium text-black opacity-[75%]">
                  Opportunity to be unlocked{" "}
                  <span className="block"> through digital lending.</span>
                </p>
              </div>

              {/* 2nd */}
              <div>
                <p className="text-[#439361] text-[28px] sm:text-[36px] lg:text-[45px] leading-[100%] font-bold font-space">
                  29%
                </p>
                <p className="mt-2 sm:mt-[10px] text-[15px] sm:text-[18px] lg:text-[20px] font-bold font-space">
                  Digital Lending Market CAGR(2023-30)
                </p>
                <p className="text-xs sm:text-sm font-medium text-black opacity-[75%]">
                  Consistent growth driven by{" "}
                  <span className="block"> technology and inclusion.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
