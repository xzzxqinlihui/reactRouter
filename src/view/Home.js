import React, { Component } from 'react';
import { Prompt, Link, Route, Switch } from 'react-router-dom';
import Logo from '../assets/logo.svg';

import About from './About.js';
import Product from './Product.js';
import Count from "./Count.js";
import NewCount from "./NewCount.js";
import store from "../store";
import UserList from "./UserList";
import UserListjsonserver from "./UserListjsonserver";
import UserListThunk from "./UserListThunk";
import NewUserList from "./NewUserList.js";

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      Num:store.getState().Num
    }

    store.subscribe(()=>{
      this.setState({
        Num:store.getState().Num
      })
    });
  }

  logout = () => {
    //  清除 sessionStorage里面的用户登录的信息
    sessionStorage.clear();
    this.props.history.push('/login');
  };
  render() {
    let { match } = this.props;
    return (
      <div>
        Home!!!
        {/* 网站顶部导航区域 */}
        <nav className="navbar">
          <div className="navbar-band">
            <Link to="/app">
              <img
                src={Logo}
                alt="官网图片"
                width="130px"
                title="有利于网站的SEO"
              />
            </Link>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <Link className="navbar-item" to="/app">
                首页
              </Link>
              <Link className="navbar-item" to={`${match.path}/product`}>
                产品
              </Link>
              <Link className="navbar-item" to={`${match.path}/cases`}>
                成功案例
              </Link>
              <Link className="navbar-item" to={`${match.path}/about`}>
                关于
              </Link>
            </div>
            <div className="navbar-end">
              <button onClick={this.logout} className="button is-danger">
                登出
              </button>
            </div>
          </div>
        </nav>
        <hr />
        {/* 网站主要内容区域 */}
        <main className="columns" style={{ height: '100%' }}>
          <div className="menu-list column is-one-fifth has-background-info">
          <br/>

            <Link className="navbar-item" to="/app">
              首页
            </Link>
            <br/>

            <Link className="navbar-item" to={`${match.path}/product`}>
              产品
            </Link>
            <br/>
            <Link className="navbar-item" to={`${match.path}/count`}>
              count
            </Link>
            <br/>

            <Link className="navbar-item" to={`${match.path}/cases`}>
              成功案例
            </Link>
            <br/>
            <Link className="navbar-item" to={`${match.path}/about`}>
              关于
            </Link>
            <Link className="navbar-item" to={`${match.path}/userlist`}>
              用户管理列表
            </Link>
            <Link className="navbar-item" to={`${match.path}/userlistjsonserver`}>
              json-server用户管理列表
            </Link>
            <Link className="navbar-item" to={`${match.path}/userlistthunk`}>
            UserListThunk用户管理列表
            </Link>
            <Link className="navbar-item" to={`${match.path}/newcount`}>
              NewCount
            </Link>
            <Link className="navbar-item" to={`${match.path}/newuserlist`}>
              New用户列表管理
            </Link>
            <br/>
          </div>
          <div className=" column  has-background-primary">
            <Switch>
              <Route path={`${match.path}/about`} component={About} />
              <Route path={`${match.path}/product`} component={Product} />
              <Route path={`${match.path}/count`} component={Count} />
              <Route path={`${match.path}/userlist`} component={UserList} />
              <Route path={`${match.path}/userlistjsonserver`} component={UserListjsonserver} />
              <Route path={`${match.path}/userlistthunk`} component={UserListThunk} />
              <Route path={`${match.path}/newcount`} component={NewCount} />
              <Route path={`${match.path}/newuserlist`} component={NewUserList} />

              <Route
                render={() => {
                  return (
                    <div className="title">
                      <h3>欢迎你访问网站</h3>
                      <p className="subtitle">您的访问是我们荣幸</p>
                    </div>
                  );
                }}
              />
            </Switch>
          </div>
        </main>
        <div className="footer has-background-light" >
        
                版权所有@qinlihui.cn  =={this.state.Num}==
        </div>




        {/* <Prompt message="您确定要离开吗？"></Prompt> */}
        <Prompt
          message={location => `您是否要跳转到${location.pathname}`}
          when={false}
        />
      </div>
    );
  }
}
