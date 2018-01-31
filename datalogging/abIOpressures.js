var openFileType1 = function(event) {
  var input = event.target;

  var reader = new FileReader();
  reader.onload = function(){
    var text = reader.result;
    var node = document.getElementById('output');
    node.innerText = text;
    var parsed = parseData(text);

    // x axis
    var timeAxis = [];
    for(var i = 0; i < parsed.length; i++){
      timeAxis.push(2*(i+1))
    }
    
    //y axis data
    var AOut = parsed.map( x => x[0])
    var AIn = parsed.map( x => x[1])
    var BOut = parsed.map( x => x[2])
    var BIn = parsed.map( x => x[3])
    var IdleA = parsed.map( x => x[4])
    var IdleB = parsed.map( x => x[5])
    
    //traces
    var trace1 = {
      x: timeAxis,
      y: AOut,
      type: 'scatter',
      name: 'A Output'
    };

    var trace2 = {
      x: timeAxis,
      y: AIn,
      type: 'scatter',
      name: 'A Input'
    };

    var trace3 = {
      x: timeAxis,
      y: BOut,
      type: 'scatter',
      name: 'B Output'
    };

    var trace4 = {
      x: timeAxis,
      y: BIn,
      type: 'scatter',
      name: 'B Input'
    };

    var trace5 = {
      x: timeAxis,
      y: IdleA,
      type: 'scatter',
      name: 'Idle A Pressure'
    };

    var trace6 = {
      x: timeAxis,
      y: IdleB,
      type: 'scatter',
      name: 'Idle B Pressure'
    };

    var dataA = [trace1, trace2];
    var dataB = [trace3, trace4]
    var dataI = [trace5, trace6]

    var layoutA = {
      title: 'A-side I/O Pressures Chart',
      xaxis: {
        title: 'Time (ms)'
      },
      yaxis: {
        title: 'Pressure (psi)'
      },
      width: '100%',
      height: '80%'
    }
    
    var layoutB = {
      title: 'B-side I/O Pressures Chart',
      xaxis: {
        title: 'Time (ms)'
      },
      yaxis: {
        title: 'Pressure (psi)'
      },
      width: 1000,
      height: 800
    }

    var layoutI = {
      title: 'Idle Pressures Chart',
      xaxis: {
        title: 'Time (ms)'
      },
      yaxis: {
        title: 'Pressure (psi)'
      },
      width: 1000,
      height: 800
    }
    //plotting graphs
    Plotly.newPlot('aside', dataA, layoutA);
    Plotly.newPlot('bside', dataB, layoutB);
    Plotly.newPlot('idle', dataI, layoutI);
  };
  reader.readAsText(input.files[0]);
};


// var fileContents = 'abpressure.txt'.toURL().text;
var parseData = (data) => {
  var splitlines = data.split('\n');
  var parsed = splitlines.map(x => x.split(','))
  return parsed;
}