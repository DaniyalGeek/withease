var pinstate =function (){ 
 					var get=function (req,res){ 
 								db('devices').find({}).exec(function(err,data){ 
 										if(err){ 
 											res.status(500).send(err); 
 										}else{ 
 											res.json(data);  
 										///res.status(200); 
 										console.log(data); 
 										}  
 									}); 
 							}; 
 					var post=function (req,res){ 
 								db('devices').create(req.body).exec(function(err,data){ 
 									if(err){ 
 										res.status(500).send(err); 
 									}else{ 
 										res.json({success:true}); 
 									} 
 								});	 
 							}; 
 					var getOne=  function (req,res){ 
 							
 							  		  db('devices').find({piid: req.params.piid}).exec(function(err,data){ 
                                              if(err){ 
                                                res.status(500).send(err); 
                                              }else{ 
                                                  if(data != null)
                                                  {
                                                     res.json(data);
                                                  }else 
                                                  {
                                                    	res.json({"success":false,"status":"Data not available"});  
                                                  }
                                              }
 							  		  });
 					
 							  		
 							  		 
 								};  
 					var put=function (req,res){ 
 					     					  db('devices').findOne({piId: req.params.id}).exec(function(err,data){ 
                                              if(err){ 
                                                res.status(500).send(err); 
                                              }else{ 
                                                  if(data != null)
                                                  {
                                                
                                                  }else 
                                                  {
                                                    	res.json({"success":false,"status":"User or Modem dosen't exist"});  
                                                  }
                                              }
 							  		  });
 							
 							};  
 					var del=function (req,res){  
 									db('devices').destroy({id:req.params.id}).exec(function (err){  
 										if(err){  
 											res.status(500).send(err);  
 										}else{  
 											res.send('User with id: '+req.params.id+' has been deleted');  
 										}  
 									});  
 								};  
 					return {  
 						get: 	get,  
 						post: 	post,  
 						getOne: getOne,  
 						put: 	put,  
 						delete: del  
 					}  
 				}  
 				module.exports=pinstate;  
 			