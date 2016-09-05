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
 							"pin5":"string",
 							"pin6":"string",
 							"pin7":"string",
 							"pin8":"string",
 							"pin9":"string",
 							"pin1Title":"string",
 							"pin2Title":"string",
 							"pin3Title":"string",
 							"pin4Title":"string",
 							"pin5Title":"string",
 							"pin6Title":"string",
 							"pin7Title":"string",
 							"pin8Title":"string",
 							"pin9Title":"string",
 						}  
 					  
 					};