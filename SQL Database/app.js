var mysql=require('mysql');

var con = mysql.createConnection({
	host: 'localhost',
	user: 'admin',
	password: 'admin',
	database: 'testhibernate'
});

con.query('select * from category',function(err,row){
	if(err) throw err;
	console.log(row[0]['category_name']);
});