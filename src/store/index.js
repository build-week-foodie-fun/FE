import {combineReducers} from "redux";

import reviews from "./reviews/reducers";
import auth from "./auth/reducers";

export default combineReducers({reviews, auth});
