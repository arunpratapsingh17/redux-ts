import { combineReducers } from "redux";
import reducer from "./repositeriesReducer";

const reducers = combineReducers({
    //The state would be saved with the name repositories
    repositories:reducer
})

export default reducers;

//All the coding beneath this is necessary and has to be done,you can't remove it.
export type RootState = ReturnType<typeof reducers>