import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <div className="flex flex-row">

      <Sidebar />

      <div className="w-full">
        <Searchbar />
      </div>

    </div>
  );
}

export default App;
