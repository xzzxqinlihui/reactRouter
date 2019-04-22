import {NumActionTypes} from "../actions/NumAction.js";
 
//  reducer:唯一修改store中的数据的方法，接受两个参数：第一个参数之前的state状态，第二个参数action
export default function NumReducer(preState = 0, action) {
    //  根据当前的擦体内的不同，对preState做以下修改或者做一些处理，然后返回一个新的状态
    switch (action.type) {
      case NumActionTypes.ADD_NUM:
        return preState + action.payload;
      case NumActionTypes.MINUS_NUM:
        return preState - action.payload;
      case NumActionTypes.REPLACE_NUM:
        return preState = action.payload;
      default:
        return preState;
    }
  }