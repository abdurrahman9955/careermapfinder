import { DashboardLayoutWrapper } from "@/app/components/dashboard/DashboardLayoutWrapper";
import { RegionalStateSelector } from "@/app/components/landing/StateDiscovery";

const page = () => {
  return (
    <DashboardLayoutWrapper>
       <RegionalStateSelector />
    </DashboardLayoutWrapper>
  )
}

export default page
