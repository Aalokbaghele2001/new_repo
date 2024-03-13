// class User{
//     constructor(name,age,dob,mob)
//     {
//         this.name=name;
//         this.age=age;
//         this.dob=dob;
//         this.mob=mob;
//     }
//     greet()
//     {
//         console.log(`hiii welcome world of coding`);
//     }
//     introduction(){
//         console.log(`hii my name is ${this.name}, ${this.age} years old, date of birth is ${this.dob} and my mobile number is ${this.mob}. `)
//     }
// }
// let aalok=new User("aalok",23,"10 OCT 2001","6264949755");
// console.log(aalok);
// console.log(aalok.name);
// console.log(aalok["age"]);
// aalok.greet();
// aalok.introduction();

// function user(name,age,dob,mob)
// {
//     this.name=name;
//     this.age=age;
//     this.dob=dob;
//     this.mob=mob;
//      this.greet=function(){
//         console.log(`hiii welcome world of coding`);  
//     }
//    this.introduction=function(){
//                 console.log(`hii my name is ${this.name}, ${this.age} years old, date of birth is ${this.dob} and my mobile number is ${this.mob}. `)
//             }
// }
// let aalok=new user("aalok",23,"10 OCT 2001","6264949755");
// console.log(aalok);
// console.log(aalok.name);
// console.log(aalok["age"]);
// aalok.greet();
// aalok.introduction();




// class User{
//     constructor(name,age,dob,mob)
//     {
//         this.name=name;
//         this.age=age;
//         this.dob=dob;
//         this.mob=mob;
//     }
//     greet(){
//         console.log(`hiii this is aalok`)
//     }
//     introduction(){
//         console.log(`hii this is ${this.name}, i am ${this.age} years old, my date of birth is ${this.dob} and my mobile number is ${this.mob}.`);
//     }
// }

// let aalok=new User("aalok",23,"10th OCT 2001","6264949755");
// console.log(aalok);
// console.log(aalok.name);
// console.log(aalok["age"]);
// aalok.greet();
// aalok.introduction();


// function User(name, age, dob, mob)
// {
//     this.name=name;
//     this.age=age;
//     this.dob=dob;
//     this.mob=mob;

//     this.greet=function(){
//         console.log(`hii welcome world of thorns`);
//     }
//     this.introduction=function(){
//         console.log(`hii this is ${this.name} i am ${this.age} years old my mobile number is ${this.mob}.`);
//     }
// }

// let aalok=new User("aalok",23,"10th OCT 2001","6264949755");
// console.log(aalok);
// console.log(aalok.name);
// console.log(aalok["age"]);
// aalok.greet();
// aalok.introduction();


// class User{
//     constructor(name,age,dob,mob)
//     {
//         this.name=name;
//         this.age=age;
//         this.dob=dob;
//         this.mob=mob;
//     }
//     greet(){
//         console.log(`hiii this is aalok`)
//     }
//     introduction(){
//         console.log(`hii this is ${this.name}, i am ${this.age} years old, my date of birth is ${this.dob} and my mobile number is ${this.mob}.`);
//     }
// }

// let aalok=new User("aalok",23,"10th OCT 2001","6264949755");
// console.log(aalok);
// console.log(aalok.name);
// console.log(aalok["age"]);
// aalok.greet();
// aalok.introduction();

// class EMP extends User{
//     constructor(name,age,dob,mob,empid,desg,salary)
//     {
//         super(name,age,dob,mob);
//         this.name=name;
//         this.age=age;
//         this.dob=dob;
//         this.mob=mob;
//         this.empid=empid;
//         this.desg=desg;
//         this.salary=salary;
//     }
//     professionalDiscription(){
//         console.log(`hii this is ${this.name}, i am ${this.age} years old, my date of birth is ${this.dob} and my mobile number is ${this.mob} , my employ id is ${this.empid} and my designation is ${this.desg} and my salary is ${this.salary}.`)
//     }

// }
// let aalokbaghele=new EMP("aalok",23,"10th OCT 2001","6264949755","HCL0125","Web Developer","45000");
// console.log(aalokbaghele);
// aalokbaghele.professionalDiscription();
// aalok.greet();


//  class User{
//     constructor(name, age , dob , mob)
//     {
//         this.name= name;
//         this.age=age;
//         this.dob=dob;
//         this.mob=mob;
//     }
//     greet(){
//         console.log(`Hii this is ${this.name} Welcome the world of coding.`);
//     }
//     introduction(){
//         console.log(`Hii i am ${this.name} i am ${this.age} years old my date of birth is ${this.dob} and my mobile number is ${this.mob}.`);
//     }
//  };

//  let aalok=new User("aalok",23,"10th OCT 2001","6264949755");
//  console.log(aalok);
//  console.log(aalok.name);
//  console.log(aalok["age"]);

//  aalok.greet();
//  aalok.introduction();

// console.log(Object.entries(aalok));

// class EMP extends User{
//     constructor(name,age,dob,mob,empID,desg,salary)
//     {
//         super(name,age,dob,mob);
//         this.name=name;
//         this.age=age;
//         this.dob=dob;
//         this.mob=mob;
//         this.empID=empID;
//         this.desg=desg;
//         this.salary=salary;
//     }
//     description(){
//         console.log(`Hii i am ${this.name} i am ${this.age} years old my date of birth is ${this.dob} and my mobile number is ${this.mob} my employ id is ${this.empID} and my designation is ${this.desg} and my salary is ${this.salary}`);
//     }
// };

// let aalokB=new EMP("aalokbaghele","23","10th OCT 2001","6264949755","TCS85367","Web Developer","45000");
// console.log(aalokB);
// aalokB.description();

// function User(name,age,dob,mob)
// {
//     this.name=name;
//     this.age=age;
//     this.dob=dob;
//     this.mob=mob;
//     this.greet=function()
//     {
//         console.log(`hii this is ${this.name} Welcome the world of coding and world of thorns.`);
//     }
//     this.introduction=function(){
//         console.log(`Hii my name is ${this.name} i am ${this.age} years old my date of birth is ${this.dob} and my mobile number is ${this.mob}.`);
//     }
// }

// let aalok=new User("aalok","23","10th OCT 2001","6264949755");
// console.log(aalok);
// aalok.greet();
// aalok.introduction();



