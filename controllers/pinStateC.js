var pinstate =function (){ 
 					var get=function (req,res){ 
 								db('pinstate').find({}).exec(function(err,data){ 
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
 								db('pinstate').create(req.body).exec(function(err,data){ 
 									if(err){ 
 										res.status(500).send(err); 
 									}else{ 
 										res.status(201).json(data); 
 									} 
 								});	 
 							}; 
 					var getOne=  function (req,res){ 
 							//		db('pi').findOne({id: req.params.id}).exec(function(err,data){ 
 							  		db('pinstate').findOne({id: req.params.id}).exec(function(err,data){ 
 										if(err){ 
 											res.status(500).send(err); 
 										}else{ 
 										    if(data != null)
 											res.json(data);
 											else
 											res.json({"status":"This Modem dosen't exist"});
 										}  
 									});  
 								};  
 					var put=function (req,res){  
 								db('pinstate').update({id:req.params.id},req.body).exec(function (err, data){  
 									if(err){  
 										res.status(500).send(err);  
 									}else{  
 										db('pinstate').findOne({id:req.params.id}).exec(function(err,data){  
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
 									db('pinstate').destroy({id:req.params.id}).exec(function (err){  
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
 			