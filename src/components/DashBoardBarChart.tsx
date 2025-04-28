"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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


export interface ChartData {
  ethnicity: string;
  population_percent_worldwide: number;
}

interface DashBoardBarChartProps {
  chartData: ChartData[];
}

const chartConfig = {
  population_percent_worldwide: {
    label: "worldwide population % ",
    color: "hsl(var(--chart-4))",
  },
} as ChartConfig;

export const DashBoardBarChart: React.FC<DashBoardBarChartProps> = ({
  chartData,
}) => {

  return (
    <Card className="bg-background mb-11">
      <CardHeader>
        <CardTitle>Welcome 👋🏾</CardTitle>
        <CardDescription>
          We presented a chart with world's largest ethnic group
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="ethnicity"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 4)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="population_percent_worldwide"
              fill="var(--color-population_percent_worldwide)"
              radius={8}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          From the bustling streets of Asia to the vibrant communities of Africa
          and beyond, we celebrate the people who shape our world.{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total of the 20 world's largest ethnic groups
        </div>
      </CardFooter>
    </Card>
  );
};
