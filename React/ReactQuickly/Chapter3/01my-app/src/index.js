import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class ProfileLink extends React.Component{
  getUrl(b) {
    return (b) ? 'http://webapplog.com' : 'https://github.com/'
  }
  render(){
    return (
      <div>
        {/* Just like a JS comment */}
        <a href = {this.props.url}
          title = {this.props.label}
          target = "_blank"
        >
          Profile
        </a>
        <a href ={this.getUrl(this.props.b)}> {this.getUrl(this.props.b)}</a>
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
        <ProfileLink url='https://www.gazzetta.it/' label='Profile for Azat' b='true'/>
      </div>

    )
  }
}

let hw = <HelloWorld/>;
ReactDOM.render(
  hw,
  document.getElementById('content')
);
