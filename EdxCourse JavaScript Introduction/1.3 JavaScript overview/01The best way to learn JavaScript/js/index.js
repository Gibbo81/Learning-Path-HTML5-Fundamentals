var parameters = {
  target: '#myFunction',
  data: [{
    fn: 'cos(x)', 
    color: 'red'},
         {
    fn: 'sin(x)', 
    color: 'green'},
         {
    fn: 'x^2', 
    color: 'black'}],
  grid: true,
  yAxis: {domain: [-2, 10]},
  xAxis: {domain: [-2, 2*Math.PI]}
};

functionPlot(parameters);
/*
Call a funzion of an external library. Parameter is an object (because it start eiwth {...})
The object is created as a dictionary couple name - value
target identify the element (id) on wich aplly this function
data is itself an object so start again with {...}
It's similar to Json idea
*/