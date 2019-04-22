import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NumActionCreator} from "../actions/NumAction.js";

//  把容器组件的状态映射到UI组件的props里面，state是redux里面的状态数据
function mapStateToProps(state) {
    return {
        WebSite:"qinlihui.cn",
        Num:state.Num
    };
}
//dispatch 是redux中的分发 action的api
function mapDispatchToProps(dispatch) {
    return {
        addNum(num){
            dispatch(NumActionCreator.AddActionCreator(num))
        },
        minusNum(num){
            dispatch(NumActionCreator.MinusActionCreator(num))
        }
    };
}
//  UI组件负责展示逻辑和事件绑定
class NewCount extends Component {
    render() {
        return (
            <div>
                <p>这是来自我们自己的状态中的属性WebSite：{this.props.WebSite}</p>
                <p>这是来自redux中的数据Num：{this.props.Num}</p>

                <button 
                    onClick={()=>this.props.addNum(1)}
                >+1</button>
                <button 
                    onClick={()=>{this.props.minusNum(1)}}
                >-1</button>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCount);