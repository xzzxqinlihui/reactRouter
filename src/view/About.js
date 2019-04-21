import React, { Component } from 'react';
import {Redirect} from "react-router-dom";

class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLogin : true
        }
    }

    render() {
        console.log(this.props);
        return (
            <div>
                About!!
                <input 
                onClick = { () => this.setState({isLogin:false})  }
                type="button" 
                value="登出跳转到首页"
                 />
                {
                    !this.state.isLogin && <Redirect to="/"></Redirect>
                }
                <p>
                    ==={
                        this.props.location.pathname
                    }===
                </p>
            </div>
            
        );
    }
}

export default About;