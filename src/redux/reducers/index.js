import { combineReducers } from "redux";
import LanChange from "./LanChange";
import ButtonDes from "./ButtonDes";
import OnScroll from "./OnScroll";
const reducer = combineReducers({
  LanChange,
  ButtonDes,
  OnScroll,
});

export default reducer;