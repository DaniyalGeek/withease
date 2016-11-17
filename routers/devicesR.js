	var express		=require('express'); 
 			var app			=express();    
 			var crudR		=express.Router(); 
 			var crudC		=require('./../controllers/devicesC.js')();
 			crudR.route('/')
 				.get(crudC.get)
 				.post(crudC.post);
 			crudR.route('/:piid/')
 				.get(crudC.getOne)
 				.put(crudC.put)
 				.delete(crudC.delete) 
 		
 		module.exports=crudR;