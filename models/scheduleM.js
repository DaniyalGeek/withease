module.exports = { 
 						identity:'schedule', 
 						connection: 'mysqlDB',   
 						schema:true,              
 						migrate:'alter',
 						attributes: {
 						"piId":"string",
 						"userId":"string",
 						"onMinute":"string",
 						"onHour":"string",
 						"offMinute":"string", 						
 						"offHour":"string",
 						"onId":"string",
 						"offId":"string",
 						"timeZone":"string",
 						"days":"string",
 						"pin":"string",
 						"pinTitle":"string",
 						"deviceTitle":"string"
 					}   
 					};