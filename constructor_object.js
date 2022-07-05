function person(name,age,year,place){
    this.name=name
    this.age=age
    this.year=year
    this.place=place
    this.display=function (){
        console.log("name: "+this.name+ ", age: "+ this.age)
    }

}
var chillu=new person("chillu",3,2019,"chalakudy")
var sharon=new person("sharon",27,1994,"chalakudy")
var anagha=new person("anagha",23,1999,"alathur")
sharon.display()
anagha.display()
chillu.display()

