import { combineReducers } from "redux";
import _hsReducer from "./hs";
import _namHocReducer from "./namHoc";
import _uiReducer from "./ui";
import _modalReducer from "./modal";
import { reducer as _formReducer } from "redux-form";
import _lopHocReducer from './lopHoc';
const rootReducer = combineReducers({
  hs: _hsReducer,
  namHoc: _namHocReducer,
  lopHoc: _lopHocReducer,
  ui: _uiReducer,
  modal: _modalReducer,
  form: _formReducer,
});
export default rootReducer;
