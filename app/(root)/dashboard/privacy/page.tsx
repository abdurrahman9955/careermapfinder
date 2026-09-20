import { DashboardLayoutWrapper } from "@/app/components/dashboard/DashboardLayoutWrapper";
import PrivacyPolicyPage from "@/app/components/dashboard/privacy/PrivacyPage";

const page = () => {
  return (
    <div>
    <DashboardLayoutWrapper>
      <PrivacyPolicyPage />
    </DashboardLayoutWrapper>
    </div>
  )
}

export default page
