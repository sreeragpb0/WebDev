const express=require('express')
const bp=require('body-parser')
var path=require('path')
var html=require('html')

const exp=express()
console.log("started1")
exp.use(bp.urlencoded({ extended: true}))


exp.get('/',(req,res)=>{
    //res.send(__dirname)
    res.sendFile(path.join(__dirname,'index.html'))
})


exp.get('/login',(req,res)=>{
   // console.log(__dirname)
   // console.log("started2")
    res.sendFile(path.join(__dirname,'login.html'))
   // res.send("hi there login page..")

    
})
exp.post('/login',function(req,res){
   // res.send("created..")
    //res.render('index.html',{name: req.body.fname})
    res.send('<h1>'+req.body.fname+'</h1>')   
    console.log(req.body.fname)
    res.end()
})
    
exp.listen(2000,()=>console.log("server started on port 2000..."))