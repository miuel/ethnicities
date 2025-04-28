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
        <header className=" md:mt-24 flex h-auto shrink-0 items-end gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
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
                src="/images/ethnicity/thai.jpg"
                alt="mask"
                height={335}
                width={105}
                className="clip-me"
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
                src="/images/mask-izq.png"
                alt="mask"
                height={335}
                width={105}
                className="scale-x-[-1] "
              />
            </Reveal>
          </div>
        </header>
        <SectionCards data={chartData} />
        <div className="px-6">
          <DashBoardBarChart chartData={chartData} />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
