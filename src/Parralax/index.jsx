import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import Pdf from "./data/Bachelor.pdf";
import Pdf1 from "./data/zeugnis.pdf";
import "./Parralax.css";
export default function Parallax() {
  const lightMode = useSelector((state) => state.LightMode.lightMode);
  const [log, setLog] = useState();
  const Language = useSelector((state) => state.LanChange.Language);
  const [message, setMessage] = useState("");
  const [passInfo, setpassInfo] = useState({
    password: "",
  });
  function Login() {
    if (message == "") {
      setLog(0);
    } else if (message == "773311") {
      setLog(1);
    } else {
      setLog(2);
    }
  }
  function handlechange(e){
     setMessage(e.target.value)     
  }
  function zuruckToDoc(){
    setMessage("");
    setLog(3);
  }
  return (
    <div className="parallax">
      <div className="parallaxBlur"></div>
      <div className="text-parallax">
        {Language == false ? (
          <>
            <h3>Meine Dokumente</h3>
            <br />
            <div className={`f ${log == 1 ? "d-none" : "d-block"}`}>
              <span>
                Sie können die Dokumente zu meinem Arbeits- und
                Ausbildungsverlauf einsehen, indem Sie das Passwort eingeben
              </span>
              <br />
              <br />
              <input
                type="password"
                name="email"
                className="loginForm"
                placeholder="kenntwort"
                value={message}
                onChange={handlechange}
              />
              <br />
              <br />
              <button className="parallax-button" onClick={Login}>
                <i class="bi bi-hand-index-thumb"></i> Bestätigung
              </button>
            </div>

            <div className="documents">
              {log == 1 ? (
                <>
                  <div
                    className={`animate__animated animate__zoomIn bg-opacity-75 p-5 ${
                      lightMode == true ? "bg-black" : "bg-white text-black"
                    }`}
                  >
                    <span>
                      Sehr geehrte Damen und Herren, <br />
                      <br />
                      ich arbeite seit 2016 als Frontend-Entwickler und bin
                      daher mit den Verfahren und Normen in diesem Bereich
                      bestens vertraut.
                      <br /> Aufgrund meines großen Interesses an der
                      Entwicklung meiner Karriere suche ich eine berufliche
                      Herausforderung in einem spannenden Umfeld, die mich
                      gleichermaßen fordert und mir Raum zur Weiterentwicklung
                      gibt.
                      <br /> Zu meinem verantwortungsbereich gehört die
                      Entwicklung und Umsetzung von Web Anwendungen mit HTML5,
                      CSS3 und JavaScript; Optimierung und Entwicklung von
                      Interaktionsplattformen wie Social Media, Voice und
                      E-Mails; Problemanalysen und - behebung bei auftretenden
                      Fehlern und Störungen; Kontinuierliche Optimierung
                      bestehender Frontends; Implementierung von User
                      Interfaces; Enge Zusammenarbeit mit Backend Entwicklern
                      und Webdesignern und Ständige persönliche
                      Weiterentwicklung in Bezug auf neue Technologien.
                      <br /> Durch das Arbeiten in verschiedenen
                      Aufgabengebieten habe ich gelernt, mich schnell in
                      verschiedene Abläufe einzuarbeiten und neue Aufgaben
                      gewissenhaft und ordentlich zu erledigen. <br />
                      Mein Ziel ist es, die angeeigneten Fähigkeiten
                      gewinnbringend in Ihrem Unternehmen einzusetzen und mich
                      dabei selbst kontinuierlich weiterzuentwickeln, um stets
                      ein leistungsfähiger Mitarbeiter in Ihrem Unternehmen zu
                      sein.
                      <br />
                      Gerne überzeuge ich Sie bei einem persönlichen
                      Vorstellungsgespräch von meinen Fähigkeiten.
                      <br />
                      <br /> Mit freundlichen Grüßen
                      <br /> Mohammad Mehdi Nafarzadeh
                      <br />
                    </span>
                    <br />
                    <span>
                      <a href={Pdf} target="_blank">
                        <i class="bi bi-file-earmark-pdf-fill"></i>{" "}
                        Abschlusszeugnis
                      </a>
                    </span>
                    <br />
                    <span>
                      <a href={Pdf1} target="_blank">
                        <i class="bi bi-file-earmark-pdf-fill"></i>{" "}
                        Arbeitszeugnis
                      </a>
                    </span>
                    <br />
                    <br />
                    <div className="d-flex justify-content-center">
                      <button
                        className="px-3 docBotton border-0"
                        onClick={zuruckToDoc}
                      >
                        Zurück <i class="bi bi-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                  <br />
                </>
              ) : log == 0 ? (
                <div className="text-center">
                  <br />
                  <br />
                  <p>Bitte geben Sie das Passwort ein.</p>
                </div>
              ) : log == 2 ? (
                <div className="text-center">
                  <br />
                  <br />
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
            <br />
            <div className={`${log == 1 ? "d-none" : "d-block"}`}>
              <span>
                You can download the documents to my work and View training
                history by entering the password
              </span>
              <br />
              <br />
              <input
                type="password"
                name="email"
                className="loginForm"
                placeholder="password"
                value={message}
                onChange={handlechange}
              />
              <br />
              <br />
              <button className="parallax-button" onClick={Login}>
                <i class="bi bi-hand-index-thumb"></i> Confirmation
              </button>
            </div>
            <div className="documents">
              {log == 1 ? (
                <>
                  <div
                    className={`animate__animated animate__zoomIn bg-opacity-75 p-5 ${
                      lightMode == true ? "bg-black" : "bg-white text-black"
                    }`}
                  >
                    <span>
                      Dear Sir or Madam, <br />
                      <br />
                      I've been working as a frontend developer since 2016 and
                      am therefore with the procedures and standards in this
                      area very familiar.
                      <br /> Due to my great interest in the I am looking for a
                      professional development of my career challenge in an
                      exciting environment that me equally demands and gives me
                      room for further development there.
                      <br /> My area of ​​responsibility includes the
                      Development and implementation of web applications with
                      HTML5, CSS3 and JavaScript; Optimization and development
                      of Interaction platforms such as social media, voice and
                      emails; Problem analysis and - elimination of occurring
                      errors and errors; Continuous Optimization existing
                      frontend; Implementation of user interfaces; Close
                      cooperation with backend developers and web designers and
                      constant personal development in relation to new
                      technologies.
                      <br /> By working in various areas of responsibility I
                      have learned myself quickly familiarize yourself with
                      various processes and new ones to carry out tasks
                      conscientiously and properly. <br />
                      My The aim is to use the acquired skills profitably to
                      work in your company and myself continuously evolving to
                      always be a to be a high-performing employee in your
                      company.
                      <br />
                      I would be happy to convince you at a personal meeting
                      Interview of my skills.
                      <br />
                      <br /> Wed Kind regards
                      <br /> Mohammad Mehdi Nafarzadeh
                      <br />
                      <br />
                    </span>
                    <span>
                      <a href={Pdf} target="_blank">
                        <i class="bi bi-file-earmark-pdf-fill"></i> graduation
                        certificate
                      </a>
                    </span>
                    <br />
                    <span>
                      <a href={Pdf1} target="_blank">
                        <i class="bi bi-file-earmark-pdf-fill"></i> certificate
                        of employment
                      </a>
                    </span>
                    <br />
                    <div className="d-flex justify-content-center">
                      <button
                        className="px-3 docBotton border-0"
                        onClick={zuruckToDoc}
                      >
                        Zurück <i class="bi bi-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                  <br />
                </>
              ) : log == 0 ? (
                <div className="text-center">
                  <br />
                  <br />
                  <p>Please enter the password.</p>
                </div>
              ) : log == 2 ? (
                <div className="text-center">
                  <br />
                  <br />
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
  );
}
