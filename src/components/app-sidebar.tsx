"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  LogOut,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Newspaper,
  Link,
  Moon
} from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";

// This is config  data.
const data = {  
  projects: [
    {
      name: "Theme",
      url: "#",
      icon: Moon,
    },
    {
      name: "All Ethnicities",
      url: "/all-ethicity",
      icon: Newspaper,
    },
    {
      name: "Ethnologue",
      url: "https://www.ethnologue.com/",
      icon: Link,
    },
    {
      name: "Joshua Project",
      url: "https://joshuaproject.net/people_groups/statistics",
      icon: Map,
    },
    {
      name: "CIA World Factbook",
      url: "https://www.cia.gov/the-world-factbook/",
      icon: GalleryVerticalEnd,
    },
    {
      name: "United Nations Demographic Yearbook",
      url: "https://unstats.un.org/unsd/publications/DYB/", 
      icon: AudioWaveform,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session } = useSession();
  const username = session?.user?.name || "User";
  const email = session?.user?.email;

  const userLogged = {
    user: {
      name: username,
      email: email ?? "test@test.com",
      avatar: "/images/avatar",
    },
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavUser user={userLogged.user} />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <Button
          type="button"
          className="w-full "
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          <LogOut />
          Log out
        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
