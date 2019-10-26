import React from 'react';
import Linkp from './Linkp.js'

export default class Menu extends React.Component {
  render() {
    let menus = ['Home', 'About', 'Services', 'Portfolio', 'Contact us'];

    return (
      <div>
        {
          menus.map((v, i) => { return (
            <div key={i}>
              <Linkp label={v}>
                {v}
              </Linkp>
              <br/>
            </div>)
          })
        }
      </div>
    )
  }
}
