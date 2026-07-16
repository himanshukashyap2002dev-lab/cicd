import CommonInfoPage from "@/components/common/privacy&terms";
import { PrivacyContent } from "./component/privacy-content";

export default function PrivacyPolicy() {
  return (
    <div className="  px-[72px] py-[55px]  bg-[#F6F9F780] ">
      <CommonInfoPage lastPublishDate="Jun 29, 2026" pageName="Privacy Policy">
        <PrivacyContent />
      </CommonInfoPage>
    </div>
  );
}
