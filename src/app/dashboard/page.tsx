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

export default function Page() {
  const { data: session } = useSession();
  const username = session?.user?.name || "User";

  useSessionWrapper();
  //const chartData : ChartData[]
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [ethnicity, setEthnicity] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => {
        setChartData(data);
        setEthnicity(data);
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
              <h1 className="italic font-bold text-5xl md:text-7xl font-editorialNew">
                Human
              </h1>
              <h1 className="md:ml-11 text-5xl md:text-7xl">Ethnicities</h1>
            </div>
            <img
              src="/images/ethnicity/igbo.jpg"
              alt="mask"
              height={335}
              width={105}
              className="clip-me"
            />
            <p className="text-sm font-editorialNew max-w-[500px]">
              Discover the beauty and diversity of humanity. Our project
              explores the rich tapestry of ethnic groups across the globe,
              showcasing their unique traits, cultural heritage, and historical
              significance. Dive deeper into each ethnicity with detailed
              information, interactive graphs, and insightful data about their
              population, geographic distribution, and cultural characteristics.{" "}
            </p>
            <img
              src="/images/mask-izq.png"
              alt="mask"
              height={335}
              width={105}
              className="scale-x-[-1] "
            />
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
