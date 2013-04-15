var port = 8888

  , start = function(app){
      app.listen(port);
      console.log("Started listening to " + port);
    };

exports.start = start;