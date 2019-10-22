import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './button.js'

class Content extends React.Component{
  render(){
    return(
      <div>
        <Button labelB='Start' title='pippo'/><br/>
        <Button title='pluto'/><br/>
        <Button /><br/>
        <Button /><br/>
      </div>
    )
  };
}

ReactDOM.render(
  <Content/>,
  document.getElementById('content')
);
