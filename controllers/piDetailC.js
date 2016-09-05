var pidetail =function (){ 
 					var get=function (req,res){ 
 								db('pidetail').find({}).populate("deviceStatus").exec(function(err,data){ 
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
 					    var pinStateObj = {"deviceStatusId": req.body.piId,
                                        "deviceState": "on",
                                        "pin1": "OFF",
                                        "pin2": "OFF",
                                        "pin3": "OFF",
                                        "pin4": "OFF",
                                        "pin5": "OFF",
                                        "pin6": "OFF",
                                        "pin7": "OFF",
                                        "pin8": "OFF",
                                        "pin9": "OFF",
 					               	"pin1Title":"Light1",
         							"pin2Title":"Light2",
         							"pin3Title":"Light3",
         							"pin4Title":"Light4",
         							"pin5Title":"Light5",
         							"pin6Title":"Light6",
         							"pin7Title":"Fan1",
         							"pin8Title":"Fan2",
         							"pin9Title":"Temp",
 					    };
                                        	
 					        db('pidetail').findOne({userId: req.body.userId,deviceTitle:req.body.deviceTitle}).exec(function(err,data){ 
 										if(err){ 
 											res.status(500).send(err); 
 										}else{ 
 										    if(data != null)
 										    {
 											res.json({"success":false,"message":"You already have room with this title."});
 										    }
 											else
 											{ 
 											    db('devices').findOne({piId: req.body.piId}).exec(function(err,data){ 
             										if(err){ 
             											res.json({"success":false,"message":"Please enter Valid ID"});
             										}else{ 
             										    if(data != null)
             										    {
             											db('pidetail').create(req.body).exec(function(err,data){ 
                             									if(err){ 
                             											res.json({"success":false,"message":"This device id already registered."});
                             									}else{ 
                             											res.json({"success":true,"message":"Device  is successfully added."}); 
                             											db('pinstate').create(pinStateObj).exec(function(err,data){ 
                                         							// 		if(err){ 
                                         							// 			res.status(500).send(err); 
                                         							// 		}else{ 
                                         							// 			res.status(201).json(data); 
                                         							// 		} 
                                         								});	
                             									} 
                             								});
             										    }
             											else
             												res.json({"success":false,"message":"This device dosen't exist"});
             										}  
             									}); 
                 								
 											}
 										}  
 									});  
 									 
 							}; 
 					var getOne=  function (req,res){ 
 					
 							  		db('pidetail').findOne({piId: req.params.id}).populate("deviceStatus").exec(function(err,data){ 
 										if(err){ 
 											res.status(500).send(err); 
 										}else{ 
 										    if(data != null)
 											res.json(data);
 											else
 											res.json({"success":false,"status":"This Modem dosen't exist"});
 										}  
 									});  
 								};  
 					var put=function (req,res){  
 								db('pidetail').update({piId:req.params.id},req.body).exec(function (err, data){  
 									if(err){  
 										res.status(500).send(err);  
 									}else{  
 										db('pidetail').findOne({piId:req.params.id}).exec(function(err,data){  
 											if(err){  
 												res.status(500).send(err);  
 											}else{  
 												res.json(data)  
 											}  
 										});  
 									}  
 								});  
 							};  
 					var del=function (req,res){  
 									db('pidetail').destroy({piId:req.params.id}).exec(function (err){  
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
 				module.exports=pidetail;  
 			