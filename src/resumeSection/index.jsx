import "./resumeSection.css";
import LeftSection from "./LeftSection"
import RightSection from "./RightSection";
import { useSelector } from "react-redux/es/exports";
function SectionResume() {
  const Language = useSelector((state) => state.LanChange.Language);
  return (
    <div>
      <div
        className="full-width"
        id="about"
      >
        <h2 className="text-center about-header mb-4">
          {Language == false ? (
            <div className="text-black">Über mich</div>
          ) : (
            <div className="text-black">About me</div>
          )}
        </h2>
        <div>
          <div
            className="d-flex sectionthree"
          >
            {/* <div className="threeleft">
              <LeftSection />
            </div> */}
            <div className="threeright">
              <RightSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionResume;
