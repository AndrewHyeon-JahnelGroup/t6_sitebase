var Plotly = require('plotly') 

(function() { 
var d3 = Plotly.d3;

var WIDTH_IN_PERCENT_OF_PARENT = 100,
    HEIGHT_IN_PERCENT_OF_PARENT = 80;

var gd3 = d3.select('body')
    .append('div')
    .style({
        width: WIDTH_IN_PERCENT_OF_PARENT + '%',
        'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',

        height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh',
        'margin-top': (100 - HEIGHT_IN_PERCENT_OF_PARENT) / 2 + 'vh'
    });

var gd = gd3.node();
var trace1 = {
  x: [0, 1, 2, 3, 4, 5], 
  y: [1.5, 1, 1.3, 0.7, 0.8, 0.9], 
  type: 'scatter'
};

var trace2 = {
  x: [0, 1, 2, 3, 4, 5], 
  y: [1, 0.5, 0.7, -1.2, 0.3, 0.4], 
  type: 'bar'
};

var layout = {
    title: 'Plotly.js Basic Example',
    font: {
        size: 16
  }
}

var data = [trace1, trace2];
Plotly.plot(gd, data, layout);

window.onresize = function() {
    Plotly.Plots.resize(gd);
};

})();