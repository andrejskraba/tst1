var BLESerialPort = require('ble-serial').SerialPort;
var firmata = require('firmata');

//create the mqtt serialport and specify the send and receive topics
var serialPort = new BLESerialPort({
  serviceId: '', //OPTIONAL
  transmitCharacteristic: '', //OPTIONAL
  receiveCharacteristic: '' //OPTIONAL
});

console.log(serialPort);

//use the virtual serial port to send a command to a firmata device
var board = new firmata.Board(serialPort, function (err, ok) {
  if (err){ throw err; }
  //light up a pin
  // board.digitalWrite(13, 1);
    console.log('x');
});