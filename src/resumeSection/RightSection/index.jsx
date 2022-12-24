import "./RightSection.css";
import { useSelector } from "react-redux";
import CV from "./CV"
function Sectionthreeright() {
  
  return (
    <>
      <div id="lebenslauf"></div>
      <div className="rightthree ">
        <CV />
      </div>
    </>
  );
}

export default Sectionthreeright;