import NumReducer from "./NumReducer.js";
import UserListReducer from "./UserListReducer.js";

import {combineReducers} from "redux";

const rootReducer = combineReducers({
    Num:NumReducer,
    UserList:UserListReducer
});

export default rootReducer;