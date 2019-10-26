import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './button.js'
import Link from './Link.js'
import Logo from './Logo.js'

const LoadWebsite = (Plutus) => {
  class _LoadWebsite extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        label: 'Run',
        handleClick: this.handleClick.bind(this),
        log :'logo.png'
      }
    }
    getUrl() {
      return 'https://www.gazzetta.it/'
    }
    handleClick(event) {
      document.getElementById('frame').src = this.getUrl()
    }
    componentDidMount() {
      console.log(ReactDOM.findDOMNode(this))
    }
    render() {
      console.log(this.state) /*Render wrapped content*/
      return <Plutus {...this.state} {...this.props} />; {/*spread operator Both LoadWebsite state and props are passed as props to the wrapped object*/}
    }
  }
  _LoadWebsite.displayName = 'EhnancedComponent'; /*displayName is necessary to set React element names when they need to be different from the component class name,*/

  return _LoadWebsite
}

const EnhancedButton = LoadWebsite(Button)
const EnhancedLink = LoadWebsite(Link)
const EnhancedLogo = LoadWebsite(Logo)

class Content extends React.Component{
  render(){
    return(
      <div>
        <EnhancedButton />
        <br />
        <br />
        <EnhancedLink extra="___extra props texts"/>
        <br />
        <br />
        <EnhancedLogo />
        <br />
        <br />
        <iframe id="frame" src="" width="600" height="500"/>
      </div>
    )
  };
}

ReactDOM.render(
  <Content/>,
  document.getElementById('content')
);
