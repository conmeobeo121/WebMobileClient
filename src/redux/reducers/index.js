import addItem from "./EditItem";
import userReducer from './addUser';
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    userReducer,
    addItem,
})

export default rootReducers;


