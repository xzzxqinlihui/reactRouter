import React, { Component, Fragment } from 'react';
import { Popconfirm ,message} from 'antd';

export default class UserRow extends Component {
  state = {
    isEdit: false,
    EditUser:{...this.props.User}
  };

  handlerChange = (e)=>{
    this.setState({
        EditUser:{
            ...this.state.EditUser,
            [e.target.name]:e.target.type === "checkbox" ? e.target.checked : e.target.value
        }
    })
  }

  render() {
    let { User } = this.props;
    //  子组件私有，修改的时候只修改子组件的，父组件不受影响
    let {EditUser} = this.state;
    return (
      <tr>
        {this.state.isEdit ? (
          <Fragment>
            <td>{User.Id}</td>
            
            <td><input  onChange={this.handlerChange} type="text" name="UserName" value={EditUser.UserName} /></td>
            <td><input  onChange={this.handlerChange} type="text" name="Address" value={EditUser.Address} /></td>
            <td><input  onChange={this.handlerChange} type="text" name="Phone" value={EditUser.Phone} /></td>
            <td>是否删除<input  onChange={this.handlerChange} type="checkbox" name="Del" checked={EditUser.Del} /></td>
            <td><input  onChange={this.handlerChange} type="text" name="Remark" value={EditUser.Remark} /></td>
            <td>
              <button
              onClick={()=>{
                  this.props.updateUser(EditUser)
                  .then(res=>{
                    this.setState({
                        isEdit:false
                    })
                    message.info("修改成功")
                  })
                  .catch(()=>{
                    message.error("修改异常，请重试")
                  })
              }}
              
              className="button is-primary">保存</button>
              &nbsp;
              <button
              onClick = {()=>{this.setState({isEdit:false})}}
              className="button is-danger">取消</button>
            </td>
          </Fragment>
        ) : (
          <Fragment>
            <td>{User.Id}</td>
            <td>{User.UserName}</td>
            <td>{User.Address}</td>
            <td>{User.Phone}</td>
            <td>{User.Del ? '是' : '否'}</td>
            <td>{User.Remark}</td>
            <td>
              <button
              onClick = {()=>{this.setState({isEdit:true})}}
              className="button is-primary">编辑</button>
              &nbsp;
              <Popconfirm
                title="您确认要删除吗"
                okText="删除"
                cancelText="取消"
                onConfirm={() => this.props.delUser(User.Id)}
              >
                <button className="button is-danger">删除</button>
              </Popconfirm>
            </td>
          </Fragment>
        )}
      </tr>
    );
  }
}
