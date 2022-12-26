function contactValidation(contactInfo) {
  let errorList = [];
  const emailRx =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const nameRx = /^([A-Za-z]+[\-\']?)/;
  if (!contactInfo.name) {
    errorList.push({
      target: "name",
      Namemessage: "this field is empty",
    });
  } else if (!contactInfo.name.match(nameRx)) {
    errorList.push({
      target: "name",
      Namemessage: "Name is not Valid!",
    });
  }
  if (!contactInfo.email) {
    errorList.push({
      target: "email",
      Emailmessage: "this field is empty",
    });
  } else if (!contactInfo.email.match(emailRx)) {
    errorList.push({
      target: "email",
      Emailmessage: "Email is not Valid!",
    });
  }
  if (!contactInfo.subject) {
    errorList.push({
      target: "subject",
      Subjectmessage: "this field is empty",
    });
  }
  if (!contactInfo.text) {
    errorList.push({
      target: "textarea",
      Textareamessage: "this field is empty",
    });
  }
  // if (!contactInfo.textarea) {
  //   errorList.push({
  //     target: "textarea",
  //     textareamessage: "this field is empty",
  //   });
  // }
  // if(!contactInfo.address){
  //     errorList.push({
  //       target: "address",
  //       repeatpasswordmessage: "this field is empty",
  //     });
  // }
  return errorList;
}

export default contactValidation;
