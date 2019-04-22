import React, { Component } from 'react';
import {NumActionCreator as ActionCreator} from "../actions/NumAction.js";
import store from "../store/index.js";

export default class Count extends Component {
  constructor(props){
    super(props);
    this.state = {
      Num:store.getState().Num  //  从state中拿到num数据
    }
    //  当store里面的state发生变化的时候，会自动触发绑定 函数执行
    //  返回值是一个函数，此函数执行后，会取消订阅
   this.state.unsubscribe = store.subscribe(()=>{
      this.setState({
        Num:store.getState().Num
      })
    })
  }

  componentWillUnmount() {
    this.state.unsubscribe();// 组件销毁之前 接触监听
  }
  

  addNum =()=>{
      store.dispatch( ActionCreator.AddActionCreator(1) )
  }
  minusNum =()=>{
      store.dispatch( ActionCreator.MinusActionCreator(1) )
  }
  replaceNum =()=>{
      store.dispatch( ActionCreator.ReplaceActionCreator(Date.now()) )
  }
  render() {
    return (
      <div>
        count  {this.state.Num}
        <br/>
        <input 
        onClick = {this.addNum}
        type="button" value="+1" className = "button is-info" />
        <input 
         onClick = {this.minusNum}
        type="button" value="-1" className = "button is-danger" />
        <input 
         onClick = {this.replaceNum}
        type="button" value="替换" className = "button is-primary" />
      </div>
    )
  }
}
