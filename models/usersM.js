module.exports = { 
 						identity:'users', 
 						connection: 'mysqlDB',   
 						schema:true,              
 						migrate:'alter',
 						attributes: {
 							"userId":{type:"string",primaryKey:true},
 							"password":"string",
 							// "email":"string",
 							 devices: {
								      collection: 'pidetail',
								      via: 'userId'
								    }
 						}  
 					  
 					};