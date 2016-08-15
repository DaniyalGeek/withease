var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path    =require('path');
var bodyParser  =require('body-parser');
var jwt    = require('jsonwebtoken');
var user ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 objOn= {"state":"on","pin":""};
 objOff= {"state":"off"};

app.use('/pidetail',require('./routers/piDetailR.js'));
app.use('/pinstate',require('./routers/pinStateR.js'));
app.use('/users',require('./routers/usersR.js'));
app.post('/authenticate', function(req, res) {

  // find the user
  db('users').findOne({userId: req.body.userId}).exec(function(err,user){ 
                    if(err){ 
                      res.status(500).send(err); 
                    }else{ 
                       if (!user) {
                        res.json({ success: false, message: 'Authentication failed. User not found.' });
                      } else if (user) {
                        // check if password matches
                        if (user.password != req.body.password) {
                          res.json({ success: false, message: 'Authentication failed. Wrong password.' });
                        } else {
                          // if user is found and password is right
                          // create a token
                          var token = jwt.sign(user, 'superSecret');
                          var decoded = jwt.decode(token);
                          // return the information including token as JSON
                          res.json({
                            success: true,
                            message: 'Enjoy your token!',
                            token: token        
                          });
                        }  
                      }
                    }  
                  });  

});
io.sockets.on('connection', function(socket) {
  console.log('connection');
  console.log(socket.id);
   console.log(socket.a);

    // Register your client with the server, providing your username
  // io.sockets.on('connection', function (socket) { 
      socket.on('add-pi', function(data){
       user = data.piId;
     
      db('pidetail').update({piId: data.piId},{"socketId":socket.id}).exec(function (err, data){  
                  if(err){  
                    res.status(500).send(err);  
                  }else{  
                       // db('pidetail').findOne({piId: data.piId}).exec(function(err,data){ 
                       // if(err){ 
                       //  console.log(err); 
                       // }else{ 

                        console.log(JSON.stringify(data)+"Socket is Added");  
                    //   }  
                    // }); 
                  }  
                }); 
  });
app.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, 'superSecret', function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;   
  
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });
    
  }
});
  app.get('/:name/on/:pin/:piid',function(req,res){
    console.log(req.params.name+"i am username");
                              
                                       db('pidetail').findOne({piId: req.params.piid,userId:req.params.name}).populate("deviceStatus").exec(function(err,data){ 
                                              if(err){ 
                                                res.status(500).send(err); 
                                              }else{ 
                                                  if(data != null)
                                                  {

                                                     objOn.pin =req.params.pin;
                                                     if(io.sockets.sockets[data.socketId]!=undefined){
                                                             // console.log(io.sockets.sockets[data.socketId]); 
                                                                if(data.socketId)
                                                                {
                                                                 console.log(data.socketId);
                                                                 io.sockets.connected[data.socketId].emit("add-message", objOn);
                                                                }
                                                          }
                                                           else{
                                                              console.log("user is disconnected");
                                                               
                                                          }
                                                
                                              }
                                                else
                                                res.json({"status":"This Modem dosen't exist"});
                                              } 
                                               res.json(data);
                                            }); 
                    
      
       });

   app.get('/:name/off/:pin/:piid',function(req,res){
                        
                                       db('pidetail').findOne({piId: req.params.piid,userId:req.params.name}).populate("deviceStatus").exec(function(err,data){ 
                                              if(err){ 
                                                res.status(500).send(err); 
                                              }else{ 
                                                  if(data != null)
                                                  {

                                                     objOn.pin =req.params.pin;
                                                     if(io.sockets.sockets[data.socketId]!=undefined){
                                                             // console.log(io.sockets.sockets[data.socketId]); 
                                                                if(data.socketId)
                                                                {
                                                                 console.log(data.socketId);
                                                                 io.sockets.connected[data.socketId].emit("add-message", objOn);
                                                                }
                                                          }
                                                           else{
                                                              console.log("user is disconnected");
                                                               
                                                          }
                                                
                                              }
                                                else
                                                res.json({"status":"This Modem dosen't exist"});
                                              } 
                                               res.json(data);
                                            }); 
   
                              
                            
      });
    //   socket.on('disconnect', function() {
    
    //     db('pi').update({piId: user},{"socketId":""}).exec(function (err, data){  
    //                 if(err){  
                     
    //                 }else{  
    //                   console.log("disconnect");
    //                 }  
    //               }); 
    //   });
});



  var waterlineConfig = require('./waterline/config')
    , waterlineOrm = require('./waterline/init').waterlineOrm;
    var modelPath = path.join(__dirname, '/models');
    require('./waterline/init')(modelPath);
    //ORM Initialization 
    waterlineOrm.initialize(waterlineConfig, function (err, models) {
    if (err) throw err;
    db = function (table) { return models['collections'][table]; };
    db.collections = models.collections;
    db.connections = models.connections;
    
    });



http.listen(process.env.PORT || 5000, function () {
   var addr = http.address();
  console.log('listening on *:5000');
});
