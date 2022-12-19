import "./Sectiontworight.css";
import Datadescription from "./ButtonDes";
import { useSelector } from "react-redux";
import { dataDes } from "./ButtonDes/dataDes";
import { dataDesEnglisch } from "./ButtonDes/dataDes";
import { useContext } from "react";
import "animate.css";
import Procontext from "../../Context/Procontext";
function Sectiontworight() {
  const [Pro] = useContext(Procontext);
  const Language = useSelector((state) => state.LanChange.Language);
  const buttontext = dataDes.filter((item) => item.id == Pro);
  const buttontextEng = dataDesEnglisch.filter((item) => item.id == Pro);
  return (
    <>
      <div className="righttwo animate__animated animate__fadeInRightBig">
        <div className="righttwo">
          {Language == false
            ? buttontext.map((item) => (
                <Datadescription key={item.id} {...item} />
              ))
            : buttontextEng.map((item) => (
                <Datadescription key={item.id} {...item} />
              ))}
        </div>
      </div>
    </>
  );
}

export default Sectiontworight;
