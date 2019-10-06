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

class TotallyUncontrolledInput extends React.Component{
  handleComment(event){
    let fD = ReactDOM.findDOMNode;  //function used to read a node
    console.log('Mail:', fD(this.refs.mail).value);
    console.log('Comment:',fD(this.refs.comments).value);
    //Old way always valid :-)
    var m = document.querySelector('#mailId');
    var c = document.querySelector('#commentsId');
    console.log('OLD STYLE Mail:', m.value);
    console.log('OLD STYLE Comment:', c.value);
  }

  render(){
    return(
      <div>
        <input
          type='text'
          ref='mail'  //necessary to read a node using ReactDOM.findDOMNode
          id ='mailId'
          placeholder="hi@azat.co"
        />
        {/*A placeholder property is a visual aid to show an example of what to enter*/}
        {/*Different from default value because doesn't set the value of the input tag*/}
        <input
          type='text'
          ref='comments'
          id ='commentsId'
        /><br/>
        <input type='button' onClick={this.handleComment.bind(this)} value='save'/>
        <br/>
        <input type='text' value='Read only :-('/>
        <input type='text' defaultValue='With default value no-Read only :-)'/>{/*whith defaultValue sets the value and lets users modify form elements.*/}
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <UnControlledInputWithChangeCapture/>
    -----------------------------------
    <TotallyUncontrolledInput/>
  </div>,
  document.getElementById('content')
);
