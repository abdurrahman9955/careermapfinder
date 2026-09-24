import { DashboardLayoutWrapper } from "@/app/components/dashboard/DashboardLayoutWrapper";
import ExamPracticePage from "@/app/components/dashboard/assessments/exams/ExamPracticePage";

const page = () => {
  return (
    <div>
    <DashboardLayoutWrapper>
      <ExamPracticePage />
    </DashboardLayoutWrapper>
    </div>
  )
}

export default page
