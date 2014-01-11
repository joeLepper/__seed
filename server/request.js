exports.start = start;

function start(req,res){
 res.sendfile('public/index.html');
}