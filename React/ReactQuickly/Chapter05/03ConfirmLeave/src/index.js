import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Leave extends React.Component   {
  confirmLeave(event){
    debugger;
    let confirmationMessage = 'Do you really want to close?'
    event.returnValue = confirmationMessage
    return confirmationMessage
  }
  componentDidMount(){
    console.log('Mounted leave instance');
    window.addEventListener('beforeunload', this.confirmLeave);
  }
  componentWillUnmount(){
    console.log('Will remove leave instance');
    window.removeEventListener('beforeunload', this.confirmLeave);
  }
  render(){
    console.log('Rendering');
    return <div>Here will be our input field for notes (parent will remove in {this.props.secondsLeft} seconds)</div>
  }
}

let secondsLeft =10;
let interval = setInterval(() => {
  if (secondsLeft === 0){
    ReactDOM.render(
      <div>Note was removed</div>,
      document.getElementById('content')
    );
    clearInterval(interval);
  }
  else {
    ReactDOM.render(
      <div>
        <Leave secondsLeft={secondsLeft} ></Leave>
      </div>,
      document.getElementById('content')
    );
    --secondsLeft;
  }
}, 1000);
