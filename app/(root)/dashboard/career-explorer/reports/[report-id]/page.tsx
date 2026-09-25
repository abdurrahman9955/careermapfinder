import { DashboardLayoutWrapper } from "@/app/components/dashboard/DashboardLayoutWrapper";
import CareerReportDetailPage from "@/app/components/dashboard/careerExplorer/reports/CareerReportDetailPage"


const page = () => {
  return (
    <div>
    <DashboardLayoutWrapper>
      <CareerReportDetailPage />
    </DashboardLayoutWrapper>
    </div>
  )
}

export default page
