	var express		=require('express'); 
 			var app			=express();    
 			var crudR		=express.Router(); 
 			var crudC		=require('./../controllers/pinStateC.js')();
 			crudR.route('/')
 				.get(crudC.get)
 				.post(crudC.post);
 			crudR.route('/:id')
 		    	.get(crudC.getOne)
 				.put(crudC.put)
 				.delete(crudC.delete)
 			crudR.route('/:id/:userid')
 				.get(crudC.getOne)
 				.put(crudC.put)
 				.delete(crudC.delete) 
 		
 		module.exports=crudR;