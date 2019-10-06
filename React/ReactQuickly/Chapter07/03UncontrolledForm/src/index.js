import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//Uncontrolled elements with change capturing
class UnControlledInputWithChangeCapture extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      text : 'Eloquent TypeScript: Myth or Reality'
    };
    this.handleChangeAccount = this.handleChangeAccount.bind(this);
  }
  handleChangeAccount(event){
    this.setState({
      text : event.target.value
    })
  };
  render(){
    return(
      <div>
        <form>
          <input
            type='text'
            placeholder="Eloquent TypeScript: Myth or Reality"
            onChange={this.handleChangeAccount} />
        </form><br/>
        <span>{this.state.text}</span>
      </div>
    );
  }
}


ReactDOM.render(
  <div>
    <UnControlledInputWithChangeCapture/>
    -----------------------------------
  </div>,
  document.getElementById('content')
);
