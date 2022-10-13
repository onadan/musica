import { Sidebar } from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import { Route, Routes } from "react-router-dom";
import { Home, Collection } from "./pages";

function App() {
  return (
    <div className="max-w-[1440px] w-full mx-auto">
      <div className="flex">
        <Sidebar />

        <div className="lg:pl-[6.25rem] w-full lg:h-screen">
          <Searchbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
