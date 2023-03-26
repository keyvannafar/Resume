import React from "react";
import parse from "html-react-parser";
function Datadescription({
  image,
  title,
  description,
  url,
  image1,
  image2,
  url1,
  urltext,
  urltext1,
}) {
  return (
    <>
      <div id="sectionTwo"></div>
      <div>
        <div className="righttwo animate__animated animate__fadeInRightBig">
          <div className="title-box">
            <img className="title-img" src={image} />
            &nbsp; <h3>{title}</h3>
          </div>
          <br />
          <p>{parse(description)}</p>
          <div className="righttwo">
          </div>
        </div>
      </div>
    </>
  );
}

export default Datadescription;
