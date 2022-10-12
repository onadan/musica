import React from "react";

const SongCard = () => {
  return (
    <div className="w-max mx-2">
      <div className="h-[150px] w-[150px] bg-gray-500 rounded-3xl"></div>
      <div className="px-2">
      <p className="text-xs text-white py-1">Life in a bubble</p>
      <p className="text-xs text-white opacity-50">The van</p>
      </div>
    </div>
  );
};

export default SongCard;
