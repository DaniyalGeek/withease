
var express = require('express');
var app = express()
var bodyParser = require('body-parser');
var gpio = require('rpi-gpio');
var io = require('socket.io-client');
var socket= io.connect('https://withease-withease.c9users.io',{reconnect:true,f$
var led = new Gpio(22, {mode: Gpio.OUTPUT}),
  dutyCycle = 0;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var port = 8081;

var router = express.Router();

socket.on('connect',function(socket1){
        console.log('connectes');

socket.emit("add-pi",{"piId":"pi002"});
});
gpio.on('export',function(channel){
        console.log(channel);
});
socket.on('add-message',function(msg){
        var pin = parseInt(msg.pin);
        var state = msg.state;
        console.log("state",state);
        if (pin == 1)
        {
                pin = 7
        }
        if(pin == 2)
        {
                pin = 10
        }
        if (pin == 3)
        {
                pin = 11
        }
        if (pin == 4)
        {
             pin = 12
        }
        if (pin == 5)
        {
                pin = 13
        }
        if(pin == 6)
        {
                pin = 14
        }
         if (parseInt(msg.pin) == 7)
        {
          led.pwmWrite(parseInt(msg.state));

         }
       if(state === 'on'){
                console.log(pin)
                gpio.setup(pin,gpio.DIR_OUT,function () {
                        gpio.write(pin,true,function(err){
                                if(err) throw err;
                                console.log("i am on with pin " + pin);
                        });
                });

        }
        else if(state === 'off'){
                gpio.setup(pin,gpio.DIR_OUT,write);

                function write(){
                        gpio.write(pin,false,function(err){
                                if(err) throw err;
                                console.log("i am off with pin " + pin);
                        });
                }
        }
});



app.listen(port);
console.log('Magic happens on port'+port);
