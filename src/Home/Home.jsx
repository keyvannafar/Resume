import Slidersection from "../Slidersection/Slidersection";
import "../Home/Home.css";
import Procontext from "../Context/Procontext";
import { useState } from "react";
import Projects from "../ProjectsSection";
import MySkils from "../MySkils";
import Parallax from "../Parralax";
import ExpData from "../Exprience";
function Home() {
  const [Pro, setPro] = useState(1);
  return (
    <>
      <Procontext.Provider value={[Pro, setPro]}>
        <Slidersection />
        <MySkils />
        <ExpData />
        {/* <SectionResume /> */}
        <Parallax />
        <Projects />
      </Procontext.Provider>
    </>
  );
}
export default Home;
