/// RULES of this keyword
//in case of arrow function it will take value of this keyword sarrounding the function
// un other simple function value of this is undefined
// to over come this problem we declare one variable outside the function and initialise with this keyword
// "use strict"
// const obj={
//     name:"Rocky Randhawa",
//     age:30,
//     intro:function(){
//         console.log("line 5",this);
//         console.log(`Hii this is ${this.name}`);
//         const test=()=>{
//             console.log("test in arrow function");
//             console.log("line 9",this);
//         };
//         test();
//         const func=function(){
//             console.log(`this is normal function function execution`);
//             console.log("line number 17",this);
//         }
//         func();
//         const that=this;
//         function fek(){
//             console.log(`this is function normal defination`);
//             console.log(`line num 22`,that);
//         }
//         fek();
//     },
// };

// obj.intro();



"use strict"

// let aalok={
//     name:'aalok',
//     age:'23',
//     gender:"MALE",
//     greet:function(){
//         console.log(this);
//         const intro=()=>{
//         console.log(this);
//         const geek=()=>{
//             console.log(this);
//             const book=function(){
//                 console.log(this);
//                 const copy=()=>{
//                     console.log(this);
//                 }
//                 copy();
//             }
//             book();
//             const pen=()=>{
//                 console.log(this);
//                 const beg=()=>{
//                     console.log(this);
//                 }
//                 beg();
//             }
//             pen();
//         }
//         geek();
//         }
//         intro();
//     }
// }
// aalok.greet();


// class User{
//     constructor(name,age,gender)
//     {
//         this.name=name;
//         this.age=age;
//         this.gender=gender;
//     }
//     greet(){
//         console.log(this);
//         const intro=function(){
//             console.log(this);
//         }
//         intro();
//         const infra=()=>{
//             console.log(this);
//             const book=()=>{
//                 console.log(this);
//                 const pen=()=>{
//                     console.log(this);
//                 }
//                 pen();
//             }
//             book();
//         }
//         infra();
//     }

// };

// let aalok=new User('aalok','23','Male');
// console.log(aalok);

// aalok.greet();



