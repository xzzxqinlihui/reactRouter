import React, { Component } from 'react';

class Login extends Component {
    loginClick=()=>{
        //直接吧用户校验的信息加入到 sessionStorage
        sessionStorage.setItem("APP_LOGIN_USER",JSON.stringify({ Name:"aicoder.com",pwd:"123" }));
        //判断用户之前有没有输入之前的地址
        let lastLocation = JSON.parse(sessionStorage.getItem("APP_LAST_URL"));
        if(lastLocation){
            sessionStorage.removeItem("APP_LAST_URL");
            this.props.history.push(lastLocation);
        }else{
            this.props.history.push("/app")
        }

    }
    render() {
        return (
            <div>
                Login
                <hr/>
                <button 
                onClick = {this.loginClick}
                className="button is-primary">登录</button>
            </div>
        );
    }
}

export default Login;
