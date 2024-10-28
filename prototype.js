function Person(){
    this.name = "Elon Mask"
}
Person.prototype.age = 25;
//object creation
const pers1 = new Person();
console.log(pers1.age);

Person.prototype.age = 52;
//object creation
const pers2 = new Person();
console.log(pers2.age);
