import { DashboardLayoutWrapper } from "@/app/components/dashboard/DashboardLayoutWrapper";
import ExamPracticePageMain from "@/app/components/dashboard/assessments/exams/ExamPracticePageMain";
import InterviewPracticePageMain from "@/app/components/dashboard/jobPreparation/interviews/InterviewCatalogPage";
import CareerExplorerCardPage from "@/app/components/dashboard/careerExplorer/reports/CareerExplorerMain";

const page = () => {
  return (
    <div>
    <DashboardLayoutWrapper>
       <CareerExplorerCardPage />
       {/* <ExamPracticePageMain /> */}
       {/* <InterviewPracticePageMain /> */}
    </DashboardLayoutWrapper>
    </div>
  )
}

export default page
