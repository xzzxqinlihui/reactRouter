import axios from 'axios';


export const UserListActionTypes = {
  LOAD_USERLIST: 'LOAD_USERLIST',
  ADD_USER: 'ADD_USER',
  REMOVE_USER: 'REMOVE_USER',
  UPDATE_USER: 'UPDATE_USER'
};

export const UserListActionCreators = {
  //  直接把后台获取的用户的数据直接替换当前state中UserList
  LoadUserListActionCreator(payload) {
    return {
      type: UserListActionTypes.LOAD_USERLIST,
      payload
    };
  },
  LoadUserListAsyncActionCreator(){
    return (dispatch,getState)=>{
        axios.get("http://localhost:3009/userlist")
        .then(res=>{
          dispatch(this.LoadUserListActionCreator(res.data))
        });
    }
  },
  AddUserActionCreator(payload) {
    return {
      type: UserListActionTypes.ADD_USER,
      payload
    };
  },
  AddUserAsyncActionCreator(payload){
    return (dispatch,getState)=>{
      //  修改后台数据
      return axios.post("http://localhost:3009/userlist",payload)
        .then(res=>{
          dispatch(this.AddUserActionCreator(res.data))
        })
      }
  },

  RemoveUserActionCreator(payload) {
    return {
      type: UserListActionTypes.REMOVE_USER,
      payload
    };
  },
  RemoveUserAsyncActionCreator(payload) {
    return function(dispatch, getState) {
      //json-server -p 3009 -i Id .\db.json  用来启动json-server服务器 进行测试
      return axios
        .delete('http://localhost:3009/userlist/' + payload)
        .then(() => {
          dispatch(UserListActionCreators.RemoveUserActionCreator(payload));
        });
    };
  },
  UpdateUserActionCreator(payload){
    return {
      type:UserListActionTypes.UPDATE_USER,
      payload
    }
  },
  UpdateUserAsyncActionCreator(payload){
    return (dispatch,getstate)=>{
      //  这是 修改后台数据的命令
      return axios.put("http://localhost:3009/userlist/"+ payload.Id,payload)
      .then(res=>{
        //  这是  修改redux中的数据
        // dispatch(this.UpdateUserActionCreator(payload))
        dispatch(this.UpdateUserActionCreator(res.data))
      })
      .catch(()=>{

      })
    }
  }
};
