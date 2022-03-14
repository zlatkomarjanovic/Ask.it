//This let's us easily connect to our database
const Pool = require('pg').Pool;

const pool = new Pool({
	user: 'postgres',
	password: 'assassinscreed2000',
	host: 'localhost',
	port: '5432',
	database: 'askit',
});

module.exports = pool;
