
import { useDispatch, useSelector } from "react-redux";
function IntButton({ id, text, icon }) {
  const personalId = useSelector((state) => state.ButtonDes.personalId);
  const setPersonalId = useDispatch();
  function personal() {
    if (id == 1) {
      setPersonalId({ type: "personal" });
    } else if (id == 2) {
      setPersonalId({ type: "Beruflicher" });
    } else if (id == 3) {
      setPersonalId({ type: "Ausbildung" });
    } else if (id == 4) {
      setPersonalId({ type: "Kenntnisse" });
    }
  }
  return (
    <div>
      <a href="#lebenslauf">
        <button
          className={`btn btn-primary btn-int about-text position-relative mt-2 ${
            personalId == id ? `focus` : ""
          }`}
          onClick={personal}
        >
          <span>
            {icon}&nbsp;
            {text}
          </span>
        </button>
      </a>
    </div>
  );
}

export default IntButton;
