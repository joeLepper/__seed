var express    = require('express')
  , app        = express()
  , server     = require('./server/server')
  , reqHandle  = require('./server/request')
  , port       = process.argv[2];

app.use(express.static(__dirname + '/public'));

app.get('/*', function(req,res){
  console.log('Service!');
	reqHandle.start(req,res);
});
server.start(app);