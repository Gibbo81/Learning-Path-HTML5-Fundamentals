import React from 'react';
import ReactDOM from 'react-dom';

export default class ToolTip extends React.Component {
  constructor (props){
    super(props);
    this.state = {opacity:false};
    this.toggle = this.toggle.bind(this);
  }

  toggle(){
    const tooltipNode = ReactDOM.findDOMNode(this); //read the current node!!!!!
    this.setState(
      {
        opacity : !this.state.opacity,
        top: tooltipNode.offsetTop,
        left: tooltipNode.offsetLeft
      })
  }

  render(){
    var top = this.props.top ? -32 : 20;
    var classes = this.props.top ? "tooltip top" : "tooltip bottom";
    const style = {
      zIndex: (this.state.opacity) ? 1000 : -1000,
      opacity: +this.state.opacity,
      top: (this.state.top || 0) + top,
      left: (this.state.left || 0) - 30
    }; {/*This is the style that will be used inside the tooltip*/}
    return (
       <div style={{display: 'inline'}}>
         <span style={{color: 'blue'}}
           onMouseEnter={this.props.over ? this.toggle : ()=>{}}
           onMouseOut={this.props.over ? this.toggle : ()=>{}}
           onClick={this.props.click ? this.toggle : ()=>{}}>
           {this.props.children}
         </span>
         <div className={classes}
           style={style}
           role="tooltip"
         >
           <div className="tooltip-arrow"></div>
           <div className="tooltip-inner">
             {this.props.text}
           </div>
         </div>
       </div>
     );
  }
}
