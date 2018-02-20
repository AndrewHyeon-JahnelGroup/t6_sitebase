/* data values

  data from board bottom board on stand
  a pump out, apump in, bpump out, b pump in, idle pressure a, idle pressure b

  data from board on pumpstand
  A thermistor, B thermistor, A transducer, B transducer, Solvent transducer

*/


var openFileType1 = function(event) {
  var input = event.target;

  var reader = new FileReader();
  reader.onload = function(){
    var text = reader.result;
    var node = document.getElementById('output');
    var parsed = parseData(text);
    console.log(parsed)
    // x axis
    var timeAxis = [];
    for(var i = 0; i < parsed.length; i++){
      timeAxis.push(.01*(i+1))
    }

    //y axis data
    var AOut = parsed.map( x => x[0])
    var AIn = parsed.map( x => x[1])
    var BOut = parsed.map( x => x[2])
    var BIn = parsed.map( x => x[3])
    var IdleA = parsed.map( x => x[4])
    var IdleB = parsed.map( x => x[5])

    //traces
    // var trace1 = {
    //   x: timeAxis,
    //   y: AOut,
    //   type: 'scatter',
    //   name: 'A Output'
    // };
    //
    // var trace2 = {
    //   x: timeAxis,
    //   y: AIn,
    //   type: 'scatter',
    //   name: 'A Input'
    // };

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
    //
    // var trace5 = {
    //   x: timeAxis,
    //   y: IdleA,
    //   type: 'scatter',
    //   name: 'Idle A Pressure'
    // };

    var trace6 = {
      x: timeAxis,
      y: IdleB,
      type: 'scatter',
      name: 'Idle B Pressure'
    };

    // var dataA = [trace1, trace2];
    var dataB = [trace3, trace4, trace6]
    // var dataI = [trace5, trace6]

    // var layoutA = {
    //   title: 'A-side I/O Pressures Chart',
    //   xaxis: {
    //     title: 'Time (ms)'
    //   },
    //   yaxis: {
    //     title: 'Pressure (psi)'
    //   },
    //   width: '100%',
    //   height: '80%'
    // }

    var layoutB = {
      title: 'B-side I/O Metering Board Pressures Chart',
      xaxis: {
        title: 'Time (s)'
      },
      yaxis: {
        title: 'Pressure (psi)'
      },
      width: 1000,
      height: 800
    }
    //
    // var layoutI = {
    //   title: 'Idle Pressures Chart',
    //   xaxis: {
    //     title: 'Time (ms)'
    //   },
    //   yaxis: {
    //     title: 'Pressure (psi)'
    //   },
    //   width: 1000,
    //   height: 800
    // }
    //plotting graphs
    // Plotly.newPlot('aside', dataA, layoutA);
    Plotly.newPlot('bside', dataB, layoutB);
    // Plotly.newPlot('idle', dataI, layoutI);
  };
  reader.readAsText(input.files[0]);
};

var openFileType2 = function(event) {
  var input = event.target;

  var reader = new FileReader();
  reader.onload = function(){
    var text = reader.result;
    var node = document.getElementById('output');
    var parsed = parseData(text);
    console.log(parsed.length)
    // x axis
    var timeAxis = [];
    for(var i = 0; i < parsed.length; i++){
      timeAxis.push(.01*(i+1))
    }

    //y axis data
    var ATherm = parsed.map( x => x[0]*1.8+32)
    var BTherm = parsed.map( x => x[1]*1.8+32)
    var AXducer = parsed.map( x => x[2]/1000)
    var BXducer = parsed.map( x => x[3]/1000)
    var SolXducer = parsed.map( x => x[4]/1000)
    var SysState = parsed.map( x => x[5])


    //traces
    var trace1 = {
      x: timeAxis,
      y: ATherm,
      type: 'scatter',
      name: 'A Thermistor'
    };
    var trace2 = {
      x: timeAxis,
      y: BTherm,
      type: 'scatter',
      name: 'B Thermistor'
    };
    var trace3 = {
      x: timeAxis,
      y: AXducer,
      type: 'scatter',
      name: 'A Transducer'
    };
    var trace4 = {
      x: timeAxis,
      y: BXducer,
      type: 'scatter',
      name: 'B Transducer'
    };
    var trace5 = {
      x: timeAxis,
      y: SolXducer,
      type: 'scatter',
      name: 'Solvent Transducer'
    };

    var dataA = [trace1, trace2]
    var dataB = [trace3, trace4, trace5]

    var layoutA = {
      title: 'A/B thermistor temps',
      xaxis: {
        title: 'Time (s)'
      },
      yaxis: {
        title: 'Temperature (F)'
      },
      width: 1000,
      height: 800
    }

    var layoutB = {
      title: 'A/B xducer pressures',
      xaxis: {
        title: 'Time (s)'
      },
      yaxis: {
        title: 'Pressure (psi)'
      },
      width: 1000,
      height: 800
    }

    //plotting graphs

    Plotly.newPlot('therm', dataA, layoutA);
    Plotly.newPlot('xducer', dataB, layoutB);

  };
  reader.readAsText(input.files[0]);
};

