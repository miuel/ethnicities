import { DashBoardBarChart } from "@/components/DashBoardBarChart";
import { useSession } from "next-auth/react";
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-col-1 md:grid-cols-12 gap-5 mx-5 grid-rows-12">
      <div className="row-start-1 col-start-1 col-end-4 ">
        <h1 className="italic font-bold text-6xl font-editorialNew">Human</h1>
        <h1 className="ml-14 text-6xl">Ethnicities</h1>
      </div>


      <p className="row-start-3 col-start-1 col-end-4 ">
        Discover the beauty and diversity of humanity.
        Our project explores the
        rich tapestry of ethnic groups across the globe, showcasing their unique
        traits, cultural heritage, and historical significance. Dive deeper into
        each ethnicity with detailed information, interactive graphs, and
        insightful data about their population, geographic distribution, and
        cultural characteristics. From the bustling streets of Asia to the
        vibrant communities of Africa and beyond, we celebrate the people who
        shape our world.
      </p>

      <div className="col-start-5 col-end-13 row-start-1 row-end-12">
        <DashBoardBarChart />
      </div>
    </div>
  );
};

export default Dashboard;
