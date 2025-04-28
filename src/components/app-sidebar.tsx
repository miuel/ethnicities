"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import {
  AudioWaveform,
  GalleryVerticalEnd,
  LogOut,
  Map,  
  Newspaper,  
  Link,
  Moon,
  Sun
} from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  
  const { setTheme, theme } = useTheme();
  console.log("theme", theme);
  const isDark = theme === "dark";
  if (theme === "dark") {}
  
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

  // This is config  data.
  const data = {  
    projects: [     
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


  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavUser user={userLogged.user} />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
        <Button
          type="button"
          className="w-fit m-2"
          onClick={() => setTheme(isDark ? "light" : "dark")}
        >
          {isDark ? <Sun /> : <Moon />}
          {isDark ? "Light" : "Dark"} mode
        </Button>
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
