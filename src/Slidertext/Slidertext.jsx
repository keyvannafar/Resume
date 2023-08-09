import { useSelector } from "react-redux";
import "./Slidertext.css";

function Slidertext() {
  const Language = useSelector((state) => state.LanChange.Language)
  return (
    <>
      <div className="slidertext">
        <h1 className="fade_h1 text-white">M.M.Nafarzadeh</h1>
        <br />
        <br />
        {Language == false ? (
          <div>
            <p className="fade_text_slider">
              <i className="bi bi-check-lg"></i> Einige Programmiersprachen für
              die <b>Website-Entwicklung</b>
            </p>
            <p className="fade_text_slider">
              <i className="bi bi-check-lg"></i> Mein Lebenslauf und meine
              Erfahrungen
            </p>
            <a className="nav-link" aria-current="page" href="#Contact">
              <button className="btn btn-primary mb-2 contact-btn">
                Kontakt
              </button>
            </a>
          </div>
        ) : (
          <div>
            <p className="fade_text_slider">
              <i className="bi bi-check-lg"></i> Some programming languages
              ​​for the <b>Website Development</b>
            </p>
            <p className="fade_text_slider">
              <i className="bi bi-check-lg"></i> My resume and my experiences
            </p>
            <a className="nav-link" aria-current="page" href="#Contact">
              <button className="btn btn-primary mb-2 contact-btn">
                Contact
              </button>
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default Slidertext;
