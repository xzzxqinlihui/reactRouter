import React, { Component } from 'react';
import { Modal, message } from 'antd';

export default class AddUser extends Component {
  state = {
    visible: false,
    UserName:"",
    Address:"",
    Phone:"",
    Remark:""
  };

  handlerChange = (e) =>{
      this.setState({
          [e.target.name]:e.target.value
      })
  }

  getAddUser = () =>{
      return {
        UserName:this.state.UserName,
        Address:this.state.Address,
        Phone:this.state.Phone,
        Remark:this.state.Remark,
        Id:Date.now(),
        Del:false
      }
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ visible: true });
          }}
          className="button is-warning"
        >
          添加
        </button>
        <Modal
          title="添加用户"
          okText="添加"
          cancelText="取消"
          visible={this.state.visible}
          onCancel={() => {
            this.setState({ visible: false });
          }}
          onOk={()=>this.props.addUser( this.getAddUser())
                    .then(res=>{
                        message.info("添加成功");
                        this.setState({
                            visible:false
                        })
                    }).catch(()=>{
                        message.error("添加失败，请重试")
                    })
            }
        >
          <table className="table is-fullwidth">
            <tbody>
              <tr>
                <td>用户名</td>
                <td>
                  <input
                    type="text"
                    name="UserName"
                    value={this.state.UserName}
                    onChange={this.handlerChange}
                  />
                </td>
              </tr>
              <tr>
                <td>地址</td>
                <td>
                  <input
                    type="text"
                    name="Address"
                    value={this.state.Address}
                    onChange={this.handlerChange}
                  />
                </td>
              </tr>
              <tr>
                <td>电话</td>
                <td>
                  <input
                    type="text"
                    name="Phone"
                    value={this.state.Phone}
                    onChange={this.handlerChange}
                  />
                </td>
              </tr>
              <tr>
                <td>备注</td>
                <td>
                  <textarea
                    type="text"
                    name="Remark"
                    value={this.state.Remark}
                    onChange={this.handlerChange}
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </Modal>
      </div>
    );
  }
}
