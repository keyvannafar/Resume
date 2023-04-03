import "./resumeSection.css";
import LeftSection from "./LeftSection"
import RightSection from "./RightSection";
import { useSelector } from "react-redux/es/exports";
function SectionResume() {
  const Language = useSelector((state) => state.LanChange.Language);
  const lightMode = useSelector((state) => state.LightMode.lightMode);
  return (
    <div className="full-width" id="about">
      <h2 className="text-center about-header mb-4">
        {Language == false ? (
          <span className="text-black">Über mich</span>
        ) : (
          <span className="text-black">About me</span>
        )}
      </h2>
      <div>
        <div className={`d-flex ${lightMode == true ? "sectionthree" : "sectionthreeLight"} `}>
          <div className="threeleft">
            <LeftSection />
          </div>
          <div className="threeright">
            <RightSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionResume;
