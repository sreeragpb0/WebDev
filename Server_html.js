var http=require('http')
var fs=require('fs')


http.createServer(function(req,res){
    if(req.url==='/'){

    fs.readFile('index.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()
    })
}
else if(req.url==='/login'){
    fs.readFile('login.html',(err,data) => {
 
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(data)
    res.end()
})
}
else{
    fs.readFile('not_found.html',(err,data)=> {
    res.writeHead(404,{'Content-Type':'text/html'})
    res.write(data)
    res.end()
})
}
}).listen(7000,()=> console.log("Server Started..."))