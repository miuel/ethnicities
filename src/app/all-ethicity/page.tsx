"use client";

import { DataTable } from "@/components/DataTable";
import { useSessionWrapper } from "@/hooks/useSession";
import React, { useEffect, useMemo, useState } from "react";
import { columns } from "./columns";
import { cn } from "@/lib/utils";

const AllEthnicity: React.FC = () => {
  useSessionWrapper();

  const [loading, setLoading] = useState(false);
  const [imageArr, setImageArr] = useState<
    { image_url: string; ethnicity: string }[]
  >([]);
  const [ethnicity, setEthnicity] = useState([]);
  

  useEffect(() => {
    setLoading(true);

    Promise.all([
      fetch("/api/full-ethnicity").then((res) => res.json()),
      fetch("/api/data").then((res) => res.json()),
    ])
      .then(([ethnicityData, imageData]) => {
        setEthnicity(ethnicityData);
        setImageArr(imageData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => setLoading(false));

      
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="mx-auto max-w-[1512px] flex justify-center items-center h-screen flex-col mb-10">
          <div className="flex gap-2 overflow-hidden">
            {imageArr.map((item, index) => (
              <img
                key={index}
                src={item.image_url}
                alt={item.ethnicity}
                height={335}
                width={105}
                onLoad={() => console.log(`Image ${index + 1} loaded successfully`)}
                
                className={cn(
                  "clip-me object-cover",
                  `${index % 2 === 1 && "scale-x-[-1]"}`
                )}
              />
            ))}
          </div>

          <h1 className="italic font-bold text-7xl font-editorialNew mt-5">
            All Human
          </h1>
          <h1 className="ml-14 text-7xl">Ethnicities</h1>
          <p className="py-6 max-w-xl">
            Where every culture, color, and story matters. Dive into a curated
            space that embraces global diversity, creativity, and unity without
            borders. Explore a dynamic database showcasing detailed records,
            histories, and identities from communities around the world — all
            organized in an intuitive and powerful way.
          </p>

          <DataTable columns={columns} data={ethnicity} />
        </div>
      )}
    </div>
  );
};

export default AllEthnicity;
