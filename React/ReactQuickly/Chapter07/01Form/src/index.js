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
  };
}
class InputExample extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email : '@',
      radioGroup : {
        mele : false,
        pere : true,
        arancie : false
      },
      checkGroup : {
        left : false,
        right : true,
        forward : false,
        backward : true,
      },
      text:"default .... value",
      selectV : 'pyton',
      selectMulti : ['lunch', 'dinner']
    };
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this);
    this.handleSendData = this.handleSendData.bind(this);
  };
  handleChange(event){
    this.setState(
      {
        email : event.target.value
      })
  };
  handleTextareaChange(event){
    this.setState(
      {
        text : event.target.value
      })
  };
  handleRadioChange(event){//single value true value
    let obj ={};
    obj[event.target.value]= event.target.checked;  //this is the only true value
    this.setState({radioGroup : obj})
  };
  handleCheckboxChange(event){//multiple possible true values
    let obj = Object.assign(this.state.checkGroup)  //Cloning the object to avoid a direct status change (always bad)
    obj[event.target.value]= event.target.checked;
    this.setState({radioGroup : obj})
  };
  handleSelectChange(event){//multiple possible true values
    this.setState({selectV : event.target.value})
  };
  handleMultiSelectChange(event){//multiple possible true values
    debugger;
    let obj =this.state.selectMulti.slice(); //array clone equivalent to Array.from(originArray)
    if (obj.includes(event.target.value)){
      var index = obj.indexOf(event.target.value);
      obj.splice(index, 1);
    }
    else {
      obj.push(event.target.value)
    }
    this.setState({selectMulti : obj})
  };
  handleSendData(event){
    debugger;
    fetch(this.props.link, {
      method:'POST',
      body : JSON.stringify(this.state)
    }).then((r)=> {return r.json()})
    .then((b) => {console.log('Submitted: ', b)})
  };
  render(){
    return (
      <form onSubmit={this.handleSendData}>
        <input type='radio'
          name='radiogroup'
          value= 'mele'
          checked={this.state.radioGroup.mele}
          onChange={this.handleRadioChange}/> mele
        <input type='radio'
          name='radiogroup'
          value= 'pere'
          checked={this.state.radioGroup.pere}
          onChange={this.handleRadioChange}/> pere
        <input type='radio'
          name='radiogroup'
          value= 'arancie'
          checked={this.state.radioGroup.arancie}
          onChange={this.handleRadioChange}/> arancie <br/>
        <input type='checkbox'
          name ='checkboxgroup'
          value ='forward'
          checked = {this.state.checkGroup.forward}
          onChange = {this.handleCheckboxChange}/>forward
        <input type='checkbox'
          name ='checkboxgroup'
          value ='right'
          checked = {this.state.checkGroup.right}
          onChange = {this.handleCheckboxChange}/>right
        <input type='checkbox'
          name ='checkboxgroup'
          value ='backward'
          checked = {this.state.checkGroup.backward}
          onChange = {this.handleCheckboxChange}/>backward
        <input type='checkbox'
          name ='checkboxgroup'
          value ='left'
          checked = {this.state.checkGroup.left}
          onChange = {this.handleCheckboxChange}/>left<br/>
        <textarea name='description' value={this.state.text} onChange={this.handleTextareaChange}></textarea><br/>
        <input type='text' name='mail' value={this.state.email} onChange ={(e) => this.handleChange(e)}></input><br/>
        <select value = {this.state.selectV} onChange = {this.handleSelectChange}>
          <option value='ruby'> ruby</option>
          <option value='python'> python</option>
          <option value='c#'> c#</option>
        </select><br/>
        <select
          multiple= {true}
          value = {this.state.selectMulti}
          onChange = {this.handleMultiSelectChange}>
          <option value='breakfast'> breakfast</option>
          <option value='lunch'> lunch</option>
          <option value='dinner'> dinner</option>
        </select><br/>
        <input type='button' value='send' onClick={this.handleSendData}></input>
      </form>

    );
  };
}


ReactDOM.render(
  <div>
    <FormSpecial/><br/>
    ----------------------------------------------------------------------------<br/>
    <InputExample link="http://webapplog.com" />
  </div>,
  document.getElementById('content')
);
