// /// OBJECT ORIENTED PROGRAMMING ///

// class User{
//     constructor(fName,lName,age,gender,mob)
//     {
//         this.fName=fName;
//         this.lName=lName;
//         this.age=age;
//         this.gender=gender;
//         this.mob=mob;

//     }
// }

// const ramesh=new User('ramesh','verma',30);
// console.log(ramesh);



// // 

// const a={name:"aalok",age:30};
// console.log(a);

// class user{
// constructor(name,age,gender)
// {
//     this.name=name;
//     this.age=age;
//     this.gender=gender;
// }
// }
// let userd=new user("aalok",30,"M");
// console.log(userd);



// function us(name,age,gender)
// {
//     this.name=name;
//     this.age=age;
//     this.gender=gender;
// }

// let a=new us("aalok",30,"M");
// console.log(a);


/////////////////////////////////////////////////////////////////////////////////////

// in javascript before there are no concept of class but some instance 
// they develope class concept using function constructer
// when we create class it automatically act like a function constructer


// /// this is class in js
// class us{     /// here we create class
//     constructor(name,age,gender){ // this is constructor
//         this.name=name;
//         this.age=age;
//         this.gender=gender;
//     }
// }
// let user=new us("aalok",30,"M"); // here we initialise or give arguments
// console.log(user);
// user.mob="1234567890";// here we add properties
// user.age=23; // here we modify properties
// console.log(user);


// /// this function constructor in js
// function us1(name,age,gender) /// here we create function constructor
// {
//     this.name=name;
//     this.age=age;
//     this.gender=gender;
//     // here we create methods name greet() in function construction
//     this.greet=function(){
//         console.log(`Hii This is ${this.name}, i am ${this.age} years old and i am ${this.gender}`);
//     }
// }

// let user1=new us1("aalok",30,"M"); /// here we initialise or give arguments
// console.log(user1);
// user1.mob="1234567890";// here we add properties 
// user1.age=23; /// here we modify the properties
// console.log(user1);
// user1.greet();



////////////////////////////////////////////////////////////////////



// class User{
//     constructor(fName,lName,age,gender,mob)
//     {
//         this.fName=fName;
//         this.lName=lName;
//         this.age=age;
//         this.gender=gender;
//         this.mob=mob;
//     }
//     greet(){
//         console.log(`hi this is ${this.fName} ${this.lName} and i am ${this.age} years old and my gender is ${this.gender} and my mobile number is ${this.mob}`) 
//     }
// }
// let aalok = new User("aalok","baghele",30,"Male",1234567890);
// let ramesh=new User('ramesh','verma',40,'Male',7895564558);

// console.log(aalok);
// console.log(ramesh);

// aalok.greet();
// ramesh.greet();

///////////////////////////////////////////////////////////////////////////

// inheritence 



// class User{
//     constructor(fName,lName,age,gender,mob)
//     {
//         this.fName=fName;
//         this.lName=lName;
//         this.age=age;
//         this.gender=gender;
//         this.mob=mob;
//     }
//     greet(){
//         console.log(`hi this is ${this.fName} ${this.lName} and i am ${this.age} years old and my gender is ${this.gender} and my mobile number is ${this.mob}`) 
//     }
// }
// let aalok = new User("aalok","baghele",30,"Male",1234567890);
// let ramesh=new User('ramesh','verma',40,'Male',7895564558);

// console.log(aalok);
// console.log(ramesh);

// aalok.greet();
// ramesh.greet();


// class Emp extends User {
//     constructor(fName,lName,age,gender,mob,eId,desg,dept,salary)
//     {
//         super(fName,lName,age,gender,mob);
//         this.eId=eId;
//         this.desg=desg;
//         this.dept=dept;
//         this.salary=salary;
//     }
// }

// let abaghele=new Emp('aalok','baghele',23,"Male","1234567890","AMZ0010","Web Developer","software","45000");

// console.log(abaghele);
// abaghele.greet();


// class Car{
//     constructor(name,model,company,price)
//     {
//         this.name=name;
//         this.model=model;
//         this.company=company;
//         this.price=price;
//     }
//     description(){
//         return `Hii welcome customer we are introducing car ${this.name}, model is ${this.model}, company ${this.company} and price of this car is ${this.price}`
//     }
// }

// class ExpCar extends Car{ // extend keyword
//     constructor(name,model,company,price,fuel,milage,height,sitting){
//     super(name,model,company,price); /// super keyword use 
    
//     this.fuel=fuel;
//     this.milage=milage;
//     this.height=height;
//     this.sitting=sitting;
// }
// }
// let TATA=new Car("Safari","SF012","TATA","18LAKH");
// console.log(TATA);
// console.log(TATA.description());

// let MarutiSuzuki=new ExpCar("Baleno","i15","MarutiSuzuki","15LAKH","Petrol","35KMPL","6FIT","6person");
// console.log(MarutiSuzuki);
// console.log(MarutiSuzuki.description());



// we can give default value as a parameter

// class Employee{
//     constructor(empId,name,desg,work="development")
//     {
//         this.empId=empId;
//         this.name=name;
//         this.desg=desg;
//         this.work=work;
//     }
// }

// let aalok=new Employee("HCL1205","aalok","software Developer");
// console.log(aalok)


