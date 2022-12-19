
import Slidersection from "../Slidersection/Slidersection";
import "../Home/Home.css"
import Procontext from "../Context/Procontext";
import { useState} from "react";
import Projects from "../ProjectsSection";
import { Provider } from "react-redux/es/exports";
import ProgramsSection from "../ProgramsSection/Sectiontwo";
function Home() {
  const [Pro, setPro] = useState(1);
  return (
    <>
      <Procontext.Provider value={[Pro, setPro]}>
          <Slidersection />
          <ProgramsSection />
          <Projects />
      </Procontext.Provider>
    </>
  );
}
export default Home;
