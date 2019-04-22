import React, { Component } from 'react';
import {HashRouter as Router,Route ,Redirect,Switch} from "react-router-dom";
import Login from "./view/Login.js";
import Empty from "./view/Empty.js";
import Home from "./view/Home.js";

//导入antd样式
import "antd/dist/antd.css";

export default class App extends Component {
    checkUserState(){
        //判断用户是否已经登录
        if(sessionStorage.getItem("APP_LOGIN_USER")){
            return true;
        }
        return false;
    }
  render() {
    return (
        <Router >
            <Switch>
                <Route path="/" exact render={ () => <Redirect to="/app"></Redirect> }></Route>
                <Route path="/login" component={Login}></Route>
                <Route path='/app' render={ (props) => {
                    //  校验用户是否已经登录
                    if(this.checkUserState()){
                        return <Home {...props}></Home>
                    }
                    //  记录以下用户输入的地址，然后用户登录成功之后再跳转回此地址
                    sessionStorage.setItem( "APP_LAST_URL",JSON.stringify(props.location) );
                    return <Redirect to="/login"></Redirect>
                }}/>
                <Route component={Empty}></Route>
            </Switch>
        </Router>
    )
  }
}
