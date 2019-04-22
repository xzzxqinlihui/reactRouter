import {UserListActionTypes} from "../actions/UserListAction.js";


export default function UserListReducer(preState = [],action){
    switch (action.type) {
        case UserListActionTypes.LOAD_USERLIST:
           return action.payload;
        case UserListActionTypes.ADD_USER:
           return [...preState,action.payload];
        case UserListActionTypes.REMOVE_USER:
           return preState.filter(item => item.Id !== action.payload);
        default:
            return preState;
    }
}