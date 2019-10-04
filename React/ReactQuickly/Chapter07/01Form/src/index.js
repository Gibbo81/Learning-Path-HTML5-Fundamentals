import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class FormSpecial extends React.Component{
  constructor(props){
    super(props);
    this.state={ title: "Mr."  };
  };
  handleChange(event){
    this.setState({ title: event.target.value });
  };
  render(){
    return (
      <input type='text' name="title" value={this.state.title} onChange={this.handleChange.bind(this)}></input>
    )
  }
}

ReactDOM.render(
  <FormSpecial/>,
  document.getElementById('content')
);
