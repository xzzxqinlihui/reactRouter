import React, { Component } from 'react';
import {Link,Route} from  "react-router-dom";
import ProductDetail from "./ProductDetail.js"

export default class Product extends Component {
  handlerPushClick = () => {
    this.props.history.push("/About")
  }
  handlerBackClick = () => {
    this.props.history.go(-1)
  }
  render() {
    const {match} = this.props;
    return (
      <div>
        Product!!!!!!
        {/* {this.props.location.state?
        <p>{this.props.location.state.loginName}</p>
          :
        <p>null</p>
        } */}

        <Link to={`${match.path}/1`}> 产品1</Link>|
        <Link to={`${match.path}/2`}> 产品2</Link>|
        <Link to={`${match.path}/3`}> 产品3</Link>|

        <hr/>

        <Route path={`${match.path}/:id`} component={ProductDetail}></Route>
        <hr/>

        <button
          onClick = {this.handlerPushClick}
        >按钮跳转到about</button>
        <button
          onClick = {this.handlerBackClick}
        >后退</button>
      </div>
    )
  }
}
