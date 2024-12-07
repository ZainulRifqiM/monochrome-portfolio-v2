import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skill from "./components/Skill";

function App() {
  return (
    <>
      <Navbar />
      <div className="relative flex w-full h-full">
        <div className="absolute md:left-3/4 md:top-96 left-44 top-[80vh] z-1 blur-[120px] md:blur-[210px]  flex content-none md:w-60 md:h-60 w-24 h-24 bg-textColor rounded-full "></div>
        <div className="absolute md:left-12 md:top-24 left-8 top-16 z-1 blur-[120px] md:blur-[210px] flex content-none md:w-60 md:h-60 w-32 h-32 bg-textColor rounded-full "></div>
      </div>
      <Home />
      <Skill />
    </>
  );
}

export default App;
