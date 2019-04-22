import React, { Component } from 'react';
import axios from 'axios';
import store from "../store/index.js";
import { UserListActionCreators } from "../actions/UserListAction.js"
import {Popconfirm,message} from "antd";


export default class UserList extends Component {
  constructor(props) {
     super(props);
    this.state = {
      UserList:store.getState().UserList,
      unsubscribe : store.subscribe(()=>{
          this.setState({
            UserList:store.getState().UserList
          })
        })
    }
  }
  //  移除坚挺
  componentWillUnmount() {
    this.state.unsubscribe();
  }
  

  componentDidMount() {
    axios
      .get('http://localhost:3009/userlist')
      .then(res => {
        console.log(res.data.userlist);
        //  放到stort.state中去
        //  向store中发送一个action  加载用户
        store.dispatch(UserListActionCreators.LoadUserListActionCreator(res.data))
      });
  }

  //  事件处理方法
  delUser = (id)=>{
    store.dispatch(UserListActionCreators.RemoveUserAsyncActionCreator(id))
    .then((res)=>{
      message.info("删除成功")
    })
    .catch(()=>{
      message.error("删除失败");
    })
  }


  render() {
    return <div>
      <h3 className="title">用户列表</h3>
      <table className="table is-striped is-hoverable is-bordered">
        <thead>
            <tr><th>ID</th><th>用户名</th><th>地址</th><th>电话</th><th>删除标识</th><th>备注</th><th>编辑</th></tr>
        </thead>
        <tbody>
          {this.state.UserList.map((item,index)=>
            <tr key={index}>
              <td>{item.Id}</td>
              <td>{item.UserName}</td>
              <td>{item.Address}</td>
              <td>{item.Phone}</td>
              <td>{item.Del?"是":"否"}</td>
              <td>{item.Remark}</td>
              <td>
                <button className="button is-primary">编辑</button>
                &nbsp;
                <Popconfirm title="您确定要删除吗？" okText="删除" cancelText="取消" onConfirm={ ()=> this.delUser(item.Id)}>
                  <button className="button is-danger">删除</button>
                </Popconfirm>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>;
  }
}
