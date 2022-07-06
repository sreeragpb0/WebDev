var http=require('http')
var fs=require('fs')
var url=require('url')


http.createServer(function (req,res){
    q=url.parse(req.url,true)

    if(q.pathname==='/'){
        fs.readFile('index.html',function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }else if(q.pathname==='/login'){
        fs.readFile('login.html',function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()

        })
    }else if(q.pathname==='/signupaction'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1> Hello '+q.query.fname+'..</h1>')
        res.end()

    }
    else{
        res.write('404 page not found check the url...')
    }

}).listen(4000,()=>console.log("server started on port 4000..."))