"use client";
import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const ChartData = [
  { continent: "asia", population: 23.4, fill: "var(--color-asia)" },
  { continent: "africa", population: 13.2, fill: "var(--color-africa)" },
  { continent: "america", population: 18.7, fill: "var(--color-america)" },
  { continent: "oceania", population: 1.73, fill: "var(--color-oceania)" },
  { continent: "europa", population: 19, fill: "var(--color-europa)" },
];

const chartConfig = {
  population: {
    label: "Population",
  },
  asia: {
    label: "Asia",
    color: "hsl(var(--chart-1))",
  },
  africa: {
    label: "Africa",
    color: "hsl(var(--chart-2))",
  },
  america: {
    label: "America",
    color: "hsl(var(--chart-3))",
  },
  oceania: {
    label: "Oceania",
    color: "hsl(var(--chart-4))",
  },
  europa: {
    label: "Europa",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function DashBoardPieChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Diversity by Continet </CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={ChartData}
              dataKey="population"
              label
              nameKey="continent"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Asia is the longest continent in terms of diversity by population
          percentage <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
}
