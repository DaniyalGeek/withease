module.exports = { 
 						identity:'botusers', 
 						connection: 'mysqlDB',   
 						schema:true,              
 						migrate:'alter',
 						attributes: {
 							"userId":{type:"string"},
 							"accessToken":"string",
 							"facebookId" :{type:"string",primaryKey:true}
 						}  
 					  
 					};