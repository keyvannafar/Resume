import { useSelector } from "react-redux/es/exports";
import { personalData, personalDataEnglisch } from "./ExpData/dataExp";
import ExprienceForm from "./ExpData/index";
function ExpData() {
  const personalId = useSelector((state) => state.ButtonDes.personalId);
  const Language = useSelector((state) => state.LanChange.Language);
  return (
    <div className="animate__animated animate__fadeInRightBig cv-main" id="lebenslauf">
      <div
      >
        <div className="w-100 exprienceTitle">
          <h2 className="col text-center">
            {Language == false ? (
              <span>Erfahrung</span>
            ) : (
              <span>Exprience</span>
            )}
          </h2>
        </div>
      </div>
      {Language == false
        ? personalData.map((item) => <ExprienceForm key={item.id} {...item} />)
        : personalDataEnglisch.map((item) => (
            <ExprienceForm key={item.id} {...item} />
          ))}
    </div>
  );
}

export default ExpData;
