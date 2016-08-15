var mysqlAdapter = require('sails-mysql');

module.exports = {
	adapters: {
		mysqlAdapt: mysqlAdapter
	},

  connections: {
    mysqlDB: {
		adapter: 'mysqlAdapt',
		host: 'localhost',
		port: '3306',
		database: 'pi_database',
		user:'root',
		password:'',
		supportBigNumbers:true, //true/false
		debug:['ComQueryPacket'], //false or array of node-mysql debug options
		trace:true //true/false
    } 
  }
};
