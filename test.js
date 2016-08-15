var app = require('express')();
var request = require('request');


var interval = 0.5 * 1000; // 1/25 seconds;
var j=0
for (var i = 0; i <=1000; i++) {
    setTimeout( function (i) {
        var url = 'https://pi-server-awddevs.c9users.io/a/on/'+i;
        request(url, function(error, resp, body) { 
            if (error) console.log(error); 
          console.log(body);
            //Some calculation callback();
        });
    }, interval * i, i);

   j++;

}
for (var i = 0; i <=1000; i++) {
    setTimeout( function (i) {
        var url = 'https://pi-server-awddevs.c9users.io/b/on/'+i;
        request(url, function(error, resp, body) { 
            if (error) console.log(error); 
          console.log(body);
            //Some calculation callback();
        });
    }, interval * i, i);
j++;


}

for (var i = 0; i <=1000; i++) {
    setTimeout( function (i) {
        var url = 'https://pi-server-awddevs.c9users.io/c/on/'+i;
        request(url, function(error, resp, body) { 
            if (error) console.log(error); 
          console.log(body);
            //Some calculation callback();
        });
    }, interval * i, i);

j++

}
for (var i = 0; i <=1000; i++) {
    setTimeout( function (i) {
        var url = 'https://pi-server-awddevs.c9users.io/d/on/'+i;
        request(url, function(error, resp, body) { 
            if (error) console.log(error); 
          console.log(body);
            //Some calculation callback();
        });
    }, interval * i, i);
j++


}
for (var i = 0; i <=1000; i++) {
    setTimeout( function (i) {
        var url = 'https://pi-server-awddevs.c9users.io/e/on/'+i;
        request(url, function(error, resp, body) { 
            if (error) console.log(error); 
          console.log(body);
            //Some calculation callback();
        });
    }, interval * i, i);

j++

}
for (var i = 0; i <=1000; i++) {
    setTimeout( function (i) {
        var url = 'https://pi-server-awddevs.c9users.io/f/on/'+i;
        request(url, function(error, resp, body) { 
            if (error) console.log(error); 
          console.log(body);
            //Some calculation callback();
        });
    }, interval * i, i);

j++

}
for (var i = 0; i <=1000; i++) {
    setTimeout( function (i) {
        var url = 'https://pi-server-awddevs.c9users.io/g/on/'+i;
        request(url, function(error, resp, body) { 
            if (error) console.log(error); 
          console.log(body);
            //Some calculation callback();
        });
    }, interval * i, i);

j++

}
for (var i = 0; i <=1000; i++) {
    setTimeout( function (i) {
        var url = 'https://pi-server-awddevs.c9users.io/h/off/'+i;
        request(url, function(error, resp, body) { 
            if (error) console.log(error); 
          console.log(body);
            //Some calculation callback();
        });
    }, interval * i, i);

j++

}
for (var i = 0; i <=1000; i++) {
    setTimeout( function (i) {
        var url = 'https://pi-server-awddevs.c9users.io/j/off/'+i;
        request(url, function(error, resp, body) { 
            if (error) console.log(error); 
          console.log(body);
            //Some calculation callback();
        });
    }, interval * i, i);

j++

}

console.log(j+ " Totla value is ");
app.listen(process.env.PORT || 6000, function () {
  console.log('listening on *:5000');
});
