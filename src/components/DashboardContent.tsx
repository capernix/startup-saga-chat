
import { SidebarTrigger } from "@/components/ui/sidebar";

export function DashboardContent() {
  return (
    <main className="flex-1 overflow-auto">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <SidebarTrigger />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Dashboard content will be replaced by router content */}
        </div>
      </div>
    </main>
  );
}
