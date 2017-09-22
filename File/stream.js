var fs=require('fs');

var readable=fs.createReadStream('greet.txt');

readable.on('data',function(chunk){console.log(chunk)});



var fs=require('fs');

var readable=fs.createReadStream('greet.txt', {encoding:'utf8'});

readable.on('data',function(chunk){console.log(chunk)});



var fs=require('fs');

var readable=fs.createReadStream('greet.txt', {encoding:'utf8', highWaterMark:2*1024});

readable.on('data',function(chunk){console.log(chunk.length)});



var writable= fs.createWriteStream('greet1.txt');
writable.write("hi");