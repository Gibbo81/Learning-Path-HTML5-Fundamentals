import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//first way - all in one. We can divide it in two in the second part of the exercise
class ButtonSpecial extends React.Component{
  constructor(props){
    super(props);
    this.state={ counter:0  };
  };
  handleClick(event){
    this.setState({ counter: ++this.state.counter });
  };
  render(){
    return (
      <button onClick={e => this.handleClick(e)}>
        Don't click me {this.state.counter} timer
      </button>
    )
  }
}

////////////////////////// SECOND WAY  //////////////////////////

//stateless - presentation - dumb - REUSABLE

//class ClickCounterButton extends React.Component{
  //render(){
    //return (
      //<button onClick={this.props.handler}> {/*dependency injection the handler is passed by the father*/}
        //Increse volume
      //</button>
    //)
  //}
//}
//you can also write ClickCounterButton as a function instead of a class to simplify the syntax
const ClickCounterButton = (props) =>{
  return (
    <button onClick={props.handler}> {/*dependency injection the handler is passed by the father*/}
      Increse volume
    </button>
  )
};
/*
class Counter extends React.Component{
  render(){
    return (
      <div>
        current volum is: {this.props.counter}
      </div>
    );
  }
}*/

const Counter = (props) => {
  return (
    <div>
      current volum is: {props.counter}
    </div>
  );
};

//smart and stateful. more specific with the business logicof this app
class Content extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this) //usefull if instead of lambda i want to use link directly the method handler={this.handleClick}
    this.state={ counter:0  };
  }
  handleClick(event){
    this.setState({
      counter : ++this.state.counter
    });
  }
  render(){
    return(
      <div>
        <ButtonSpecial/><br/><br/>
        <ClickCounterButton handler={e => this.handleClick(e)} />
        <Counter counter={this.state.counter}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Content/>,
  document.getElementById('content')
);
