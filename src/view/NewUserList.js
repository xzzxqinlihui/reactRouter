import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserListActionCreators } from "../actions/UserListAction.js"
import UserRow from '../components/UserRow.js';
import AddUser  from "../components/AddUser.js"

function mapStateToProps(state) {
  return {
    UserList: state.UserList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadUserList:()=>dispatch(UserListActionCreators.LoadUserListAsyncActionCreator()),
    delUser:(id)=>dispatch(UserListActionCreators.RemoveUserAsyncActionCreator(id)),
    updateUser:(user)=>dispatch(UserListActionCreators.UpdateUserAsyncActionCreator(user)),
    addUser:(user)=>dispatch(UserListActionCreators.AddUserAsyncActionCreator(user))
  };
}

class NewUserList extends Component {
    constructor(props){
        super(props);
        //为了使其刚进入页面就有数据加载
        this.props.loadUserList();
    }
  render() {
    return (
      <div>
        <h3 className="title">用户列表</h3>
        <AddUser addUser={this.props.addUser}></AddUser>
        <table className="table is-striped is-hoverable is-bordered is-fullwidth">
          <thead>
            <tr>
              <th>ID</th>
              <th>用户名</th>
              <th>地址</th>
              <th>电话</th>
              <th>删除标识</th>
              <th>备注</th>
              <th>编辑</th>
            </tr>
          </thead>
          <tbody>
            {this.props.UserList.map((item, index) => (
              <UserRow 
              delUser={this.props.delUser}
              updateUser = {this.props.updateUser}
                key={index}
                User={item}
               ></UserRow>   
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewUserList);
