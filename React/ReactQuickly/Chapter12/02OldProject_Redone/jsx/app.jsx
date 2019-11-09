require('../css/main.css')

const React = require('react')
const ReactDOM = require ('react-dom')
const ToolTip = require('./ToolTip.jsx')


ReactDOM.render(
  <div>
    <ToolTip text="The book you're reading now" over={false} click={true} top ={false}> React Quickly </ToolTip>
    was published in 2017. It's awesome! <br/>

    <ToolTip text="The book you're reading now" over={true} click={false} top ={true }> Only hower is active </ToolTip>
  </div>,
  document.getElementById('cont')
)
