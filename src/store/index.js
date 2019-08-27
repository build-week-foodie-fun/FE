import { combineReducers } from "redux";
import * as auth from "./auth/reducers"
import * as reviews from "./reviews/reducers";

export default combineReducers({ reviews, auth });
