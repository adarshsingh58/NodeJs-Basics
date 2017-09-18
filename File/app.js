var fs=require('fs');

var greet = fs.readFileSync('./greet.txt','utf8');
console.log(greet);

var greet2=fs.readFile('./greet.txt','utf8',function(err,data){
	console.log(data);
});
