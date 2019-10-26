import React from 'react';

export default class Logo extends React.Component {
  render() {
    return <img onClick={this.props.handleClick} width="40" src={this.props.log} href="#"/>
  }
}
