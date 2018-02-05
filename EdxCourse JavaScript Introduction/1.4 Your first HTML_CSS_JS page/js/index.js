var parameters = {
  target: '#myfunction',
  data: [{
    fn: 'sin(x)', 
    color: 'red'}],
  grid: true,
  yAxis: {domain: [-1, 1]},
  xAxis: {domain: [-2, 2*Math.PI]}
};

function plot(){
  var color = document.querySelector("#color").value;
  var fun = document.querySelector("#function").value;
  //with this command i take the data from the html and overwrite default parameter
  parameters.data[0].color=color;
  parameters.data[0].fn=fun;

  var xmin = document.querySelector("#xMin").value; 
  var xMax = document.querySelector("#xMax").value; 
  parameters.xAxis.domain = [xmin, xMax];

  var ymin = document.querySelector("#yMin").value; 
  var yMax = document.querySelector("#yMax").value; 
  parameters.yAxis.domain = [ymin, yMax];
  


  functionPlot(parameters);
}