import { carsReducer } from "./carReducer";
import { userReducer } from "./userReducer";
import { combineReducers } from "redux";

export default combineReducers({
    cars: carsReducer, 
    user: userReducer
})