var users =function (){ 
 					var get=function (req,res){ 
 								db('botusers').find({}).exec(function(err,data){ 
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
 								db('botusers').create(req.body).exec(function(err){ 
 									if(err){ 
 										res.json({"success":false,"message":"This username already exist."}); 
 									}else{ 
 										res.status(201).json({"success":true,"message":"User has been created"}); 
 									} 
 								});	 
 							}; 
 					var getOne=  function (req,res){ 
 									db('botusers').findOne({facebookId: req.params.id}).exec(function(err,data){ 
 										if(err){ 
 											res.status(500).send(err);
 										}else{ 
 											
 											if(data)
 											    res.json({"success":true,"data":data});
 											else
 											   res.json({"success":false}); 
 										}  
 									});  
 								};  
 					var put=function (req,res){  
 								db('botusers').update({facebookId:req.params.id},req.body).exec(function (err, data){  
 									if(err){  
 										res.status(500).send(err);  
 									}else{  
 									 
 												res.json(data)  

 									}  
 								});  
 							};  
 					var del=function (req,res){ 
 					    db('botusers').findOne({facebookId: req.params.id}).exec(function(err,data){ 
 										if(err){ 
 											res.status(500).send(err);
 										}else{ 
 										    if(data){
     										db('botusers').destroy({facebookId:req.params.id}).exec(function (err){  
     										if(err){  
     											//res.status(500).send(err);  
     										}else{  
     											res.json({success:true,message:'Logout Successfully!'});  
     										} 
     										
     									}); 	
 										    }
 										    else{
 										        res.json({success:false,message:"user not found"});
 										    }
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
 			