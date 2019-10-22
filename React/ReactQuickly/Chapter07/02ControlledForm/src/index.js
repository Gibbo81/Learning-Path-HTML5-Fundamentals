import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ControlledInput extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      accountNumber : '456'
    };
    this.handleChangeAccount = this.handleChangeAccount.bind(this);
  }
  handleChangeAccount(event){
    console.log('Typed: ', event.target.value)
    var result = event.target.value.replace(/\D/g,'');
    this.setState({
      accountNumber : result
    })
  };
  render(){
    return(
      <form>
        <input type='text' value={this.state.accountNumber} onChange={this.handleChangeAccount} />
      </form>
    );
  }
}


ReactDOM.render(
  <div>
    <ControlledInput/>
  </div>,
  document.getElementById('content')
);
