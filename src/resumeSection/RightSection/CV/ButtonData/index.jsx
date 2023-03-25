import {personalData} from "./dataPersonal";
import CV from ".."
import { useSelector } from "react-redux"
function PersonalData({
  id,
  title,
  name,
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
  image,
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
  return (
    <div>
      {personalId == 1 ? (
        <div className="animate__animated animate__fadeInRightBig">
          <div className="cv-titles w-100">
            <div className="title-lines"></div>
            <div className="cv-title ms-1 me-1">{title}</div>
            <div className="title-lines"></div>
          </div>
          <div className="spacer"></div>
          <div className="flex-int">
            <div className="cv-leftbox">{addressTitle}</div>
            <div className="cv-rightbox text-white">{address}</div>
          </div>
          <div className="spacer"></div>
          <div className="flex-int">
            <div className="cv-leftbox">{telephonTitle}</div>
            <div className="cv-rightbox text-white">{telephon}</div>
          </div>
          <div className="spacer"></div>
          <div className="flex-int">
            <div className="cv-leftbox">{emailTitle}</div>
            <div className="cv-rightbox text-white">{email}</div>
          </div>
          <div className="spacer"></div>
          <div className="flex-int">
            <div className="cv-leftbox">{placeTitle}</div>
            <div className="cv-rightbox text-white">{place}</div>
          </div>
          <div className="spacer"></div>
          <div className="flex-int">
            <div className="cv-leftbox">{mariedTitle}</div>
            <div className="cv-rightbox text-white">{maried}</div>
          </div>
          <div className="spacer"></div>
          <div className="flex-int">
            <div className="cv-leftbox">{hobbyTitle}</div>
            <div className="cv-rightbox text-white">{hobby}</div>
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
                <p className="personal-left">{dateActiveJob} </p>
              </div>
              <div className="personal-right">
                <p className="text-white">{activeJobTitle}</p>
              </div>
              <div className="personal-left">
                <p> </p>
              </div>
              <div className="personal-right">
                <p>{activeJobCompany}</p>
              </div>
              <div className="personal-left">
                <p className="personal-left">{dateLastJob} </p>
              </div>
              <div className="personal-right">
                <p className="text-white">{lastJobTitle}</p>
              </div>
              <div className="personal-left">
                <p> </p>
              </div>
              <div className="personal-right">
                <p>{lastJobCompany}</p>
              </div>
              <div className="personal-left">
                <p> </p>
              </div>
              <div className="personal-right">
                <p>
                  {lastJobTask1}
                  <br /> {lastJobTask2}
                  <br /> {lastJobTask3}
                  <br /> {lastJobTask4}
                  <br /> {lastJobTask5}
                  <br /> {lastJobTask6}
                  <br /> {lastJobTask7}
                </p>
              </div>
            </div>
            <div className="cv-titles">
              <div className="personal-left">
                <p>{dateMiddleJob}</p>
              </div>
              <div className="personal-right">
                <p className="text-white">{middleJobTitle}</p>
              </div>
              <div className="personal-left">
                <p> </p>
              </div>
              <div className="personal-right">
                <p>{middleJobCompany} </p>
              </div>
              <div className="personal-left">
                <p> </p>
              </div>
              <div className="personal-right">
                <p>
                  {middleJobTask1}
                  <br /> {middleJobTask2}
                  <br /> {middleJobTask3}
                  <br /> {middleJobTask4}
                  <br /> {middleJobTask5}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : personalId == 3 ? (
        <div className="animate__animated animate__fadeInRightBig">
          <div className="cv-titles w-100">
            <div className="title-lines"></div>
            <div className="cv-title ms-1 me-1">{title}</div>
            <div className="title-lines"></div>
          </div>
          <div className="spacer"></div>
          <div className="flex-int">
            <div className="cv-leftbox">{university}</div>
            <div className="cv-rightbox text-white">{ausbildungTitle}</div>
          </div>
          <div className="flex-int">
            <div className="cv-leftbox"></div>
            <div className="cv-rightbox text-white">{ausbildungPlace}</div>
          </div>
          <div className="spacer"></div>
          <div className="flex-int">
            <div className="cv-leftbox">{highschoolDate}</div>
            <div className="cv-rightbox text-white">{highschoolTitle}</div>
          </div>
          {/* <div className="spacer"></div> */}
          <div className="flex-int">
            <div className="cv-leftbox"></div>
            <div className="cv-rightbox text-white">{highschoolPlace}</div>
          </div>
          {/* <div className="spacer"></div> */}
          <div className="flex-int">
            <div className="cv-leftbox"></div>
            <div className="cv-rightbox text-white">
              {highschoolCartificate}
            </div>
          </div>
          <div className="spacer"></div>
        </div>
      ) : (
        <div className="animate__animated animate__fadeInRightBig">
          <div className="cv-titles w-100">
            <div className="title-lines"></div>
            <div className="cv-title ms-1 me-1">{title}</div>
            <div className="title-lines"></div>
          </div>
          <div className="spacer"></div>
          <div className="flex-int">
            <div className="cv-leftbox">{knowledgeTitle}</div>
            <div className="cv-rightbox text-white">{knowledge1}</div>
          </div>
          <div className="flex-int">
            <div className="cv-leftbox"></div>
            <div className="cv-rightbox text-white">{knowledge2}</div>
          </div>
          <div className="flex-int">
            <div className="cv-leftbox"></div>
            <div className="cv-rightbox text-white">{knowledge3}</div>
          </div>
          <div className="flex-int">
            <div className="cv-leftbox"></div>
            <div className="cv-rightbox text-white">{knowledge4}</div>
          </div>
          <div className="flex-int">
            <div className="cv-leftbox"></div>
            <div className="cv-rightbox text-white">{knowledge5}</div>
          </div>
          <div className="flex-int">
            <div className="cv-leftbox"></div>
            <div className="cv-rightbox text-white">{knowledge6}</div>
          </div>
          <div className="flex-int">
            <div className="cv-leftbox"></div>
            <div className="cv-rightbox text-white">{knowledge7}</div>
          </div>
          <div className="flex-int">
            <div className="cv-leftbox"></div>
            <div className="cv-rightbox text-white">{knowledge8}</div>
          </div>
          <div className="flex-int">
            <div className="cv-leftbox"></div>
            <div className="cv-rightbox text-white">{knowledge9}</div>
          </div>
          <div className="spacer"></div>
          <div className="flex-int">
            <div className="cv-leftbox">{languageTitle}</div>
            <div className="cv-rightbox text-white">{lenguage1}</div>
          </div>
          <div className="flex-int">
            <div className="cv-leftbox"></div>
            <div className="cv-rightbox text-white">{lenguage2}</div>
          </div>
          <div className="flex-int">
            <div className="cv-leftbox"></div>
            <div className="cv-rightbox text-white">{lenguage3}</div>
          </div>
          <div className="spacer"></div>
        </div>
      )}
    </div>
  );
}

export default PersonalData