// // constructor function 

// const Person=function(firstName,lastName)
// {
// this.firstname=firstName;
// this.lastName=lastName;
// // this.citizenship=citizenship;
// // this.greet=function(){
// //     console.log(`hii i am ${this.firstname}.`);
// // }
// };

// Person.prototype.citizenship='Indian';     /// prototype is common  for all object it common shell
// Person.prototype.greet=function(){
//     console.log(`hii i am ${this.firstname}.`);
// }
// const rahul=new Person("rahul","sahani");
// console.log(typeof rahul,rahul);
// rahul.greet();

// const divya=new Person('divya','varma');
// console.log(divya);
// divya.greet();

// console.log(divya.citizenship);
// console.log(rahul.citizenship);



class User{
    constructor(name,age,gender)
    {
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
};

User.prototype.greet=function(){
    console.log(`hii this is ${this.name} welcome the world of coding and world of throns`);
}

class EMP extends User{
    constructor(name,age,gender,empID,desg,salary)
    {
        super(name,age,gender);
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.empID=empID;
        this.desg=desg;
        this.salary=salary;
    }
}

EMP.prototype.introduction=function(){
    console.log(`Hii I am ${this.name} i am ${this.age} years old and i am ${this.gender} my employee ID is ${this.empID} my designation is ${this.desg} and my salary is ${this.salary}.`);
}


let aalok=new User('aalok','23','MALE');
let rahul=new User('rahul','23','MALE');

let rohit=new EMP('rohit','30','MALE','HCL2353','Web Developer','45000');

console.log(aalok);
aalok.greet();

rohit.introduction();

