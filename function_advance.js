// // function declaration //
// function dummyFunc(){
//     let a=22;
//     let b=90;
//     let res=a*b;
//     console.log(res);
// }


// /// this all expressions//
// let aNum=3;
// let bNum=90;
// let res=aNum+bNum;

// /// function expressions//
// const greet = function(){
//     console.log("hello i am aalok");
// };
// greet();

// const addition=function(a,b=90){
//     return a+b;
// }
// console.log(addition(89,45));
// console.log(addition(89));
// console.log(dummyFunc()); // we can call function declaration before initialization

// // console.log(greetings); // we can't call function expression before initialization
// // it will give us error

// function dummyFunc(){
//     let a=22;
//     let b=90;
//     let res=a*b;
//     console.log(res);
// };
// const greetings=function(){
// console.log("welcome all ");
// }


// // Anonymous function /// function without name

// /// immediately invoked function expression: IIFE
// (function (a,b){
// console.log(a*b);
// })(3, 5);

// (function (a,b){
//     console.log(a*b);
// }(3, 5));


// // Anonymus function
// let returnValue=(function (a,b){
//     return a*b;
//     })(3, 5);// invoking the function
// console.log(returnValue);

// /// Arrow function // (fat arrow =>)
// const simpleArrow=()=>{
//     console.log("arrow function");
// }
// simpleArrow();

// const division1=(a,b)=>{
//     let q=a/b;
//     return q;
// };


// const division2=(a,b)=>a/b;
// console.log(division1(5,2),division2(5,2));

// const arr=[12,13,14,15];
// const newArr=arr.map(e=>e*2);
// console.log(newArr);


// const aalok={
//     fname:"aalok",
//     yob:1996,
//     calcAge:function()
//     {
//         console.log(`age is ${this.yob}`);
//         console.log(2023-this.yob);

//         /// approach 1 to solve the problem before ES6
//         /// problem only occure with function expression  and function declaration
//         const that=this;
//         const isMilleial=function(){
//             console.log(`age is ${this.yob}`); // here yob is undefined this is problem it will give undefined
//             console.log(`age is ${that.yob}`); // solved using value of this initialize into that variable
//             console.log(that.yob>=1981&&that.yob<=1999);
//         }
//         isMilleial();

//         function printName(){
//             console.log(`name is ${this.fname}`);
//             console.log(`name is ${that.fname}`);
//            }
//            printName();

//         // using  arrow function this problem is solved
//         /// approach 2 to solve the problem after ES6 
//         const agePrintwithName=()=>console.log(`${this.fname} age is ${this.yob}`);
//         agePrintwithName();
//     }
// };
// aalok.calcAge();

/////////////////////////////////////////////////////////////////////////

// // RECURSION FUNCTION //
// // calling itself again and again

// function factorial(n)
// {
//     if(n===0)  return 1; // shorthand
//   return n*factorial(n-1);
// }
// console.log(factorial(5));


// // GENERATOR FUNCTIONS
// // 

function* generator(){
    yield "aalok";
    yield "baghele";
    yield 23;
    yield "coder";
}
const seq=generator();
// console.log(seq.next());
// console.log(seq.next());
// console.log(seq.next());
// console.log(seq.next());
// console.log(seq.next());

console.log(seq.next().value);
console.log(seq.next().value);
console.log(seq.next().value);
console.log(seq.next().value);
console.log(seq.next().value);

console.log(seq.next().done);
console.log(seq.next().done);
console.log(seq.next().done);
console.log(seq.next().done);
console.log(seq.next().done);

// function* infiniteSequence(){
//     let i=0;
//     while(true){
//         yield i++;
//     }
// }
// const numbers=infiniteSequence();
// console.log(numbers.next().value);
// console.log(numbers.next().value);
// console.log(numbers.next().value);
// console.log(numbers.next().value);
// console.log(numbers.next().value);
// console.log(numbers.next().value);
// console.log(numbers.next().value);

////////////////////////////////////////////////////////////////////////////////////////////

/// use case of arrow function 

// const aalok={
//     fn:"aalok",
//     yob:1989,
//     calcAge: function(){
//         console.log("👉",this.yob);
//         console.log("👌",2023-this.yob);
//         console.log("😍",this.fn);

//         // approach 1 to solve problem 
//         const that=this;
//         function printName(){
//             console.log(`🤣 name is ${this.fn}`);  // this is give undefind value
//             console.log(`🤣 name is ${that.fn}`);  // to solve this problem we firstly initialize this value to that variable and us that variable
//         }
//         printName();
//         const printNameWithYob=function(){
//             console.log(`name is ${this.fn}, yob is ${this.yob} and age is ${2023-this.yob}`);
//             console.log(`name is ${that.fn}, yob is ${that.yob} and age is ${2023-that.yob}`);
//         }
//         printNameWithYob();

//         /// approach 2  solved
//         const aalokDetail=()=>console.log(this.fn,this.yob,2023-this.yob);
//         aalokDetail();
//     }

// };
// aalok.calcAge();

/// Q2


//// date and time 
// let d=new Date();
// console.log(d);
