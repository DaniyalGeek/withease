module.exports = { 
 						identity:'pinstate', 
 						connection: 'mysqlDB',   
 						schema:true,              
 						migrate:'alter',
 						attributes: {
 							deviceStatusId:{type:"string",primaryKey:true},
 							"deviceState":"string",
 							"pin1":"string",
 							"pin2":"string",
 							"pin3":"string",
 							"pin4":"string",
 							"pin5":"string"
 							
 						}  
 					  
 					};