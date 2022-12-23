import "./resumeSection.css";
import LeftSection from "./LeftSection"
import RightSection from "./RightSection";
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
          <LeftSection />
        </div>
        <div className="threeright">
          <RightSection />
        </div>
      </div>
    </div>
  );
}

export default SectionResume;
