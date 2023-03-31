import { useState } from "react";
import "../../Contact/Contact.css";
import contactValidation from "../../Validation/Contact";


function FormContact({
  title,
  description,
  name,
  subject,
  email,
  message,
  buttonText,
  address,
  deutschTel,
  iranTel,
  emailPrivate,
}) {
  const [errors, setErrors] = useState([]);

  const [contactInfo, setcontactInfo] = useState({
    name: "",
    email: "",
    subject: "",
    text: "",
  });

  const sendContactInfo = (e) => {
    e.preventDefault();

    const result = contactValidation(contactInfo);

    if (result.length) {
      setErrors(result);
    } else {
      setErrors([]);

      fetch("http://localhost:5000/contact", {
        method: "post",
        body: JSON.stringify(contactInfo),
        headers:{"Content-Type": "Application/json"}
      })
        .then((res) => res.json())
        .then((data) => alert(data.message))
        .catch((error) => alert(error)); 
    }
  };

  return (
    <>
      <div className="contact-section" id="contact">
        <section className=" container contact-form">
          {/* <h2 className="h1-responsive font-weight-bold text-center my-4">
            {title}
          </h2> */}

          <form
            id="contact-form"
            name="contact-form"
            //action="mailto:kayvannafarzadeh@yahoo.com"
            method="POST"
            onSubmit={sendContactInfo}
          >
            <div className="row">
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder={name}
                    onChange={(e) =>
                      setcontactInfo({
                        ...contactInfo,
                        name: e.target.value,
                      })
                    }
                  />
                  {errors.length
                    ? errors.map((item) =>
                        item.target == "name" ? (
                          <span className="fieldWarning">
                            {item.Namemessage}
                          </span>
                        ) : (
                          ""
                        )
                      )
                    : ""}

                  <label for="name" className=""></label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder={email}
                    onChange={(e) =>
                      setcontactInfo({
                        ...contactInfo,
                        email: e.target.value,
                      })
                    }
                  />
                  {errors.length
                    ? errors.map((item) =>
                        item.target == "email" ? (
                          <span className="fieldWarning">
                            {item.Emailmessage}
                          </span>
                        ) : (
                          ""
                        )
                      )
                    : ""}
                  <label for="email" className=""></label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    placeholder={subject}
                    onChange={(e) =>
                      setcontactInfo({
                        ...contactInfo,
                        subject: e.target.value,
                      })
                    }
                  />
                  {errors.length
                    ? errors.map((item) =>
                        item.target == "subject" ? (
                          <span className="fieldWarning">
                            {item.Subjectmessage}
                          </span>
                        ) : (
                          ""
                        )
                      )
                    : ""}
                  <label for="subject" className=""></label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="md-form">
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows="2"
                    className="form-control md-textarea"
                    placeholder={message}
                    onChange={(e) =>
                      setcontactInfo({
                        ...contactInfo,
                        text: e.target.value,
                      })
                    }
                  ></textarea>
                  {errors.length
                    ? errors.map((item) =>
                        item.target == "textarea" ? (
                          <span className="fieldWarning">
                            {item.Textareamessage}
                          </span>
                        ) : (
                          ""
                        )
                      )
                    : ""}
                  <label for="message"></label>
                </div>
              </div>
            </div>
            <div className="text-center text-md-left">
              <button type="submit" className="btn btn-primary contact-btn">
                {buttonText}
              </button>
            </div>
            <p className="text-center w-responsive mx-auto mt-1">
              {description}
            </p>
          </form>
          <div className="status"></div>
        </section>
      </div>
    </>
  );
}

export default FormContact;
