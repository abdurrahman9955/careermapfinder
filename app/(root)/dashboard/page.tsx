import { DashboardLayoutWrapper } from "@/app/components/dashboard/DashboardLayoutWrapper";
// import ExamPracticePageMain from "@/app/components/dashboard/assessments/exams/ExamPracticePageMain";
// import InterviewPracticePageMain from "@/app/components/dashboard/jobPreparation/interviews/InterviewCatalogPage";
// import CareerExplorerCardPage from "@/app/components/dashboard/careerExplorer/reports/CareerExplorerMain";
import DashboardMainPage from "@/app/components/dashboard/DashboardMain";

const page = () => {
  return (
    <div>
    <DashboardLayoutWrapper>
       <DashboardMainPage />
       {/* <CareerExplorerCardPage /> */}
       {/* <ExamPracticePageMain /> */}
       {/* <InterviewPracticePageMain /> */}
    </DashboardLayoutWrapper>
    </div>
  )
}

export default page
