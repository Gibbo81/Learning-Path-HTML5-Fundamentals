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
  //with this command i take the data from the html and overwrite default parameter
  parameters.data[0].color=color;
  functionPlot(parameters);
}