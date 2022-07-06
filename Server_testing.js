var http=require('http')
var fs=require('fs')
var url=require('url')


http.createServer(function(req,res){

    var q=url.parse(req.url,true)
  //  console.log(q.pathname)
        
    
        if (q.pathname==='/'){
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
        console.log(q.query.lname)
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>Hi '+q.query.fname+'</h1>')
        res.end()
    }
    else{
        res.write("404 Page not found check and load again")
        res.end()
    }
    }).listen(8000,()=>console.log('Started...'))