"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useSessionWrapper } from "@/hooks/useSession"

interface ChartData {
  ethnicity: string
  population_percent_worldwide: number
}



const chartConfig = {
  population_percent_worldwide: {
    label: "worldwide population % ",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function DashBoardBarChart() {
  const { data: session } = useSession()
  const username = session?.user?.name || "User"; 

  useSessionWrapper()
  //const chartData : ChartData[]
  const [chartData, setChartData] = useState<ChartData[]>([]);

  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then((data) => setChartData(data));
  }, []);


  return (
    <Card className="bg-background">
      <CardHeader>
        <CardTitle>Welcome {username}</CardTitle>
        <CardDescription>We presented a chart with world's largest ethnic group</CardDescription>
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
              tickFormatter={(value) => value.slice(0, 5)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="population_percent_worldwide" fill="var(--color-ethnicity)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
