import { DashboardLayoutWrapper } from "@/app/components/dashboard/DashboardLayoutWrapper";
//import ExamPracticePageMain from "@/app/components/dashboard/assessments/exams/ExamPracticePageMain";
import InterviewPracticePageMain from "@/app/components/dashboard/jobPreparation/interviews/InterviewCatalogPage";

const page = () => {
  return (
    <div>
    <DashboardLayoutWrapper>
      <InterviewPracticePageMain />
    </DashboardLayoutWrapper>
    </div>
  )
}

export default page
