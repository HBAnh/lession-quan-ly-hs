import { combineReducers } from "redux";
import _hsReducer from "./hs";
import _uiReducer from "./ui";
import _modalReducer from "./modal";
import { reducer as _formReducer } from "redux-form";

const rootReducer = combineReducers({
  hs: _hsReducer,
  ui: _uiReducer,
  modal: _modalReducer,
  form: _formReducer,
});
export default rootReducer;
