import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class ProfileLink extends React.Component{
  getUrl(b) {
    return (b) ? 'http://webapplog.com' : 'https://github.com/'
  }
  render(){
    let bigFontSize = {fontSize: '20pt'}  //It's a javascript object
    return (
      <div>
        {/* Just like a JS comment */}
        <a href = {this.props.url}
          title = {this.props.label}
          target = "_blank"
          className = 'pippo'
        >
          {/*React and JSX accept any attribute that’s a standard HTML attribute, except class and for. Use className and htmlFor instead.*/}
          Profile
        </a>
        <a href ={this.getUrl(this.props.b)}> {(this.props.b) ? 'http://webapplog.com' : 'https://github.com/'}</a> {/*Two different ways to make choice inside JSX*/}
        <br/>
        <span
          style={{borderColor: 'red', borderWidth: 1, borderStyle: 'solid'}}>
          {[<span>&copy;&mdash;&ldquo;</span>]}</span>
        <br/>
        <span style={bigFontSize}>{<span>&copy;&mdash;&ldquo;</span>}</span> {/* equivalent to style={{fontSize: '30pt'}}*/}
      </div>
    );
  }
}

let helloWorldReactElement = <h1>Hello world!</h1>
class HelloWorld extends React.Component {
  render(){
    let now = new Date().toLocaleString();
    return (
      <div>
        <h1>1. Hello world {now} </h1>
        {helloWorldReactElement}
        <ProfileLink url='https://www.gazzetta.it/' label=' Profile for Azat' b={true}/> {/*boolean attribute value must be set in the JavaScript expression for example, use {false} */}
        <ProfileLink url='https://github.com/' label=' Profile for Azat' b={false}/>
      </div>

    )
  }
}

let hw = <HelloWorld/>;
ReactDOM.render(
  hw,
  document.getElementById('content')
);
