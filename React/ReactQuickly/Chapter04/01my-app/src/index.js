import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function HelloWorld(props){   //Stateless components can e view as simple function instead of object
    return (
      <h1 {...props}>
        Hello {props.name} world!!
      </h1>)
}

function DigitalDisplay(props){
  return <div>{props.currentTime}</div>
}

function AnalogDisplay(props) {
  let date = new Date(props.time);
  let dialStyle = {
    position: 'relative',
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    borderRadius: 20000,
    borderStyle: 'solid',
    borderColor: 'black'
  };
  let secondHandStyle = {
    position: 'relative',
    top: 100,
    left: 100,
    border: '1px solid red',
    width: '40%',
    height: 1,
    transform: 'rotate(' + (date.getSeconds() / 60 * 360 - 90).toString() + 'deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'red'
  };
  let minuteHandStyle = {
    position: 'relative',
    top: 100,
    left: 100,
    border: '1px solid grey',
    width: '40%',
    height: 3,
    transform: 'rotate(' + (date.getMinutes() / 60 * 360 - 90).toString() + 'deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'grey'
  };
  let hourHandStyle = {
    position: 'relative',
    top: 92,
    left: 106,
    border: '1px solid grey',
    width: '20%',
    height: 7,
    transform: 'rotate(' + (date.getHours() / 12 * 360 - 90).toString() + 'deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'grey'
  };
  return (
    <div>
      <div style={dialStyle}>
        <div style={secondHandStyle}/>
        <div style={minuteHandStyle}/>
        <div style={hourHandStyle}/>
      </div>
    </div>
  );
};

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentTime : (new Date()).toString()
    };
    this.launchClock();
  }

  launchClock(){
    /* Different way without arrowfunction but using pippo instead
    var p =(this.pippo).bind(this); //As show in page 78 if we do not bind the functionto the object this take a different value
    setInterval(p,1000);*/
    setInterval(() => {  //Timer that run each 1000 milliseconds
      console.log('Update Time');
      this.setState({         //React merges the data with current states and calls render(). After that, React calls callback
        currentTime :(new Date()).toString()
      })
    }, 1000);
  };

  render(){
    console.log('Rendering Clock...')
    return (
      <div>
        <AnalogDisplay time={this.state.currentTime}/>
        <DigitalDisplay currentTime={this.state.currentTime}/>
        <HelloWorld name=':-)'/>
      </div>
      )
  }


  pippo(){
    console.log('Update Time');
    this.setState({
      currentTime :(new Date()).toLocaleString()
    })
  };
}

ReactDOM.render(
  <Clock/>,
  document.getElementById('content')
);
