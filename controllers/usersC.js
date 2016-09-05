var users =function (){ 
 					var get=function (req,res){ 
 								db('users').find({}).populate("devices").exec(function(err,data){ 
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
 								db('users').create(req.body).exec(function(err){ 
 									if(err){ 
 										res.json({"success":false,"message":"This username already exist."}); 
 									}else{ 
 										res.status(201).json({"success":true,"message":"User has been created"}); 
 									} 
 								});	 
 							}; 
 					var getOne=  function (req,res){ 
 									db('users').findOne({userId: req.params.id}).populate("devices").exec(function(err,data){ 
 										if(err){ 
 											res.status(500).send(err); 
 										}else{ 
 											res.json(data);  
 										}  
 									});  
 								};  
 					var put=function (req,res){  
 								db('users').update({userId:req.params.id},req.body).exec(function (err, data){  
 									if(err){  
 										res.status(500).send(err);  
 									}else{  
 										db('pi').findOne({userId:req.params.id}).exec(function(err,data){  
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
 									db('users').destroy({userId:req.params.id}).exec(function (err){  
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
 				module.exports=users;  
 			