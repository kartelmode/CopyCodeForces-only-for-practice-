import { profileReducer } from "./profileReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    profile: profileReducer
});
