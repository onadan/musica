import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const TopChart = () => {
  return (
    <div className="my-10 w-full">
      <header className="text-2xl font-bold text-white my-4">Top Charts</header>

      <div className="bg-darkAlt w-full rounded-3xl p-4 h-24 my-2">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <div className="bg-gray-500 rounded-2xl w-16 h-16"></div>
            <div className="flex flex-col justify-between">
              <p className="text-lg text-white">Golden Age of 80s</p>
              <p className="text-white text-xs opacity-50">Sean Swadder</p>
              <p className="text-white text-xs">2:34:45</p>
            </div>
          </div>
          <div>
            <div className="rounded-full border border-secondary p-2 text-xl text-secondary">
              <AiOutlineHeart />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-darkAlt w-full rounded-3xl p-4 h-24 my-2">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <div className="bg-gray-500 rounded-2xl w-16 h-16"></div>
            <div className="flex flex-col justify-between">
              <p className="text-lg text-white">Golden Age of 80s</p>
              <p className="text-white text-xs opacity-50">Sean Swadder</p>
              <p className="text-white text-xs">2:34:45</p>
            </div>
          </div>
          <div>
            <div className="rounded-full border border-secondary p-2 text-xl text-secondary">
              <AiOutlineHeart />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-darkAlt w-full rounded-3xl p-4 h-24 my-2">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <div className="bg-gray-500 rounded-2xl w-16 h-16"></div>
            <div className="flex flex-col justify-between">
              <p className="text-lg text-white">Golden Age of 80s</p>
              <p className="text-white text-xs opacity-50">Sean Swadder</p>
              <p className="text-white text-xs">2:34:45</p>
            </div>
          </div>
          <div>
            <div className="rounded-full border border-secondary p-2 text-xl text-secondary">
              <AiOutlineHeart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopChart;
