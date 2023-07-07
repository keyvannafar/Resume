import "../CV/CV.css";
import { useSelector } from "react-redux/es/exports";
import { personalData, personalDataEnglisch } from "./ButtonData/dataPersonal";
import PersonalData from "./ButtonData/index";
function CV() {
  const personalId = useSelector((state) => state.ButtonDes.personalId);
  const Language = useSelector((state) => state.LanChange.Language);
  return (
    <div className="animate__animated animate__fadeInRightBig cv-main">
      <div className={`mainDta`}>
        <div className="w-100">
          <h4 className="col">
            {Language == false ? <span>Lebenslauf</span> : <span>CV</span>}
          </h4>
        </div>
      </div>
      {Language == false
        ? personalData.map((item) =>
            personalId == item.id ? (
              <PersonalData key={item.id} {...item} />
            ) : (
              ""
            )
          )
        : personalDataEnglisch.map((item) =>
            personalId == item.id ? (
              <PersonalData key={item.id} {...item} />
            ) : (
              ""
            )
          )}
    </div>
  );
}

export default CV;
