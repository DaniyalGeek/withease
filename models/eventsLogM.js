module.exports = { 
 						identity:'eventlog', 
 						connection: 'mysqlDB',   
 						schema:true,              
 						migrate:'alter',
 						attributes: {
 						    userId :'String',
 							 piid  : 'String',
 							 deviceTitle : 'String',
 							 pinTitle :  'String',
 							 state    :   'String',
 							 timeStamp :  'String'

 						}   
 					};