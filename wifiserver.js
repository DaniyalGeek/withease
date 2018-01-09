var express		=require('express');
var WiFiControl = require('wifi-control');
var gpio = require('rpi-gpio');
var cmd=require('node-cmd');


app			=express();
  WiFiControl.init({
    debug: true
  });
 							
 
var bodyParser	=require('body-parser');
//App Configurations
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Routing
//require('./router.js');

var ifaceState = WiFiControl.getIfaceState();
console.log(ifaceState.ssid);
var ssid = ifaceState.ssid;
if(ssid == null){

cmd.run('sudo ifdown wlan0');
setTimeout(function(){cmd.run('sudo ifup wlan0')}, 5000);
}

gpio.on('change', function(channel, value) {
    console.log('Channel ' + channel + ' value is now ' + value);
        console.log("rebooting");
            cmd.run('nmcli connection delete id '+ssid);
                setTimeout(function(){cmd.run('sudo reboot')}, 5000);

});
gpio.setup(7, gpio.DIR_IN, gpio.EDGE_BOTH);

 //   cmd.run('touch example.created.file');

 var ap = {
    ssid: "",
    password: ""
  };


app.post('/setwifi', function(req,res){
	ap.ssid = req.body.ssid;
	ap.password = req.body.password;
	var results = WiFiControl.connectToAP( ap, function(err, response) {
    if (err) console.log(err);
    console.log(response);
  });
 
	res.json(ap);
});
app.get('/getwifi', function(req,res){
	var array = {};
	 WiFiControl.scanForWiFi( function(err, response) {
    if (err) console.log(err);
    for (var i = 0; i < response.networks.length; i++) {
    	console.log(response.networks[i].ssid);
      var name = "wifi_"+i;
    	array[name] =response.networks[i].ssid;
    	
    }
    res.json(array);
  });
});

app.listen('3000');





   
  

