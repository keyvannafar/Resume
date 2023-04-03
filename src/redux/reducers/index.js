import { combineReducers } from "redux";
import LanChange from "./LanChange";
import ButtonDes from "./ButtonDes";
import OnScroll from "./OnScroll";
import LightMode from "./LightMode";
const reducer = combineReducers({
  LanChange,
  ButtonDes,
  OnScroll,
  LightMode
});

export default reducer;