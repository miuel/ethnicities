"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { ChartData, DashBoardBarChart } from "@/components/DashBoardBarChart";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useSessionWrapper } from "@/hooks/useSession";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { SectionCards } from "@/components/ui/section-cards";
import Reveal from "@/components/motion/Reveal";
import { DashBoardPieChart } from "@/components/DashBoardPieChart";
import { DashBoardRadarChart } from "@/components/DashBoardRadarChart";
import { DashBoardLinealChart } from "@/components/DashBoardLinealChart";

export default function Page() {
  useSessionWrapper();
  const [chartData, setChartData] = useState<ChartData[]>([]);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => {
        setChartData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="md:mt-24 flex h-auto shrink-0 items-end gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex flex-col md:flex-row gap-2 px-4 my-5 justify-between items-center w-full">
            <div>
              <Reveal delay={0.2}>
                <h1 className="italic font-bold text-5xl md:text-7xl font-editorialNew">
                  Human
                </h1>
              </Reveal>
              <Reveal delay={0.4}>
                <h1 className="md:ml-11 text-5xl md:text-7xl">Ethnicities</h1>
              </Reveal>
            </div>
            <Reveal delay={0.6}>
              <img
                src="/images/ethnicity/thai.webp"
                alt="mask"
                height={335}
                width={105}
                className="clip-me"
                loading="lazy"
                decoding="async"
              />
            </Reveal>
            <Reveal delay={0.8}>
              <p className="text-sm  max-w-[500px]">
                Discover the beauty and diversity of humanity. Our project
                explores the rich tapestry of ethnic groups across the globe,
                showcasing their unique traits, cultural heritage, and
                historical significance. Dive deeper into each ethnicity with
                detailed information, interactive graphs, and insightful data
                about their population, geographic distribution, and cultural
                characteristics.{" "}
              </p>
            </Reveal>
            <Reveal delay={1}>
              <img
                src="/images/mask-izq.webp"
                alt="mask"
                height={335}
                width={105}
                className="scale-x-[-1] "
                loading="lazy"
              />
            </Reveal>

            <Reveal>
              <a
                href="/all-ethicity"
                className="flex items-center md:hidden mt-5 text-sm w-auto p-4 rounded-sm bg-asafeBlack text-white dark:bg-white dark:text-asafeBlack h-12"
              >
                Go to Ethicity list
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12h18m-9 9l9-9-9-9"
                  />
                </svg>
              </a>
            </Reveal>
          </div>
        </header>
        <SectionCards data={chartData} />
        <div className="px-6">
          <DashBoardBarChart chartData={chartData} />
        </div>
        <div className="px-6 flex flex-col md:flex-row gap-6 w-full justify-between">
          <DashBoardRadarChart />
          <DashBoardPieChart />
          <DashBoardLinealChart />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
