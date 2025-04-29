"use client";

import { DataTable } from "@/components/DataTable";
import { useSessionWrapper } from "@/hooks/useSession";
import React, { useEffect, useMemo, useState } from "react";
import { columns } from "./columns";
import { cn } from "@/lib/utils";
import Reveal from "@/components/motion/Reveal";

const imgsArr = [
  { image_url: "/images/ethnicity/han-chinese.jpg" },
  { image_url: "/images/ethnicity/arab.jpg" },
  { image_url: "/images/ethnicity/bengali.jpg" },
  { image_url: "/images/ethnicity/russian.jpg" },
  { image_url: "/images/ethnicity/punjabi.jpg" },
  { image_url: "/images/ethnicity/japanese.jpg" },
  { image_url: "/images/ethnicity/mexican-mestizo.jpg" },
  { image_url: "/images/ethnicity/yoruba.jpg" },
  { image_url: "/images/ethnicity/vietnamese.jpg" },
  { image_url: "/images/ethnicity/zulu.jpg" },
  { image_url: "/images/ethnicity/turk.jpg" },
  { image_url: "/images/ethnicity/persian.jpg" },
  { image_url: "/images/ethnicity/igbo.jpg" },
  { image_url: "/images/ethnicity/french.jpg" },
  { image_url: "/images/ethnicity/korean.jpg" },
  { image_url: "/images/ethnicity/italian.jpg" },
  { image_url: "/images/ethnicity/hausa.jpg" },
  { image_url: "/images/ethnicity/thai.jpg" },
  { image_url: "/images/ethnicity/british.jpg" },
  { image_url: "/images/ethnicity/amhara.jpg" },
];

const AllEthnicity: React.FC = () => {
  useSessionWrapper();

  const [loading, setLoading] = useState(true);
  const [imageArr, setImageArr] = useState<any[]>(imgsArr);
  const [ethnicity, setEthnicity] = useState<any[]>([]);

  useEffect(() => {
    //setLoading(true);

    fetch("/api/full-ethnicity")
      .then((res) => res.json())
      .then((ethnicityData) => {
        setEthnicity([...ethnicityData, ...ethnicityData]); // Duplicate the array in order to get more registers
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="mx-auto max-w-[1512px] flex justify-center items-center h-screen flex-col mb-10 relative">
      <a
        href="/dashboard"
        className="hidden md:flex absolute text-sm top-52 left-0 w-auto p-4 rounded-sm bg-asafeBlack text-white  h-12"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2 -rotate-90"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12h18m-9 9l9-9-9-9"
          />
        </svg>
        Back Dashboard
      </a>
      <div className="flex gap-2 overflow-hidden">
        {imageArr.map((item, index) => (
          <Reveal key={index} delay={index * 0.2}>
            <img
              key={index}
              src={item.image_url}
              alt={item.ethnicity}
              height={335}
              width={105}
              onLoad={() =>
                console.log(`Image ${index + 1} loaded successfully`)
              }
              className={cn(
                "clip-me object-cover",
                `${index % 2 === 1 && "scale-x-[-1]"}`
              )}
              loading="lazy"
            />
          </Reveal>
        ))}
      </div>

      <h1 className="italic font-bold text-7xl font-editorialNew mt-5">
        All Human
      </h1>
      <h1 className="ml-14 text-7xl">Ethnicities</h1>

      <p className="py-6 max-w-xl">
        Where every culture, color, and story matters. Dive into a curated space
        that embraces global diversity, creativity, and unity without borders.
        Explore a dynamic database showcasing detailed records, histories, and
        identities from communities around the world — all organized in an
        intuitive and powerful way.
      </p>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <DataTable columns={columns} data={ethnicity} />
      )}
    </div>
  );
};

export default AllEthnicity;
