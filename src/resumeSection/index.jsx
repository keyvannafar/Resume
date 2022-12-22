import "./Sectionthree.css";
import Sectionthreeleft from "./Sectionthreeleft/Sectionthreeleft"
import Sectionthreeright from "./Sectionthreeright/Sectionthreeright";
import { useSelector } from "react-redux/es/exports";
function SectionResume() {
  const Language = useSelector((state) => state.LanChange.Language);
  return (
    <div className="full-width" id="about">
      <h2 className="text-center about-header">
        {Language == false ? <span>Über mich</span> : <span>About me</span>}
      </h2>
      <div className="container d-flex sectionthree">
        <div className="threeleft">
          <Sectionthreeleft />
        </div>
        <div className="threeright">
          <Sectionthreeright />
        </div>
      </div>
    </div>
  );
}

export default SectionResume;
