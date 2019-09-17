import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Simple extends React.Component {
  render (){
    return <h1>Done</h1>
  }

  UNSAFE_componentWillMount(){
    console.log(ReactDOM.findDOMNode(this))
  }
  componentDidMount(){
    console.log('Mounted');
    console.dir(ReactDOM.findDOMNode(this))
  }
}

class Simple2 extends React.Component {
  render (){
    return <h1>Done2</h1>
  }
  componentDidMount(){
    console.log('Mounted__22');
  }
}

ReactDOM.render(
  <Simple/>,
  document.getElementById('content')
);
