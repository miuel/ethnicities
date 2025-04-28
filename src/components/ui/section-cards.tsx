import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export function SectionCards({ data }: any) {
  const largestEthnicity = (data: any) => {
    const largest = data?.reduce((prev: any, current: any) => {
      return prev.population_percent_worldwide >
        current.population_percent_worldwide
        ? prev
        : current;
    }, data[0] || {});
    return largest;
  };
  const largest = largestEthnicity(data);

  const spreadEthnicity = data?.reduce((prev: any, current: any) => {
    return prev.countries.length > current.countries.length ? prev : current;
  }, data[0] || {});

  const bengali = data?.find((item: any) => item.ethnicity === "Bengali");
  const igbo = data?.find((item: any) => item.ethnicity === "Igbo");

  return (
    <div className="*:data-[slot=card]:shadow-xs md:grid-cols-2 lg:grid-cols-4 grid grid-cols-1 gap-4 px-4 my-5 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
      <Card className="@container/card">        
        <CardHeader className="relative">
          <CardDescription>{largest.ethnicity}</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {largest.population_percent_worldwide * 100} M
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
              <TrendingUpIcon className="size-3" />
              {largest.population_percent_worldwide} %
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Traits: {largest.traits} <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">{largest.description}</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>{spreadEthnicity.ethnicity}</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {spreadEthnicity.population_percent_worldwide * 100} M
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
              <TrendingDownIcon className="size-3" />
              {spreadEthnicity.population_percent_worldwide} %
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Traits: {spreadEthnicity.traits}{" "}
            <TrendingDownIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">
            {spreadEthnicity.description}
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>{bengali?.ethnicity}</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {bengali?.population_percent_worldwide * 100} M
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
              <TrendingUpIcon className="size-3" />
              {bengali?.population_percent_worldwide} %
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Traits: {bengali?.traits} <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">{bengali?.description}</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>{igbo?.ethnicity}</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {igbo?.population_percent_worldwide * 100} M
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
              <TrendingUpIcon className="size-3" />
              {igbo?.population_percent_worldwide} %
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Traits: {igbo?.traits} <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">{igbo?.description}</div>
        </CardFooter>
      </Card>
    </div>
  );
}
