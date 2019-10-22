import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component{
  render(){
    return <button className="btn">{this.props.labelB}</button>
  };
}
Button.defaultProps = {labelB: 'submit'}

Button.propTypes =
{
  title: PropTypes.string.isRequired,
  datet : PropTypes.any.isRequired
} //title is a string and is required!
