import { combineReducers } from "redux";
import _namHocReducer from "./namHoc";
import _uiReducer from "./ui";
import _modalReducer from "./modal";
import { reducer as _formReducer } from "redux-form";
import _lopHocReducer from "./lopHoc";
import _studentClassReducer from "./studentClass";
const rootReducer = combineReducers({
  namHoc: _namHocReducer,
  lopHoc: _lopHocReducer,
  studentClass: _studentClassReducer,
  ui: _uiReducer,
  modal: _modalReducer,
  form: _formReducer,
});
export default rootReducer;
