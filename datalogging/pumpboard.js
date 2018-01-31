var openFileType2 = function(event) {
        var input = event.target;

        var reader = new FileReader();
        reader.onload = function(){
          var text = reader.result;
          var node = document.getElementById('output');
          node.innerText = text;
          var parsed = parseData(text);

          var timeAxis = [];
          var ATherm = parsed.map( x => x[0]);
          var BTherm = parsed.map( x => x[1]);
          var AX = parsed.map( x => x[2]);
          var BX = parsed.map( x => x[3]);
          var SX = parsed.map( x => x[4]);
          
          for(var i = 0; i < parsed.length; i++){
            timeAxis.push(2*(i+1))
          }

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
            y: AX,
            type: 'scatter',
            name: 'A Xducer'
          };

          var trace4 = {
            x: timeAxis,
            y: BX,
            type: 'scatter',
            name: 'B Xducer'
          };

          var trace5 = {
            x: timeAxis,
            y: SX,
            type: 'scatter',
            name: 'Solvent Xducer'
          };

          var dataA = [trace1, trace2];
          var dataB = [trace3, trace4]
          var dataI = [trace5]

          var layoutA = {
            title: 'A/B Thermistor Pressures',
            xaxis: {
              title: 'Time (ms)'
            },
            yaxis: {
              title: 'Pressure (psi)'
            },
            width: 1000,
            height: 800
          }
          
          var layoutB = {
            title: 'A/B Xducer Pressures Chart',
            xaxis: {
              title: 'Time (ms)'
            },
            yaxis: {
              title: 'Pressure (psi)'
            },
            width: 1000,
            height: 800
          }

          var layoutC = {
            title: 'Solvent Xducer Pressure Chart',
            xaxis: {
              title: 'Time (ms)'
            },
            yaxis: {
              title: 'Pressure (psi)'
            },
            width: 1000,
            height: 800
          }
          
          Plotly.newPlot('aside', dataA, layoutA);
          Plotly.newPlot('bside', dataB, layoutB);
          Plotly.newPlot('idle', dataI, layoutI);
        };
        reader.readAsText(input.files[0]);
      };

//split text file into array
var parseData = (data) => {
  var splitlines = data.split('\n');
  var parsed = splitlines.map(x => x.split(','))
  return parsed;
}