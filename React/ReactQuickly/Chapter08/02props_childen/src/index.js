import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Content extends React.Component{
  render(){
    return(
      <div>
        {this.props.children}
      </div>
    )
  };
}

ReactDOM.render(
  <div>
    <Content>
      <h1>React</h1>
      <p>Rocks</p>
    </Content>
    <Content>
      <img src="./images/Bradipo.jpg" alt='pippo' width="100"/>
    </Content>
    <Content>
      <a href="http://react.rocks">http://react.rocks</a>
    </Content>
  </div>,
  document.getElementById('content')
);
