import "../Contact/Contact.css";
import {formDataEnglish, formDataDeutsch} from "./ContactFormData/contactData.jsx";
import { personalData } from "../resumeSection/RightSection/CV/ButtonData/dataPersonal";
import FormContact from "./ContactFormData";
import { useSelector } from "react-redux";
function Contact() {
  const Language = useSelector((state)=> state.LanChange.Language)
  return (
    <div className="contact-form-data">
      {Language == true
        ? formDataEnglish.map((item) => <FormContact key={item.id} {...item} />)
        : formDataDeutsch.map((item) => (
            <FormContact key={item.id} {...item} />
          ))}
    </div>
  );
}

export default Contact;
