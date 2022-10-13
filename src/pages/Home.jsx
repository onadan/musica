import NewReleases from "../components/NewReleases";
import Popular from "../components/Popular";
import TopChart from "../components/TopChart";
import { model, heroAvatar, vector } from "../assets";
// import { AiFillHeart } from "react-icons/ai";

const Home = () => {
  return (
    <div className="p-4">
      <div className="lg:grid lg:grid-cols-5 lg:gap-4 items-center">
        <div className="lg:max-w-[800px] bg-[#609EAF] w-full h-96 rounded-[3rem] lg:col-span-3 overflow-hidden">
          <div className="relative min-w-[40rem] w-full h-full mx-auto">
            <div className="text-white flex flex-col py-8 pl-10 justify-between max-w-[20rem] h-full">
              <p className="text-sm text-white">Curated playlist</p>
              <div className="group">
                <header className="font-bold text-2xl text-white">
                  R & B Hits
                </header>
                <p className="font-light">
                  All mine, Lie agian, Petty call me everyday, Out of time, No
                  love, Bad Habit, and so much more.
                </p>
              </div>
              <p className="inline-flex items-center">
                {/* <AiFillHeart /> &nbsp; 33k Likes */}
                <img src={heroAvatar} alt="model" />
              </p>
            </div>

            <div className="model absolute bottom-0 right-1 z-10">
              <img src={model} alt="model" />
            </div>

            <div className="model absolute bottom-0 right-1 ">
              <img src={vector} alt="model" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 lg:mt-2 my-auto">
          <TopChart />
        </div>
      </div>

      <div>
        <NewReleases />
      </div>

      <div>
        <Popular />
      </div>
    </div>
  );
};

export default Home;
