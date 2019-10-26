import React from 'react';

export default class Linkp extends React.Component {
  render() {
    return <a onClick={this.props.handleClick} href="#">{this.props.label + this.props.extra}</a>
  }
}
