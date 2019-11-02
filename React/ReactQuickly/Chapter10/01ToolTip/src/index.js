import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.css'; //Questo import funziona senza problemi!
import ToolTip from './ToolTip.js'


ReactDOM.render(
  <div>
    <ToolTip text="The book you're reading now" over={false} click={true} top ={false}> React Quickly </ToolTip>
    was published in 2017. It's awesome! <br/>

    <ToolTip text="The book you're reading now" over={true} click={false} top ={true }> Only hower is active </ToolTip>
  </div>,
  document.getElementById('menu')
);
