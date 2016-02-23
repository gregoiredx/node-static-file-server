
var express = require('express');

var static_files_dir = process.argv.length > 2 ? process.argv[2] : __dirname + '/public';
 
var server = express();
server.use(express.static(static_files_dir));
 
var port = 10001;
server.listen(port, function() {
    console.log('server listening on port ' + port);
});
