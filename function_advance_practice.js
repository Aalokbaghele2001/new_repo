/// function expressions

const add1=function(a,b)
{
    return a+b;
};
console.log(add1(3,4));

// function declaration
console.log(add2(3,4)); // here we called the function here function declaration is hoisted
function add2(a,b){// here we declare the function
    return a+b;
}

// anynoumous function
const add3=(function(a,b){
    return a+b;
})(3,4);
console.log(add3);

const add4=((a,b)=>a+b)(3,4); // using arrow function
console.log(add4);

/// arrow function
const add5=(a,b)=>a+b;
console.log(add5(3,4));


/// immediately invoked function expression(IIFE)

(function(){
    let str=`hello i am aalok`;
    console.log(str);
})();

// generator function

function* numberGenerator(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}
const numbers=numberGenerator();


for(const number of numbers)
{
    console.log(number);
}

/// recursive functions

function factorial(n){
if(n===0) return 1;
return n*factorial(n-1);
}
console.log(factorial(5));


// call stack

    console.log(`task starting`);  // <--- 1 run
    task();  //<== 2 run calling function
    console.log(`task completed`); //<-- 3 run
    function task(){ //<--- 2 reach here
        console.log(`task running`); // <-- 2 run
    }


// hoisting run

console.log(x); // undefined here is hoisted variable is declared here
var x=10;
console.log(x); // 10

// hoisted error

// console.log(y,z);  // it will give error becuase hoisting is not done here because of let and const keyword
let y=10;
const z=11;
console.log(y,z);

/// function hoisting  run 

greet(); // here we called the function it will work because of hoiting 
function greet(){ // here we declare function 
console.log(`hello!`);
};


/// function hoisting error
// greet1(); // it will give us error because here hoisting in not work
// var greet1=(()=>console.log(`hello!1`));

// greet2(); // same it will also give error
// var greet2=function(){
//     console.log(`hello!2`);
// }


//// LETS PRACTICE
function TnS_add(a, b) {
    return a + b;
  }
  
  function TnS_spreadadd(...nums) {
    var count = 0;
    for (let num of nums) {
      count += num;
    }
    return count;
  }
  console.log(TnS_add(10, 20, 40), TnS_spreadadd(10, 20, 40));

  var add8 = new Function("num1", "num2", "return num1+num2");
console.log(add8(2, 5));