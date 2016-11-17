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
 							  		  db('pidetail').findOne({piId: req.params.id,userId:req.params.userid}).exec(function(err,data){ 
                                              if(err){ 
                                                res.status(500).send(err); 
                                              }else{ 
                                                  if(data != null)
                                                  {
                                                      db('pinstate').findOne({deviceStatusId: req.params.id}).exec(function(err,data){ 
                                     										if(err){ 
                                     											res.status(500).send(err); 
                                     										}else{ 
                                     										    if(data != null)
                                     											res.json(data);
                                     											else
                                     											res.json({"success":false,"message":"This device dosen't exist"});
                                     										}  
                                     									}); 
                                                  }else 
                                                  {
                                                    	res.json({"success":false,"status":"User or Modem dosen't exist"});  
                                                  }
                                              }
 							  		  });
 					
 							  		
 							  		 
 								};  
 								var put=function (req,res){  
 								db('pinstate').findOne({deviceStatusId:req.params.id}).exec(function (err, data){ 
 								 	if(err){ 
 										res.json({"success":false,"message":"There is some error!"});
 									}else{  
 									  for (first in req.body) break;
 									  for (second in data) {
 									    if(req.body[first].toLowerCase() == data[second].toString().toLowerCase()){
 									      	res.json({"success":false,"message":"This name Already exist"});
 									      	  return;
 									    }
 									  }
 									  db('pinstate').update({deviceStatusId:req.params.id},req.body).exec(function (err, data){  
         									if(err){ 
         										res.json({"success":false,"message":"There is some error!"});
         									}else{
         									  console.log("i am here");
         										res.json({"success":true,"message":"Successfully updated!"});
         									}  
         								});
 									}  
 								});
 							};
 				
 					var del=function (req,res){  
 									db('pinstate').destroy({deviceStatusId:req.params.id}).exec(function (err){  
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
 			