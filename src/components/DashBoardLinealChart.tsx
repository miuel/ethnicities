"use client"

import { GitCommitVertical, TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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
const chartData = [
  { countries: "Nigeria", zulu: 186, italian: 80 },
  { countries: "Benin", zulu: 305, italian: 200 },
  { countries: "Togo", zulu: 237, italian: 120 },
  { countries: "Vietnam", zulu: 73, italian: 190 },
  { countries: "South Africa", zulu: 209, italian: 130 },
  { countries: "Turkey", zulu: 214, italian: 140 },
]

const chartConfig = {
  zulu: {
    label: "Zulu",
    color: "hsl(var(--chart-1))",
  },
  italian: {
    label: "Italian",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function DashBoardLinealChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Italian population </CardTitle>
        <CardDescription>Couriose data its italian ethicity is high in Asia & African countries</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="countries"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="italian"
              type="natural"
              stroke="var(--color-italian)"
              strokeWidth={2}
              dot={({ cx, cy, payload }) => {
                const r = 24
                return (
                  <GitCommitVertical
                    key={payload.countries}
                    x={cx - r / 2}
                    y={cy - r / 2}
                    width={r}
                    height={r}
                    fill="hsl(var(--background))"
                    stroke="var(--color-italian)"
                  />
                )
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        
      </CardFooter>
    </Card>
  )
}
