import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Loggerc from './Logger.js' //segnare come importare una classe da un file externo

class Content extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      counter : 0,
      currentTime: (new Date()).toLocaleString()
    };
    this.startClock();
  }
  startClock(){
    setInterval(() =>  {
      this.setState({
        counter : ++this.state.counter,
        currentTime : (new Date()).toLocaleString()
      })
    }, 1000);
  }
  render (){
    if (this.state.counter>3)
        return <h1>Done</h1>;
    return <Loggerc time={this.state.currentTime}></Loggerc>
  }
}

ReactDOM.render(
  <Content/>,
  document.getElementById('content')
);
