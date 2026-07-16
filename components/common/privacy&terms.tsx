/* eslint-disable @next/next/no-img-element */
type CommonPageProp = {
  lastPublishDate: string;
  pageName: string;
  children?: React.ReactNode;
};

export default function CommonInfoPage(props: CommonPageProp) {
  const { lastPublishDate, pageName, children } = props;
  return (
    <div className="bg-white py-[20px] flex flex-col items-center justify-center rounded-[24px]">
      <div className="bg-[#E5EDE6] w-fit rounded-[8px] px-[12px] mt-6 sm:mt-8 lg:mt-[44px] py-[7px] flex items-center gap-[8px]">
        <img src="/home/header-logo.png" alt="" className="h-[15px] w-[15px]" />
        <p className="text-[14px] font-medium text-[#00000099]">
          Last Updated: {lastPublishDate}
        </p>
      </div>
      <p className="font-space text-[50px] font-bold text-black">{pageName}</p>
      {children && (
        <div className="w-full max-w-[800px] px-6 mt-8 pb-12">{children}</div>
      )}
    </div>
  );
}
