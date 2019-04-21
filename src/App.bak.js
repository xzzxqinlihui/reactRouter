import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router,Link,Route,NavLink,Switch} from "react-router-dom";
import Home from "./view/Home.js";
import About from "./view/About.js";
import Product from "./view/Product.js";
import Empty from "./view/Empty.js";
class App extends Component {
  render() {
    return (
      
      <div className="App">
      <h1>React-router</h1>
        <Router basename="/app" forceRefresh={true}>
          <div>
            <Link to="/">首页</Link> |
            <Link to="/About">关于</Link> |
            <Link to="/Product">产品</Link> |
            <Link to={{
              pathname:"/Product",
              search:"?key=name",
              hash:"#userHeader",
              state:{loginName:"laoma"}
            }}>产品99</Link>|
            <NavLink 
            to = "/Product"
            // activeStyle={{color:"red",fontSize:"20px"}}
            activeClassName = "selected"
            >
            产品88
            </NavLink>
            <hr/>
            <Switch>

            {/* 第一种方法 component */}
            <Route path="/" exact component={Home}></Route>

            {/* 第二种 渲染方式 render */}
            <Route 
            path="/About" 
            render={(props)=>{
              return <About {...props}></About>
            }}></Route>

            {/* 第三种渲染方式 children */}
            <Route 
            path="/Product" 
            children = {(props)=>{
              console.log(props);
              return props.match ? (<Product {...props}></Product>) : (<p>null</p>)
            }}></Route>

            {/* 无法匹配的组件 */}
            <Route component = {Empty}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
