"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: number;
  ethnicity: string;
  continent: string;
  countries: string;
  population_percent_worldwide: number;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "ethnicity",
    header: "Ethnicity",
  },
  {
    accessorKey: "continent",
    header: "Continent",
  },
  {
    accessorKey: "countries",
    header: "Countries",
  },
  {
    accessorKey: "population_percent_worldwide",
    header: "Population",
  },
];
