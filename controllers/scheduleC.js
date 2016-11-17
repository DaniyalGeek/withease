var CronJobManager = require('cron-job-manager');
var manager = new CronJobManager();
var request = require('request');

var dani =function (){ 
 					var get=function (req,res){ 
 								db('schedule').find(function (err, data){  
 									if(err){  
 										res.status(500).send(err); 
 									}else{  
 									//	 res.json(data); 
 										var jobs = manager.listCrons();
 									  res.json({jobs});
 									} 
 								}); 
 							}; 
 						
 					var post=function (req,res){ 
 					//	console.log();
 								db('schedule').create(req.body).exec(function(err){ 
 									if(err){ 
 										res.status(500).send(err); 
 									}else{ 
 										addAlarm("ON",req.headers['x-access-token'],req.body.onId,req.body.onMinute,req.body.onHour,req.body.timeZone,req.body.days,req.body.pin,req.body.deviceTitle,req.body.pinTitle,req.body.userId,req.body.piId);
 										addAlarm("OFF",req.headers['x-access-token'],req.body.offId,req.body.offMinute,req.body.offHour,req.body.timeZone,req.body.days,req.body.pin,req.body.deviceTitle,req.body.pinTitle,req.body.userId,req.body.piId);
 										res.json({succes:true,"message":"successfully created Alarm"});
 									} 
 								});	 
 							}; 
 					var getOne=  function (req,res){ 
 									db('schedule').find({userId: req.params.id}).sort({id:0}).limit(8).exec(function(err,data){ 
 										if(err){ 
 											res.status(500).send(err); 
 										}else{ 
 											res.json({"data":data});  
 										}  
 									});  
 								};  
 					var put=function (req,res){  
 								db('schedule').update({id:req.params.id},req.body).exec(function (err, data){  
 									if(err){  
 										res.status(500).send(err);  
 									}else{  
 										db('schedule').findOne({jobId:req.params.id}).exec(function(err,data){  
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
 									db('schedule').destroy({onId:req.body.onId}).exec(function (err){  
 										if(err){  
 											res.status(500).send(err);
 										}else{  
 											manager.deleteJob(req.body.onId);
 											manager.deleteJob(req.body.offId);
 											res.json({succes:true,"message":"successfully Deleted"}); 
 										}  
 									});  
 								};
 					var addAlarm= function(state,token,jobId,minute,hour,timezone,days,pin,deviceTitle,pinTitle,userId,piId){
 										
 									manager.add(jobId,
									'00 '+minute+' '+hour+' * * '+days, // the crontab schedule 
									function() { 
										console.log("tick - what should be executed?");
										var stateCheck ;
										var time = new Date().toLocaleString("en-US", {timeZone: timezone})
										if(state == "ON"){
											stateCheck = "ON"	
										}else {
											stateCheck = "OFF"
										}
										var obj = {
											"userId":userId,"piid":piId,"state":stateCheck,"pin":pin,"deviceTitle":deviceTitle,
											"pinTitle":pinTitle,"timeStamp":time
										};
										console.log(obj);
										request({
										    url: "https://withease-withease.c9users.io/state",
										    method: "POST",
										    json: true,   // <--Very important!!!
										     headers: {
												    'x-access-token': token
												  },

										    body: obj
										}, function (error, response, body){
										    console.log(response);
										});
									},
									{  
									  start:true,
									  timeZone:timezone,
									  completion: function() {console.log("a_key_string_to_call_this_job has stopped....")}
									});

 								}  
 					return {  
 						get: 	get,  
 						post: 	post,  
 						getOne: getOne,  
 						put: 	put,  
 						delete: del,
 						addAlarm: addAlarm
 					}  

 				}  
 				module.exports=dani;  
 			
