
const initstate ={
    Language : false,
}

const LanChange = (state=initstate, action)=>{
    if (action.type === "Englisch") {
      return {
        ...state,
        Language: (state.Language = true),
      };
    } else if (action.type === "Deutsch") {
      return {
        ...state,
        Language: (state.Language = false),
      };
    }{
      return state;
    }
}

export default LanChange;