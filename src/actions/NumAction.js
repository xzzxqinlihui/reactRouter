//  action 对数据做的 任何 修改的类型
export const NumActionTypes = {
    ADD_NUM: 'ADD_NUM',
    MINUS_NUM: 'MINUS_NUM',
    REPLACE_NUM: 'REPLACE_NUM'
  };
  //  创建一个action对象的辅助方法
  //  action  一个属性type，是字符串一般要求大写，区分不同的动作
              //  paylaod  是当前动作的数据
  export const NumActionCreator = {
    AddActionCreator(payload) {
      return {
        type: NumActionTypes.ADD_NUM,
        payload
      };
    },
    MinusActionCreator(payload){
      return {
          type: NumActionTypes.MINUS_NUM,
          payload
        };
    },
    ReplaceActionCreator(payload){
      return {
          type: NumActionTypes.REPLACE_NUM,
          payload
        };
    },
  };