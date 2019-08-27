
import { combineReducers } from "redux";
import auth from "./auth/reducers";
import reviews from "./reviews/reducers";

export default combineReducers({ reviews, auth });

