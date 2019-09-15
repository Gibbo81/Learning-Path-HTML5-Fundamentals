import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentTime : (new Date()).toLocaleString()
    };
    this.launchClock();
  }

  pippo(){
    console.log('Update Time');
    this.setState({
      currentTime :(new Date()).toLocaleString()
    })
  };

  launchClock(){
    /* Different way without arrowfunction but using pippo instead
    var p =(this.pippo).bind(this); //As show in page 78 if we do not bind the functionto the object this take a different value
    setInterval(p,1000);*/
    setInterval(() => {  //Timer that run each 1000 milliseconds
      console.log('Update Time');
      this.setState({         //React merges the data with current states and calls render(). After that, React calls callback
        currentTime :(new Date()).toLocaleString()
      })
    }, 1000);
  };

  render(){
    console.log('Rendering Clock...')
    return <div>{this.state.currentTime}</div>
  }
}

ReactDOM.render(
  <Clock/>,
  document.getElementById('content')
);
