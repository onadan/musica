import SongCard from "./SongCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

const NewReleases = () => {
  return (
    <div className="py-4 overflow-hidden">
      <header className="text-2xl font-bold text-white items-center my-5">
        New releases
      </header>

      <Swiper slidesPerView="auto" spaceBetween={15} className="mt-4" freeMode modules={[FreeMode]}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((song) => (
          <SwiperSlide key={song} style={{ width: "200px" }} className="">
            <SongCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewReleases;
