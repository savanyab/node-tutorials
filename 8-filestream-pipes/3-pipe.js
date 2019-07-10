var fs = require("fs");
var readStream = fs.createReadStream("D://datainput.txt");
var writeStream = fs.createWriteStream("D://dataoutput.txt");

readStream.pipe(writeStream);