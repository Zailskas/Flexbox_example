import { combineReducers } from "redux";
import { valueReducer } from "./reducer";

export default combineReducers({
    value: valueReducer
})