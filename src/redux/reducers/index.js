import { combineReducers } from "redux";
import LanChange from "./LanChange";
import ButtonDes from "./ButtonDes";
import OnScroll from "./OnScroll";
import LoginMode from "./LoginMode";
import ToggleMenu from "./ToggleMenu";
const reducer = combineReducers({
  LanChange,
  ButtonDes,
  OnScroll,
  LoginMode,
  ToggleMenu
});

export default reducer;