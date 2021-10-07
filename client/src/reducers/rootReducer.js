import { combineReducers } from "redux";
import boards from "./boards";
import lists from "./lists"
import cards from "./cards"
//will need list and card

const rootReducer = combineReducers({ boards, lists, cards });

export default rootReducer;
