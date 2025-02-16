import { SidebarTrigger } from "@/components/ui/sidebar";
import { useLocation } from "react-router-dom";

export function DashboardContent({ children }: { children?: React.ReactNode }) {
  const location = useLocation();
  const title = location.pathname.split('/')[1] || 'Dashboard';

  return (
      <main className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold capitalize">{title}</h1>
            <SidebarTrigger />
          </div>
          {children}
        </div>
      </main>
  );
}