var openFileType3 = function(event) {
  var input = event.target;

  var reader = new FileReader();
  reader.onload = function(){
    var text = reader.result;
    var node = document.getElementById('output');
    var parsed = parseData(text);
    console.log(parsed.length)
    // x axis
    var timeAxis = [];
    for(var i = 0; i < parsed.length; i++){
      timeAxis.push(.01*(i+1))
    }

    //y axis data
    var ATherm = parsed.map( x => x[0]*1.8+32)
    var BTherm = parsed.map( x => x[1]*1.8+32)
    var AXducer = parsed.map( x => x[2]/1000)
    var BXducer = parsed.map( x => x[3]/1000)
    var SolXducer = parsed.map( x => x[4]/1000)
    var SysState = parsed.map( x => x[5])


    //traces
    var trace1 = {
      x: timeAxis,
      y: ATherm,
      type: 'scatter',
      name: 'A Thermistor'
    };
    var trace2 = {
      x: timeAxis,
      y: BTherm,
      type: 'scatter',
      name: 'B Thermistor',
      yaxis: 'y2'
    };
    var trace3 = {
      x: timeAxis,
      y: AXducer,
      type: 'scatter',
      name: 'A Transducer'
    };
    var trace4 = {
      x: timeAxis,
      y: BXducer,
      type: 'scatter',
      name: 'B Transducer'
    };
    var trace5 = {
      x: timeAxis,
      y: SolXducer,
      type: 'scatter',
      name: 'Solvent Transducer'
    };

    var dataA = [trace1, trace2]
    var dataB = [trace4, trace2]

    var layoutA = {
      title: 'A/B thermistor temps',
      xaxis: {
        title: 'Time (s)'
      },
      yaxis: {
        title: 'Temperature (F)'
      },
      width: 1000,
      height: 800
    }

    var layoutB = {
      title: 'A/B xducer pressures',
      xaxis: {
        title: 'Time (s)'
      },
      yaxis: {
        title: 'Pressure (psi)'
      },
      yaxis2: {
        title: 'Temperature (F)',
        overlaying: 'y',
        side: 'right'
      },
      width: 1000,
      height: 800
    }

    //plotting graphs

    // Plotly.newPlot('therm', dataA, layoutA);
    Plotly.newPlot('xducer', dataB, layoutB);

  };
  reader.readAsText(input.files[0]);
};


// var fileContents = 'abpressure.txt'.toURL().text;
var parseData = (data) => {
  var output = [];
  var splitlines = data.split('\n');
  var parsed = splitlines.map(x => x.split(','))
  console.log(parsed)
  return parsed;
}

var parseData3 = (data) => {
  var splitlines = data.split('\n');
  var output = [];
  for(var i = 0; i < splitlines.length; i++) {
    if(splitlines[i].includes('B Inlet Pressure')){
      output.push(splitlines[i])
    }
  }

  var parsed = output.map(x => x.slice(19, -16))
  parsed = parsed.map(x => parseInt(x))
  console.log(parsed)
  return parsed;
}
