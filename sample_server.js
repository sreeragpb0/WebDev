var http=require('http')
http.createServer(function(req,res){
    res.write("Team fire...")
    res.end()
}).listen(7000)

function server(req,res){
    res.write("Hello world...")
    res.end()
    
}