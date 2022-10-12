import { Sidebar } from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import { Route, Routes } from "react-router-dom";
import { Home, Collections, ViewAlbum } from "./pages";
// import {loader} from './assets'

function App() {
  return (
    <div className="max-w-[1440px] w-full mx-auto">
    <div className="flex flex-row">
      <Sidebar />

      <div className="w-full">
        <Searchbar />

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/viewalbum" element={<ViewAlbum />} />
          </Routes>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
