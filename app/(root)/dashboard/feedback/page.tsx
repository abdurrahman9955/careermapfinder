import { DashboardLayoutWrapper } from "@/app/components/dashboard/DashboardLayoutWrapper";
import FeedbackPage from "@/app/components/dashboard/feedback/FeedbackPage";

const page = () => {
  return (
    <div>
    <DashboardLayoutWrapper>
      <FeedbackPage />
    </DashboardLayoutWrapper>
    </div>
  )
}

export default page
