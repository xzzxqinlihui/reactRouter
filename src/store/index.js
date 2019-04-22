import { createStore, applyMiddleware } from 'redux';

import rootReducer from "../reducers/index.js";
import thunk from "redux-thunk"
//  创建Store 组件中的redux的统一入口
//  dispatch {action}
//  subscribe(fn)
//  state 状态  就是数据   state: num
const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;
// store.dispatch( {type:"",payload} );


