import { combineReducers } from "redux";
import { counterReducer } from "./Counter/counterReducer";
import { formReducer } from "./UserForm/formReducers";

export const rootReducer = combineReducers({
    counter: counterReducer,
    form: formReducer
})