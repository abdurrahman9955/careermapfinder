import { DashboardLayoutWrapper } from "@/app/components/dashboard/DashboardLayoutWrapper";
import JobPrepForm from "@/app/components/dashboard/jobPreparation/JobPrepForm";

const page = () => {
  return (
    <div>
    <DashboardLayoutWrapper>
      <JobPrepForm />
    </DashboardLayoutWrapper>
    </div>
  )
}

export default page
