import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import Pdf from "./data/Bachelor.pdf";
import Pdf1 from "./data/zeugnis.pdf";
import Pdf2 from "./data/Anschreiben - Mohammad Mehdi Nafarzadeh.pdf";
import "./Parralax.css";
export default function Parallax() {
  
  
  const loginMode = useSelector((state) => state.LoginMode.loginMode);
  const Language = useSelector((state) => state.LanChange.Language);
  const [message, setMessage] = useState("");
  function LoginFunc(){
    
  }
  return (
    <div className="parallax" id="Dokumente">
      <div className="parallaxBlur"></div>
      <div className="text-parallax container">
        {Language == false ? (
          <>
            <h3>Meine Dokumente</h3>
            <br />
            <div className={`f`}>
              <span className="textDoc">
                Sie können die Dokumente zu meinem Arbeits- und
                Ausbildungsverlauf einsehen
              </span>
              <br />
              <br />
              <br />
              <div className="docSection">
                <button onClick={LoginFunc} className="docButton">
                  {loginMode == 1 ? (
                    <span>
                      <a href={Pdf2} target="_blank">
                        <i className="bi bi-file-earmark-pdf-fill"></i>{" "}
                        Anschreiben
                      </a>
                    </span>
                  ) : (
                    <span>
                      <Link to="/Login">
                        <i className="bi bi-file-earmark-pdf-fill"></i>{" "}
                        Anschreiben
                      </Link>
                    </span>
                  )}
                </button>
                <button onClick={LoginFunc} className="docButton">
                  {loginMode !== 1 ? (
                    <span>
                      <Link to="/Login">
                        <i className="bi bi-file-earmark-pdf-fill"></i>{" "}
                        Abschlusszeugnis
                      </Link>
                    </span>
                  ) : (
                    <span>
                      <a href={Pdf} target="_blank">
                        <i className="bi bi-file-earmark-pdf-fill"></i>{" "}
                        Abschlusszeugnis
                      </a>
                    </span>
                  )}
                </button>
                <button onClick={LoginFunc} className="docButton">
                  {loginMode !== 1 ? (
                    <span>
                      <Link to="/Login">
                        <i className="bi bi-file-earmark-pdf-fill"></i>{" "}
                        Arbeitszeugnis
                      </Link>
                    </span>
                  ) : (
                    <span>
                      <a href={Pdf1} target="_blank">
                        <i className="bi bi-file-earmark-pdf-fill"></i>{" "}
                        Arbeitszeugnis
                      </a>
                    </span>
                  )}
                </button>
              </div>
              <br />
            </div>
          </>
        ) : (
          <>
            <h3>My Documents</h3>
            <br />
            <div className={`f`}>
              <span className="textDoc">
                You can view the documents related to my work and education
                history
              </span>
              <br />
              <br />
              <br />
              <div className="docSection">
                <button onClick={LoginFunc} className="docButton">
                  {loginMode == 1 ? (
                    <span>
                      <a href={Pdf2} target="_blank">
                        <i className="bi bi-file-earmark-pdf-fill"></i>{" "}
                        Anschreiben
                      </a>
                    </span>
                  ) : (
                    <span>
                      <Link to="/Login">
                        <i className="bi bi-file-earmark-pdf-fill"></i>{" "}
                        Anschreiben
                      </Link>
                    </span>
                  )}
                </button>
                <button onClick={LoginFunc} className="docButton">
                  {loginMode !== 1 ? (
                    <span>
                      <Link to="/Login">
                        <i className="bi bi-file-earmark-pdf-fill"></i>{" "}
                        Abschlusszeugnis
                      </Link>
                    </span>
                  ) : (
                    <span>
                      <a href={Pdf} target="_blank">
                        <i className="bi bi-file-earmark-pdf-fill"></i>{" "}
                        Abschlusszeugnis
                      </a>
                    </span>
                  )}
                </button>
                <button onClick={LoginFunc} className="docButton">
                  {loginMode !== 1 ? (
                    <span>
                      <Link to="/Login">
                        <i className="bi bi-file-earmark-pdf-fill"></i>{" "}
                        Arbeitszeugnis
                      </Link>
                    </span>
                  ) : (
                    <span>
                      <a href={Pdf1} target="_blank">
                        <i className="bi bi-file-earmark-pdf-fill"></i>{" "}
                        Arbeitszeugnis
                      </a>
                    </span>
                  )}
                </button>
              </div>
              <br />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
