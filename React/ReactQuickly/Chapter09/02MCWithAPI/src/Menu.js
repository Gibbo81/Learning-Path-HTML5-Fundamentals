import React from 'react';
import Linkp from './Linkp.js'

export default class Menu extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      menus : []
    };
  }

  async componentDidMount(){
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Accept', 'application/json');
    var request = new Request('http://localhost:49823/weatherforecast', //('http://echo.jsontest.com/key/value/one/two',
      {
          method: 'GET',
          headers: myHeaders
      });
    try {
      debugger;
      let response = await fetch(request);
      if (!response.ok)
        throw response;
      var result = await response.json();
      this.setState({menus : result});
    }
    catch (e) {
      this.setState({menus : ['Home', 'Cat', 'dog', 'CAR']});
    }
    finally {

    }

  }

  render() {
    return (
      <div>
        {
          this.state.menus.map((v, i) => { return (
            <div key={i}>
              <Linkp label={v}/>
            </div>)
          })
        }
      </div>
    )
  }
}
