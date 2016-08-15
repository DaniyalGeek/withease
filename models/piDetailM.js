module.exports = { 
 						identity:'pidetail', 
 						connection: 'mysqlDB',   
 						schema:true,              
 						migrate:'alter',
 						attributes: {
 							
 							"socketId":"string",
 							"piId":{type:"string",primaryKey:true},
 							userId: {
							      model: 'users'
							    },
							deviceStatus:{
								model:'pinstate'
							}

 						}   
 					};