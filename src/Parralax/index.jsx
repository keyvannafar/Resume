import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import "./Parralax.css";
export default function Parallax() {
  const [log, setLog] = useState();
  const Language = useSelector((state) => state.LanChange.Language);
  const [passInfo, setpassInfo] = useState({
    password: "",
  });
  function Login() {
    if (passInfo.password == "") {
      setLog(0);
    } else if (passInfo.password == "773311") {
      setLog(1);
    } else {
      setLog(2);
    }
  }
  return (
    <div className="parallax">
      <div className="parallaxBlur">
        <div className="text-parallax">
          {Language == false ? (
            <>
              <h3>Meine Dokumente</h3>
              <span>
                Sie können die Dokumente zu meinem Arbeits- und
                Ausbildungsverlauf einsehen, indem Sie das Passwort eingeben
              </span>
              <br />
              <br />
              <input
                type="text"
                name="email"
                className="loginForm"
                placeholder="kenntwort"
                onChange={(e) =>
                  setpassInfo({
                    password: e.target.value,
                  })
                }
              />
              <br />
              <br />
              <button className="parallax-button" onClick={Login}>
                <i class="bi bi-hand-index-thumb"></i> Bestätigung
              </button>
              <br />
              <br />
              <div className="documents">
                {log == 1 ? (
                  <>
                    <div className="animate__animated animate__zoomIn">
                      <span>
                        <i class="bi bi-file-earmark-pdf-fill"></i>{" "}
                        Arbeitszeugnis
                      </span>
                      <br />
                      <span>
                        <i class="bi bi-file-earmark-pdf-fill"></i>{" "}
                        Arbeitszeugnis
                      </span>
                      <br />
                      <span>
                        <i class="bi bi-file-earmark-pdf-fill"></i>{" "}
                        Arbeitszeugnis
                      </span>
                      <br />
                      <span>
                        <i class="bi bi-file-earmark-pdf-fill"></i>{" "}
                        Arbeitszeugnis
                      </span>
                    </div>
                    <br />
                  </>
                ) : log == 0 ? (
                  <div>
                    <p>Bitte geben Sie das Passwort ein.</p>
                  </div>
                ) : log == 2 ? (
                  <div>
                    <p>Das Passwort ist inkorrekt!</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </>
          ) : (
            <>
              <h3>My Documents</h3>
              <span>
                You can download the documents to my work and View training
                history by entering the password
              </span>
              <br />
              <br />
              <input
                type="text"
                name="email"
                className="loginForm"
                placeholder="password"
                onChange={(e) =>
                  setpassInfo({
                    password: e.target.value,
                  })
                }
              />
              <br />
              <br />
              <button className="parallax-button" onClick={Login}>
                <i class="bi bi-hand-index-thumb"></i> Confirmation
              </button>
              <br />
              <br />
              <div className="documents">
                {log == 1 ? (
                  <>
                    <div className="animate__animated animate__zoomIn">
                      <span>
                        <i class="bi bi-file-earmark-pdf-fill"></i> certificate
                        of employment
                      </span>
                      <br />
                      <span>
                        <i class="bi bi-file-earmark-pdf-fill"></i>{" "}
                        Arbeitszeugnis
                      </span>
                      <br />
                      <span>
                        <i class="bi bi-file-earmark-pdf-fill"></i>{" "}
                        Arbeitszeugnis
                      </span>
                      <br />
                      <span>
                        <i class="bi bi-file-earmark-pdf-fill"></i>{" "}
                        Arbeitszeugnis
                      </span>
                    </div>
                    <br />
                  </>
                ) : log == 0 ? (
                  <div>
                    <p>Please enter the password.</p>
                  </div>
                ) : log == 2 ? (
                  <div>
                    <p>The password is incorrect!</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
