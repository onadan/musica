import React from "react";
import SongCard from "./SongCard";

const Popular = () => {
  return (
    <div className="my-10">
      <header className="text-2xl font-bold text-white my-5">
        Popular in your area
      </header>
      <div>
        <SongCard />
      </div>
    </div>
  );
};

export default Popular;
