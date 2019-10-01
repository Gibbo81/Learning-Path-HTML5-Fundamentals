import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class But extends React.Component{
  handleSave(event){          //event is a SyntheticEvent to access the original event use event.nativeEvent
    console.log(this, event);
    console.log(event.nativeEvent)
    console.log('event.currentTarget:' + event.currentTarget)
    console.log('event.target:' +event.target)
    console.log('isPropagationStopped:' + event.isPropagationStopped());
    event.stopPropagation();
    console.log('isPropagationStopped:' + event.isPropagationStopped());
  }
  render(){

    return(
      <div>
        <button onClick={this.handleSave.bind(this)}>button</button>
        <button onClick={e => this.handleSave(e)}>ButtonLambda</button>
        <div
          onClick={e => console.log("click DIV")}
          style={{border: '1px solid blue'}}
          onMouseOver={e => console.log("OveR")}    //e is a SyntheticEvent pag: 120
          onMouseMoveCapture={e => console.log("OveR Capture")}>maouse over</div>
      </div>
    )
  /*  return(    <div>  //book example
      <div
        style={{border: '1px solid blue'}}
        onMouseOverCapture={((event)=>{
          console.log('mouse over on capture event')
          console.dir(event, this)}).bind(this)}
        onMouseOver={((event)=>{
          console.log('mouse over on bubbling event')
          console.dir(event, this)}).bind(this)} >
        Open DevTools and move your mouse cursor over here
      </div>
    </div>)*/

  }
}

ReactDOM.render(
  <But/>,
  document.getElementById('content')
);
