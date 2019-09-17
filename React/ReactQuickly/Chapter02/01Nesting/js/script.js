/*
the second parameter to createElement() (for example, {id: 'ember'...}) is an object whose properties are
accessible via the this.props object inside the component’s render() method.
*/
class HelloWorld extends React.Component {  /*Custom Component*/
  render(){
    var appo = React.createElement('h1',
                                   this.props, /*it’s possible to pass all the properties of HelloWorld to its child*/ 
                                   'Hello' + this.props.frameworkName + 'World!!');
    return React.createElement('div', null, appo, appo); /*One div with two h1 (appo) inside*/
  }
}


ReactDOM.render(
  React.createElement('div',
                      null,
                      React.createElement(HelloWorld,{
                        id : 'ember', /*If a property’s name matches a standard HTML attribute, it will be rendered as an attribute*/
                        frameworkName : 'Ember.js',
                        title : 'A framework for creating ambitious web applications.'
                      }),
                      React.createElement(HelloWorld,{
                        id : 'backbone',
                        frameworkName : 'Backbone.js',
                        title : 'Backbone.js gives structure to web applications...'
                      }),
                      React.createElement(HelloWorld,{
                        id : 'angular',
                        frameworkName : 'Angular.js',
                        title : 'Superheroic JavaScript MVW Framework'
                      })
                    ),
  document.getElementById('content')
);
