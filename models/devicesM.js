module.exports = { 
 						identity:'devices', 
 						connection: 'mysqlDB',   
 						schema:true,              
 						migrate:'alter',
 						attributes: {
 							
 						
 							"piId":{type:"string",primaryKey:true}
 					

 						}   
 					};