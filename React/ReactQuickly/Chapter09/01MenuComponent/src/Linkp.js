import React from 'react';

export default class Linkp extends React.Component {
  render() {
    const url='/'+ this.props.label.toLowerCase().trim().replace(' ', '-');
    return (
    <div>
      <a href={url}>
        {this.props.label + this.props.extra}
      </a>
      <br/>
    </div>)
  }
}
