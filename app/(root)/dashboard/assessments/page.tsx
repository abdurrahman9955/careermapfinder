import { DashboardLayoutWrapper } from "@/app/components/dashboard/DashboardLayoutWrapper";
import CreateExamForm from "@/app/components/dashboard/assessments/CreateExamForm";

const page = () => {
  return (
    <div>
    <DashboardLayoutWrapper>
      <CreateExamForm />
    </DashboardLayoutWrapper>
    </div>
  )
}

export default page
