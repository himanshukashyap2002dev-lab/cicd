/* eslint-disable @next/next/no-img-element */
export default function LendingPartners() {
  return (
    <section className="flex flex-col items-center justify-center bg-custom-gradient">
      <div className="flex flex-col items-center justify-center w-full max-w-7xl px-4 sm:px-6 md:px-12 lg:px-[83px] py-[20px]">
        <div className="bg-[#E5EDE6] w-fit rounded-[8px] px-[12px] mt-6 sm:mt-8 lg:mt-[44px] py-[7px] flex items-center gap-[8px]">
          <img
            src="/home/header-logo.png"
            alt=""
            className="h-[15px] w-[15px] shrink-0"
          />
          <p className="text-[14px] font-medium text-[#00000099]">
            Lending Service Provider
          </p>
        </div>
        <h2 className="mt-5 sm:mt-6 lg:mt-[10px] text-[28px] sm:text-[36px] lg:text-[45px] leading-[36px] sm:leading-[44px] lg:leading-[58px] font-bold font-space text-gray-900 text-center">
          Our Lending <span className="text-[#439361]"> Service </span>
          Provider
        </h2>
        <p className="mt-4 sm:mt-5 lg:mt-[10px] text-sm max-w-xs sm:max-w-sm text-center sm:text-base text-[#40404F] leading-relaxed">
          We partner with trusted NBFCs to bring you fast, transparent and
          reliable loan solutions.
        </p>

        <div className="mt-8 sm:mt-10 lg:mt-[52px] mb-6 sm:mb-10 lg:mb-[56px] grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 w-full max-w-[820px]">
          {/* Blue Chip Finance */}
          <a
            href="https://bluechipfinance.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-white/90 cursor-pointer rounded-md border border-[#E7E9EC] shadow-[0_2px_10px_rgba(16,24,40,0.04)] px-4 sm:px-6 lg:px-8 py-4 flex flex-col justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="h-[64px] w-[64px] sm:h-[72px] sm:w-[72px] lg:h-[80px] lg:w-[80px] flex items-center justify-center shrink-0 rounded-[10px] border border-black/20 bg-white">
                <img
                  src="/home/bluechip-vertical-logo.png"
                  alt="Blue Chip Finance"
                  className="h-[48px] sm:h-[54px] lg:h-[60px] w-auto object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <img
                  src="/home/bluechip-horizontal-logo.png"
                  alt="Blue Chip Finance"
                  className="h-[44px] sm:h-[52px] lg:h-[60px] w-auto max-w-full object-contain"
                />
              </div>
            </div>

            <p className="mt-5 text-[15px] leading-[22px] font-semibold text-[#40404F]">
              Your reliable partner for instant and hassle-free loan disbursals.
            </p>

            <div className="mt-6 border-t border-[#EAEBEF] font-semibold font-space pt-4 flex flex-wrap items-center justify-between gap-2">
              <span className="text-[13px] text-black">RBI Registered</span>
              <span className="text-[13px] text-black">
                T&C <span className="mx-1 text-black">|</span> Privacy Policy
              </span>
            </div>
          </a>

          {/* KapitaLoan */}
          <a
            href="https://kapitaloan.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-white/90 cursor-pointer rounded-md border border-[#E7E9EC] shadow-[0_2px_10px_rgba(16,24,40,0.04)] px-4 sm:px-6 lg:px-8 py-4 flex flex-col justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="h-[64px] w-[64px] sm:h-[72px] sm:w-[72px] lg:h-[80px] lg:w-[80px] flex items-center justify-center shrink-0 rounded-[10px] border border-black/20 bg-white">
                <img
                  src="/home/kapitaloan-vertical-logo.png"
                  alt="KapitaLoan"
                  className="h-[48px] sm:h-[54px] lg:h-[60px] w-auto object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <img
                  src="/home/kapitaloan-horizontal-logo.png"
                  alt="KapitaLoan"
                  className="h-[36px] sm:h-[42px] lg:h-[50px] w-auto max-w-full object-contain"
                />
              </div>
            </div>

            <p className="mt-5 text-[15px] leading-[22px] text-[#40404F] font-semibold">
              Empowering your financial goals with flexible loan solutions.
            </p>

            <div className="mt-6 border-t border-[#EAEBEF] font-semibold font-space pt-4 flex flex-wrap items-center justify-between gap-2">
              <span className="text-[13px] text-black">RBI Registered</span>
              <span className="text-[13px] text-black">
                T&C <span className="mx-1 text-black">|</span> Privacy Policy
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
