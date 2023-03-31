import "./LeftSection.css";
import slide2 from "../../images/Keyvan-photo/keyvan-coat.jpg";
import { useSelector } from "react-redux";
import { DataDes } from "./Button-int/data";
import { DataDesEnglisch } from "./Button-int/data";
import IntButton from "./Button-int";
function LeftSection() {
  //################## Redux  ##########################const Id = useSelector((state) => state.ButtonDes.Id);
  const Language = useSelector((state) => state.LanChange.Language);
  //#####################################################

  return (
    <>
      <div className="leftthree">
        {/* <img className="image-int" src={slide2} /> */}
        <p className="text-center text-white">
          MENU <i class="bi bi-arrow-down"></i>
        </p>
        {Language == false
          ? DataDes.map((item) => <IntButton key={item.id} {...item} />)
          : DataDesEnglisch.map((item) => (
              <IntButton key={item.id} {...item} />
            ))}
      </div>
    </>
  );
}

export default LeftSection;
