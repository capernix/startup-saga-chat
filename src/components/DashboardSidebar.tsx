
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Lightbulb,
  Map,
  MessageSquare,
  FileText,
  Presentation,
  DollarSign,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Idea Validation",
    icon: Lightbulb,
    path: "/idea-validation",
  },
  {
    title: "Roadmap Generation",
    icon: Map,
    path: "/roadmap",
  },
  {
    title: "AI Chat",
    icon: MessageSquare,
    path: "/chat",
  },
  {
    title: "Reports & Roadmaps",
    icon: FileText,
    path: "/reports",
  },
  {
    title: "Pitch Deck Analyzer",
    icon: Presentation,
    path: "/pitch-deck",
  },
  {
    title: "Funding Readiness",
    icon: DollarSign,
    path: "/funding",
  },
];

export function DashboardSidebar() {
  const navigate = useNavigate();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton onClick={() => navigate(item.path)}>
                    <item.icon className="w-5 h-5 mr-2" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
