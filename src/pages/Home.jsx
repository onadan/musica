import React from "react";
import NewReleases from "../components/NewReleases";
import Popular from "../components/Popular";
import TopChart from "../components/TopChart";

const Home = () => {
  return (
    <div className="m-4 overflow-hidden">
      <div className="lg:grid lg:grid-cols-5 lg:gap-4 items-center">
        <div className="lg:max-w-[800px] bg-[#609EAF] w-full h-96 rounded-[3rem] lg:col-span-3"></div>

        <div className="lg:col-span-2 lg:mt-2 my-auto">
          <TopChart />
        </div>
      </div>

      <div className="">
        <NewReleases />
      </div>

      <div>
        <Popular />
      </div>
    </div>
  );
};

export default Home;
