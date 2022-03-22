import { combineReducers } from "redux";
import hsReducer from './hs';

const rootReducer = combineReducers({
    hs: hsReducer,
})
export default rootReducer