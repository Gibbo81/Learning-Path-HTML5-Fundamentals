/*To create a React element, all you need to do is call React.createElement(element-
  Name, data, child) with three arguments that have the following meanings:
   elementName—HTML as a string (for example, 'h1') or a custom component
  class as an object (for example, HelloWorld; see section 2.2)
   data—Data in the form of attributes and properties (we’ll cover properties
  later); for example, null or {name: 'Azat'}
   child—Child element or inner HTML/text content; for example, Hello world!      */
var appo = React.createElement('h1', null, 'HelloWorld!!!!');
ReactDOM.render(appo, document.getElementById('content'));
