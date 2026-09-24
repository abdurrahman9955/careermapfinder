import { DashboardLayoutWrapper } from "@/app/components/dashboard/DashboardLayoutWrapper";
import ExamReportPage from "@/app/components/dashboard/assessments/report/report";

const page = () => {
  return (
    <div>
    <DashboardLayoutWrapper>
      <ExamReportPage />
    </DashboardLayoutWrapper>
    </div>
  )
}

export default page
