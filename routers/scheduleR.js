			var express		=require('express'); 
 			var app			=express();    
 			var crudR		=express.Router(); 
 			var crudC		=require('./../controllers/scheduleC.js')();
 			crudR.route('/')
 				.get(crudC.get)
 				.delete(crudC.delete) 
 				.post(crudC.post);
 			crudR.route('/:id')
 				.get(crudC.getOne)
 				.put(crudC.put)
 				
 		
 		module.exports=crudR;