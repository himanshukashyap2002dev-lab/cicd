import CommonInfoPage from "@/components/common/privacy&terms";
import { TermsContent } from "./components/terms-content";

export default function TermsAndCondition() {
  return (
    <div className=" px-[72px] py-[55px] bg-[#F6F9F780]">
      <CommonInfoPage
        lastPublishDate="Jun 29, 2026"
        pageName="Terms & Condition"
      >
        <TermsContent />
      </CommonInfoPage>
    </div>
  );
}
