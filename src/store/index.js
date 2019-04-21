import { createStore } from 'redux';

//  action 对数据做的 任何 修改的类型
export const ActionTypes = {
  ADD_NUM: 'ADD_NUM',
  MINUS_NUM: 'MINUS_NUM',
  REPLACE_NUM: 'REPLACE_NUM'
};
//  创建一个action对象的辅助方法
//  action  一个属性type，是字符串一般要求大写，区分不同的动作
            //  paylaod  是当前动作的数据
export const ActionCreator = {
  AddActionCreator(payload) {
    return {
      type: ActionTypes.ADD_NUM,
      payload
    };
  },
  MinusActionCreator(payload){
    return {
        type: ActionTypes.MINUS_NUM,
        payload
      };
  },
  ReplaceActionCreator(payload){
    return {
        type: ActionTypes.REPLACE_NUM,
        payload
      };
  },
};
//  reducer:唯一修改store中的数据的方法，接受两个参数：第一个参数之前的state状态，第二个参数action
function rootReducer(preState = 0, action) {
  //  根据当前的擦体内的不同，对preState做以下修改或者做一些处理，然后返回一个新的状态
  switch (action.type) {
    case ActionTypes.ADD_NUM:
      return preState + action.payload;
    case ActionTypes.MINUS_NUM:
      return preState - action.payload;
    case ActionTypes.REPLACE_NUM:
      return preState = action.payload;
    default:
      return preState;
  }
}
//  创建Store 组件中的redux的统一入口
//  dispatch {action}
//  subscribe(fn)
//  state 状态  就是数据   state: num
const store = createStore(rootReducer);

export default store;
// store.dispatch( {type:"",payload} );


