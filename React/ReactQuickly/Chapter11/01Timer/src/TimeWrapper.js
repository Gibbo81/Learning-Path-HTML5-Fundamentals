import React from 'react';
import ButtonT from './Button.js'
import ButtonStop from './ButtonStop.js'
import Timer from './Timer.js'

export default class TimeWrapper extends React.Component {
  constructor(props){
    super(props);
    this.state={
      time : 0,
      timer : null
    }
    this.resetTime = this.resetTime.bind(this);
    this.stop = this.stop.bind(this);
  };

  stop(){
    if (this.state.timer != null)
      clearInterval(this.state.timer)
    this.setState({time:null, timer:null});
  }

  resetTime(value){
    if (this.state.timer != null)
      clearInterval(this.state.timer)
    var t = setInterval(() =>{
      if (this.state.time > 0)
        this.setState({time : this.state.time - 1});
      else
        clearInterval(this.state.timer); //remove the timer when its work is done
    }, 1000);
    this.setState({time:value, timer:t});
  };

  render() {
    return (
    <div>
      <ButtonT handle={this.resetTime} value ={5}/>
      <ButtonT handle={this.resetTime} value ={10}/>
      <ButtonT handle={this.resetTime} value ={15}/>
      <br/>
      <Timer time={this.state.time}/>
      <br/>
      <ButtonStop handle = {this.stop}/>
    </div>)
  }
}
