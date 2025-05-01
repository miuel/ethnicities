"use client";

import { DataTable } from "@/components/DataTable";
import { useSessionWrapper } from "@/hooks/useSession";
import React, { useEffect, useMemo, useState } from "react";
import { columns } from "./columns";
import { cn } from "@/lib/utils";
import Reveal from "@/components/motion/Reveal";

const imgsArr = [
  { image_url: "/images/ethnicity/han-chinese.webp" },
  { image_url: "/images/ethnicity/arab.webp" },
  { image_url: "/images/ethnicity/bengali.webp" },
  { image_url: "/images/ethnicity/russian.webp" },
  { image_url: "/images/ethnicity/punjabi.webp" },
  { image_url: "/images/ethnicity/japanese.webp" },
  { image_url: "/images/ethnicity/mexican-mestizo.webp" },
  { image_url: "/images/ethnicity/yoruba.webp" },
  { image_url: "/images/ethnicity/vietnamese.webp" },
  { image_url: "/images/ethnicity/zulu.webp" },
  { image_url: "/images/ethnicity/turk.webp" },
  { image_url: "/images/ethnicity/persian.webp" },
  { image_url: "/images/ethnicity/igbo.webp" },
  { image_url: "/images/ethnicity/french.webp" },
  { image_url: "/images/ethnicity/korean.webp" },
  { image_url: "/images/ethnicity/italian.webp" },
  { image_url: "/images/ethnicity/hausa.webp" },
  { image_url: "/images/ethnicity/thai.webp" },
  { image_url: "/images/ethnicity/british.webp" },
  { image_url: "/images/ethnicity/amhara.webp" },
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
    <div className="mx-5 md:mx-auto max-w-[1512px] flex justify-center h-auto flex-col mb-10 relative">
      <div className="md:flex gap-2 overflow-hidden hidden p-2">
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

      <Reveal delay={0.2}>
        <h1 className=" text-center italic font-bold text-5xl xl:text-[270px] font-editorialNew mt-5 leading-none">
          All Human
        </h1>
      </Reveal>
      <div className="relative">
        <Reveal delay={0.5}>
          <h1 className="text-5xl md:text-7xl">Ethnicities</h1>
        </Reveal>
        <Reveal delay={0.8}>
          <p className="py-6 max-w-[500px] text-sm">
            Where every culture, color, and story matters. Dive into a curated
            space that embraces global diversity, creativity, and unity without
            borders. Explore a dynamic database showcasing detailed records,
            histories, and identities from communities around the world — all
            organized in an intuitive and powerful way.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <a
            href="/dashboard"
            className="hidden md:flex absolute text-sm bottom-5 right-0 w-auto p-4 rounded-sm bg-asafeBlack text-white dark:bg-white dark:text-asafeBlack  h-12"
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
        </Reveal>
      </div>
      {loading ? (
        <div className="flex justify-center items-center max-h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <DataTable columns={columns} data={ethnicity} />
      )}
    </div>
  );
};

export default AllEthnicity;
