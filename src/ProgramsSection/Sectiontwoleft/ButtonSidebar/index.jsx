import "../../Sectiontwoleft/Sectiontwoleft.css";
import React from "react";
import { useContext } from "react";
import Procontext from "../../../Context/Procontext";

function ButtonSidebar({ id, text, image, getId }) {
  const [Pro] = useContext(Procontext);

  return (
    <>
      <a href="#sectionTwo">
        <button
          className={`btn btn-primary prog-btn mb-1 sidebar-button ${
            id == Pro ? "focusButton" : ""
          }`}
          onClick={() => getId(id)}
        >
          <img className="pointer" src={image} />
          <span className="text-start"> {text}</span>
        </button>
      </a>
    </>
  );
}

export default ButtonSidebar;
