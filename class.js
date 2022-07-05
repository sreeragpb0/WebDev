class sample {

     sample1(){
        console.log("this is sample hello testing")
    }
}
class simple extends sample{

     add(num1,num2){

        this.num1=num1
        this.num2=num2
        console.log(this.num1+this.num2)
    }
}

var simple2=new simple()
simple2.add(10,100)
simple2.sample1()