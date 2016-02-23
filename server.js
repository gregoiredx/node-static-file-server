
var express = require('express');

var static_files_dir = process.argv.length > 2 ? process.argv[2] : __dirname + '/public';
var port = process.argv.length > 3 ? process.argv[3] : 10001;
 
var server = express();
server.use(express.static(static_files_dir));
 
server.listen(port, function() {
    console.log('serving files from ' + static_files_dir + ' on port ' + port);
});
