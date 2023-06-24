
import { useSelector } from "react-redux"
function PersonalData({
  title,
  addressTitle,
  address,
  telephonTitle,
  telephon,
  emailTitle,
  email,
  placeTitle,
  place,
  mariedTitle,
  maried,
  dateLastJob,
  lastJobTitle,
  lastJobCompany,
  dateActiveJob,
  activeJobTitle,
  activeJobCompany,
  lastJobTask1,
  lastJobTask2,
  lastJobTask3,
  lastJobTask4,
  lastJobTask5,
  lastJobTask6,
  lastJobTask7,
  dateMiddleJob,
  middleJobTitle,
  middleJobCompany,
  middleJobTask1,
  middleJobTask2,
  middleJobTask3,
  middleJobTask4,
  middleJobTask5,
  ausbildungTitle,
  ausbildungPlace,
  highschoolDate,
  highschoolTitle,
  highschoolPlace,
  highschoolCartificate,
  knowledgeTitle,
  knowledge1,
  knowledge2,
  knowledge3,
  knowledge4,
  knowledge5,
  knowledge6,
  knowledge7,
  knowledge8,
  knowledge9,
  languageTitle,
  lenguage1,
  lenguage2,
  lenguage3,
  hobbyTitle,
  hobby,
  university,
}) {
  const Id = useSelector((state) => state.ButtonDes.Id);
  const personalId = useSelector((state) => state.ButtonDes.personalId);
  const lightMode = useSelector((state) => state.LightMode.lightMode);
  return (
    <div className={`${lightMode == true ? "" : "cvLight"}`}>
      {personalId == 1 ? (
        <div className="animate__animated animate__fadeInRightBig">
          <div className="cv-titles w-100">
            <div className="title-lines"></div>
            <div className="cv-title ms-1 me-1">
              <span className="">
                <b>{title}</b>
              </span>
            </div>
            <div className="title-lines"></div>
          </div>
          <div className="spacer"></div>
          <div className="flex-int">
            <div className="cv-leftbox">
              <span>{addressTitle}</span>
            </div>
            <div className="cv-rightbox ">
              <span>{address}</span>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="flex-int">
            <div className="cv-leftbox">
              <span>{telephonTitle}</span>
            </div>
            <div className="cv-rightbox ">
              <span>{telephon}</span>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="flex-int">
            <div className="cv-leftbox">
              <span>{emailTitle}</span>
            </div>
            <div className="cv-rightbox ">
              <span>{email}</span>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="flex-int">
            <div className="cv-leftbox">
              <span>{placeTitle}</span>
            </div>
            <div className="cv-rightbox ">
              <span>{place}</span>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="flex-int">
            <div className="cv-leftbox">
              <span>{mariedTitle}</span>
            </div>
            <div className="cv-rightbox ">
              <span>{maried}</span>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="flex-int">
            <div className="cv-leftbox">
              <span>{hobbyTitle}</span>
            </div>
            <div className="cv-rightbox ">
              <span>{hobby}</span>
            </div>
          </div>
        </div>
      ) : personalId == 2 ? (
        <div className="animate__animated animate__fadeInRightBig">
          <div>
            <div className="cv-titles w-100">
              <div className="title-lines"></div>
              <div className="cv-title ms-1 me-1">{title}</div>
              <div className="title-lines"></div>
            </div>
            <div className="spacer"></div>
            <div className="cv-titles">
              <div className="personal-left">
                <span className="personal-left">{dateActiveJob} </span>
              </div>
              <div className="personal-right">
                <span className="text-white">{activeJobTitle}</span>
              </div>
              <div className="personal-left">
                <span> </span>
              </div>
              <div className="personal-right">
                <span>{activeJobCompany}</span>
              </div>
              <br /><br />
              <div className="personal-left">
                <span className="personal-left">{dateLastJob} </span>
              </div>
              <div className="personal-right">
                <span className="text-white">{lastJobTitle}</span>
              </div>
              <div className="personal-left">
                <span> </span>
              </div>
              <div className="personal-right">
                <span>{lastJobCompany}</span>
              </div>
              <div className="personal-left">
                <span> </span>
              </div>
              <div className="personal-right">
                <span>
                  {lastJobTask1}
                  <br /> {lastJobTask2}
                  <br /> {lastJobTask3}
                  <br /> {lastJobTask4}
                  <br /> {lastJobTask5}
                  <br /> {lastJobTask6}
                  <br /> {lastJobTask7}
                </span>
              </div>
            </div>
            <div className="cv-titles">
              <div className="personal-left">
                <span>{dateMiddleJob}</span>
              </div>
              <div className="personal-right">
                <span className="text-white">{middleJobTitle}</span>
              </div>
              <div className="personal-left">
                <span> </span>
              </div>
              <div className="personal-right">
                <span>{middleJobCompany} </span>
              </div>
              <div className="personal-left">
                <span> </span>
              </div>
              <div className="personal-right">
                <span>
                  {middleJobTask1}
                  <br /> {middleJobTask2}
                  <br /> {middleJobTask3}
                  <br /> {middleJobTask4}
                  <br /> {middleJobTask5}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : personalId == 3 ? (
        <div className="animate__animated animate__fadeInRightBig">
          <div className="cv-titles w-100">
            <div className="title-lines"></div>
            <div className="cv-title ms-1 me-1">
              <span>{title}</span>
            </div>
            <div className="title-lines"></div>
          </div>
          <div className="spacer"></div>
          <div className="flex-int">
            <div className="cv-leftbox">
              <span>{university}</span>
            </div>
            <div className="cv-rightbox ">
              <span>{ausbildungTitle}</span>
            </div>
          </div>
          <div className="flex-int">
            <div className="cv-leftbox"></div>
            <div className="cv-rightbox ">
              <span>{ausbildungPlace}</span>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="flex-int">
            <div className="cv-leftbox">
              <span>{highschoolDate}</span>
            </div>
            <div className="cv-rightbox ">
              <span>{highschoolTitle}</span>
            </div>
          </div>
          <div className="flex-int">
            <div className="cv-leftbox"></div>
            <div className="cv-rightbox text-white">
              <span>{highschoolPlace}</span>
            </div>
          </div>
          <div className="flex-int">
            <div className="cv-leftbox"></div>
            <div className="cv-rightbox text-white">
              <span>{highschoolCartificate}</span>
            </div>
          </div>
          <div className="spacer"></div>
        </div>
      ) : (
        <div className="animate__animated animate__fadeInRightBig">
          <div className="cv-titles w-100">
            <div className="title-lines"></div>
            <div className="cv-title ms-1 me-1">
              <span>{title}</span>
            </div>
            <div className="title-lines"></div>
          </div>
          <div className="spacer"></div>
          <div className="flex-int">
            <div className="cv-leftbox">
              <span>{knowledgeTitle}</span>
            </div>
            <div className="cv-rightbox text-white">
              <span>{knowledge1}</span>
            </div>
          </div>
          <div className="flex-int">
            <div className="cv-leftbox"></div>
            <div className="cv-rightbox text-white">
              <span>{knowledge2}</span>
            </div>
          </div>
          <div className="flex-int">
            <div className="cv-leftbox"></div>
            <div className="cv-rightbox text-white">
              <span>{knowledge3}</span>
            </div>
          </div>
          <div className="flex-int">
            <div className="cv-leftbox"></div>
            <div className="cv-rightbox text-white">
              <span>{knowledge4}</span>
            </div>
          </div>
          <div className="flex-int">
            <div className="cv-leftbox"></div>
            <div className="cv-rightbox text-white">
              <span>{knowledge5}</span>
            </div>
          </div>
          <div className="flex-int">
            <div className="cv-leftbox"></div>
            <div className="cv-rightbox text-white">
              <span>{knowledge6}</span>
            </div>
          </div>
          <div className="flex-int">
            <div className="cv-leftbox"></div>
            <div className="cv-rightbox text-white">
              <span>{knowledge7}</span>
            </div>
          </div>
          <div className="flex-int">
            <div className="cv-leftbox"></div>
            <div className="cv-rightbox text-white">
              <span>{knowledge8}</span>
            </div>
          </div>
          <div className="flex-int">
            <div className="cv-leftbox"></div>
            <div className="cv-rightbox text-white">
              <span>{knowledge9}</span>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="flex-int">
            <div className="cv-leftbox">
              <span>{languageTitle}</span>
            </div>
            <div className="cv-rightbox text-white">
              <span>{lenguage1}</span>
            </div>
          </div>
          <div className="flex-int">
            <div className="cv-leftbox"></div>
            <div className="cv-rightbox text-white">
              <span>{lenguage2}</span>
            </div>
          </div>
          <div className="flex-int">
            <div className="cv-leftbox"></div>
            <div className="cv-rightbox text-white">
              <span>{lenguage3}</span>
            </div>
          </div>
          <div className="spacer"></div>
        </div>
      )}
    </div>
  );
}

export default PersonalData