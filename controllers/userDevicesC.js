var jwt    = require('jsonwebtoken');
var userDevices =function (){ 
 				
                                 
 					var getOne=  function (req,res){
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
                                  
                                        	db('users').findOne({userId: req.params.id}).populate("devices").exec(function(err,data){ 
 										if(err){ 
 											res.status(500).send(err); 
 										}else{ 
 											res.json(data);  
 										}  
 									}); 
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
 								 
 								};  
 				 
 				 
 					return {  
 						  
 						getOne: getOne  
 						  
 					}  
 				}  
 				module.exports=userDevices;  
 			