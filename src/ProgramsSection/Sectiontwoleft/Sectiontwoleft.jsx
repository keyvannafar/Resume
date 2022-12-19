import { useContext, useState } from "react";
import Procontext from "../../Context/Procontext";
import "./Sectiontwoleft.css";
import { dataButton } from "./ButtonSidebar/dataButton";
import ButtonSidebar from "./ButtonSidebar";
import { useSelector } from "react-redux/es/exports";
function Sectiontwoleft() {
  const [Pro, setPro] = useContext(Procontext);
  const Language = useSelector((state)=>state.LanChange.Language)
  const getId = (text) => {
    setPro(text);
    console.log();
  };

  return (
    <div className="lefttwo">
      <h3 className="text-center">
        {Language == false ?
        <span className="mb-5">Kurze Einleitung</span> :
        <span className="mb-5">Short introduction</span>}
      </h3>
      {/* <div className="lefttwo border-0"> */}
      {dataButton.map((item) => (
        <ButtonSidebar key={item.id} {...item} getId={getId} />
      ))}
      {/* </div> */}
    </div>
  );
}

export default Sectiontwoleft;
