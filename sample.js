var serialport = require('serialport');
var sp = new serialport.SerialPort(portName, {
    baudRate: 115200,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false,
    parser: serialport.parsers.readline("\n")
});
sp.on('data', function(input) {
  var buffer = new Buffer(input, 'utf8');
  try {
    console.log("received:" + buffer);
  } catch(e) {
    console.log("error:"+e);
    return;
  }    
});


