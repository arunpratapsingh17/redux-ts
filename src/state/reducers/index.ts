import { combineReducers } from "redux";
import reducer from "./repositeriesReducer";

const reducers = combineReducers({
    repositories:reducer
})

export default reducers