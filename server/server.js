exports.start = start;

function start(app, port){
  if (typeof port === 'undefined'){
    port = 8888;
  }
  app.listen(port);
  console.log('[server] Started listening to ' + port);
}