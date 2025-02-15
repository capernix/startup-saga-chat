
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardContent } from "@/components/DashboardContent";

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <DashboardContent />
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
