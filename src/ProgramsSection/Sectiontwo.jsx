import "./Sectiontwo.css";
import Sectiontwoleft from "../ProgramsSection/Sectiontwoleft/Sectiontwoleft";
import Sectiontworight from "../ProgramsSection/Sectiontworight/Sectiontworight";
import spacer from "../../src/images/spacer/spacer.jpg"
import { useSelector } from "react-redux/es/exports";
function Sectiontwo() {
  const Language = useSelector((state)=> state.LanChange.Language)
  return (
    <div className="topsectwo">
      {/* <img className="spacer-img" src={spacer} /> */}
      <h2 className="text-center">
        {Language == false ? (
          <span>Programmiersprachen und Projekte</span>
        ) : (
          <span>Programming Languages ​​and Projects</span>
        )}
      </h2>
      <div className="container d-flex sectiontwo">
        <div className="twoleft">
          <Sectiontwoleft />
        </div>
        <div className="tworight">
          <Sectiontworight />
        </div>
      </div>
    </div>
  );
}

export default Sectiontwo;
