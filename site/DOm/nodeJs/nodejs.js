// create using http module
const res = require('express/lib/response');
var http=require('http');
http.createServer(function(req,res){
    res.end(200,{'Content-Type':'text/plain'});
})