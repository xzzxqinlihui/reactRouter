import React, { Component } from 'react'

export default class ProductDetail extends Component {
  render() {
      console.log(this.props.match)
    return (
      <div>
        ProductDetail!!!
       产品详情： {this.props.match.params.id}
      </div>
    )
  }
}
