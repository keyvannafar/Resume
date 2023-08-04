import "./resumeSection.css";
import LeftSection from "./LeftSection"
import RightSection from "./RightSection";
import { useSelector } from "react-redux/es/exports";
function SectionResume() {
  const Language = useSelector((state) => state.LanChange.Language);
  return (
    <div>
      {/* <div className="full-width" id="lebenslauf">
        <div>
          <div className="d-flex sectionthree">
            <div className="threeright">
              <RightSection />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default SectionResume;
