const initstate = {
  personalId: 1,
};

const ButtonDes = (state = initstate, action) => {
  if (action.type === "personal") {
    return {
      ...state,
      personalId: (state.personalId = 1),
    };
  }
  if (action.type === "Beruflicher") {
    return {
      ...state,
      personalId: (state.personalId = 2),
    };
  }
  if (action.type === "Ausbildung") {
    return {
      ...state,
      personalId: (state.personalId = 3),
    };
  }
  if (action.type === "Kenntnisse") {
    return {
      ...state,
      personalId: (state.personalId = 4),
    };
  } else {
    return state;
  }
};
export default ButtonDes;
