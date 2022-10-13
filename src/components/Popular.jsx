import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import SongCard from "./SongCard";

const Popular = () => {
  return (
    <div className="my-10">
      <header className="text-2xl font-bold text-white my-5"> Popular in your area
      </header>
      <Swiper
        slidesPerView="auto"
        spaceBetween={15}
        className="mt-4"
        freeMode
        modules={[FreeMode]}
      >
        {[1, 2, 3, 4, 5,6,7,8,9,10].map((song) => (
          <SwiperSlide key={song} style={{ width: "200px" }} className="">
            <SongCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Popular;
