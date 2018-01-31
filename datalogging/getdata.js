var SerialPort = require('serialport');
var port = new SerialPort('COM3', {
  baudRate: 151200
}, function (err) {
  if (err) {
    return console.log('Error: ', err.message);
  }
});

port.open(function (err) {
  if (err) {
    return console.log('Error opening port: ', err.message);
  }
 
  // Because there's no callback to write, write errors will be emitted on the port:
  port.write('main screen turn on');
});

port.on('open', function() {
  // open logic
  console.log('connected')
});

port.on('data', function (data) {
  var output = '';
  for(var i = 0; i < data.length; i++){
    output += String.fromCharCode(data[i]);
  }
  if(output.length === data.length){
    console.log(output)
  }
});