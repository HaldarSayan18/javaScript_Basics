// js child method
class Person {
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log("hello"+this.name);
    }
}

class Student extends Person {

}
const stud1 = new Student("Sayan");
stud1.greet();



//js super method
class Person {
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log("hello"+this.name);
    }
}

class Student extends Person {
    constructor(name){
        super(name);
    }
}
const stud2 = new Student("Haldar");
stud2.greet();


//If the parent and child class has the same method or property name, in this case when we will call the method or property of an object of the child class, It will override the method or property of the parent class.
//This is known as method overriding or shadowing method.