// // /// object literal
// // // keys allways string
// let address={
//     flatno:13,
//     village:"gannatola",
//     dist:"balaghat"
// };
// let education={
//     course:"b.tech",
//     grade:"A",
//     university:"RGPV"
// }
// let person={
//     name:"aalok",
//     age:23,
//     education:education,
//     address,// if name are same then use this syntex we can put only once put name
//     parmanent_address:{
//         wardno:17,
//         apartmentno:90,
//         dist:"bhopal"
//     },
//     greet:function(){
//         console.log("hi this is ",this.name,this.age);

//     },
//     // shortcut method creating function
//     greeting(){
//         console.log("hi this class of js");
//     }
// };
// person.gender="male";
// console.log(person);
// console.log(person.greet());
// console.log(person.greeting());


// // new creation
// let emp=new Object();
// console.log(emp);
// emp.name="aalokbaghele";
// emp.age=23;
// emp.id=13;
// console.log(emp);

// // accessing

// console.log(emp.name);
// console.log(emp["id"]);
// emp["gender"]="male";
// console.log(emp);

//////////////////////////////////////////////////////////////////////////
/// this keyword
/// this keyword is representing name of that object when we call in that function

 

// constructor function can be considered as class
// class PersonFactory {
//     constructor(name, age) {
//         this.name = name,
//             this.age = age,
//             //// function is refered as a method if we written inside object
//             this.greets = function () {
//                 console.log(`i am ${this.name} i am ${this.age} old`);
//             };


//     }
// };
// let ramesh=new PersonFactory("ramesh",24);
// let rama=new PersonFactory("rama",30);
// let sakshi=new PersonFactory("sakshi",34);

// console.log(rama instanceof PersonFactory);

// console.log(ramesh.greets());
// console.log(rama.greets());
// console.log(sakshi.greets());

// console.log(Object.keys(ramesh));/// keys of object
// console.log(Object.values(ramesh)); //// value in an object
// console.log(Object.entries(ramesh));// array of propery of object property and values are array

//////////////////////////////////////////////////////////////////////////////////////////

// let personII={};
// Object.assign(personII,ramesh);// ES5 copy of object
// console.log(personII);
// let personIII={...sakshi};/// ES6 spread operator(copy of another object)
// console.log(personIII);

// let address={
//     flatno:13,
//     village:"gannatola",
//     dist:"balaghat"
// };
// let education={
//     course:"b.tech",
//     grade:"A",
//     university:"RGPV"
// }
// let person={
//     name:"aalok",
//     age:23,
//     education:education,
//     address,// if name are same then use this syntex we can put only once put name
//     parmanent_address:{
//         wardno:17,
//         apartmentno:90,
//         dist:"bhopal"
//     },
//     greet:function(){
//         console.log("hi this is ",this.name,this.age);

//     },
//     // shortcut method creating function
//     greeting(){
//         console.log("hi this class of js");
//     }
// };
// Object.freeze(address);// it is freezing the property of object it can't be changed
// person.parmanent_address.wardno=18;// chnage value of address ward no 
// console.log(person);
// person.address.flatno=60; // here is not change flate number because addreess property is freezed
// console.log(person);

