import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.css'; //Questo import funziona senza problemi!
import ToolTip from './ToolTip.js'
import Button from 'react-bootstrap/Button';

ReactDOM.render(
  <div>
    <Button>react-bootstrap/Button</Button>
    <br/>
    <br/>
    <button>normal button</button>
  </div>,
  document.getElementById('menu')
);
