"use client"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

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
const chartData = [
  { country: "China", ethnicity: 186 },
  { country: "Saudi Arabia", ethnicity: 305 },
  { country: "Egypt", ethnicity: 237 },
  { country: "Iraq", ethnicity: 273 },
  { country: "Syria", ethnicity: 209 },
  { country: "India", ethnicity: 214 },
  { country: "Jordan", ethnicity: 214 },
];

const chartConfig = {
  ethnicity: {
    label: "Ethnicity",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function DashBoardRadarChart() {
  return (
    <Card>
      <CardHeader className="items-center">
        <CardTitle>The Radar Chart</CardTitle>
        <CardDescription>
          The "Arab" ethnicity spread out across the world
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="country" />
            <PolarGrid />
            <Radar
              dataKey="ethnicity"
              fill="var(--color-ethnicity)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none md:w-96">
          Arabs are a diverse group unified primarily by language and cultural
          traditions across the Middle East and North Africa.
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          the common traits: "Dark hair", "Olive complexion", "Brown eyes"
        </div>
      </CardFooter>
    </Card>
  );
}
