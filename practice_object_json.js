// let person={
//     firstName:"john",
//     lastName:"doe",
//     age:30,
// };
// console.log(person);

// let person1=new Object(person);
// person1.gender="male";
// console.log(person1);
// console.log(person1.firstName);
// console.log(person1['lastName']);
// person1.address={
//     parmanent:{
//         ward_no:17,
//         vill:"gannatola",
//         dist:"balaghat",
//         pin:481115,
//     },
//     current:{
//         flate_no:60,
//         block:"A",
//         dist:"bhopal",
//         pin:462023,

//     }
// };
// console.log(person1);
// console.log(person1.address.current);
// console.log(person1.address.current.pin);
// person1.address.current.country="india";
// console.log(person1);

// console.log(Object.keys(person1));
// console.log(Object.values(person1));
// console.log(Object.entries(person1));

// let personII=new Object();
// console.log(Object.assign(personII,person1));
// console.log(personII);

// let personIII={...person1};
// console.log(personIII);
// personIII.address.parmanent.ward_no=19;
// console.log(personIII);


// const myObj={name :"aalok",age:30};
// Object.freeze(myObj);
// myObj.age=40;
// console.log(myObj);


// const car={
//     name:"toyota",
//     model:"coroalla",
//     year:2022,
//     startEngine:function(){
//         console.log("engine started!");
//     },
//     closeEngine(){
//         console.log("engine closed!");
//     }
// }; 
// car.startEngine();
// car["startEngine"]();

// car.closeEngine();

///////////////////////////////////////////////////////////////////////////////////////////

// const person={
//     namee:"john",
//     age:30,
//     greet:function(){
//         console.log(`hello , my name is ${this.namee} and i am ${this.age} years old`);
//     },
//     // to aceess property in object method we use this  keyword
//    welcome(){
//     console.log(`hello ${this.namee} welcome in this world`);
//    }
// };
// console.log(person.namee);
// person.greet();
// person.welcome();
// console.log(person.greet);


//////////////////////////////////////////////////////////////////////////////

// let student={};
// student.name="john";
// console.log(student);
// student.greet=()=>console.log(`hello `);
// student.greet();


///////////////////////////////////////////////////////////////////////////////


// const person={
//     name:'john',
//     age:30,
//     greet()
//     {
//         let surname="doe";
//         console.log(`the name is ${this.name} ${surname}`);
//     }
// // to access property of object within method we use this keyword and to access surname simply we use only name of variable
// };
// person.greet();

/////////////////////////////////////////////////////////////////////////

// const myset=new Set();
// myset.add(1);
// myset.add(2);
// myset.add(2);
// myset.add(3);
// myset.add(4);
// console.log(myset);

// const fruitsArray=['apple','orange','bannana','apple'];
// const fruitSet=new Set(fruitsArray);
// console.log(fruitSet);

// const myAlpha=new Set(['a','b','c','d','c','a']);
// console.log(myAlpha);

// myAlpha.add('p');
// console.log(myAlpha);

// myAlpha.delete('a');
// console.log(myAlpha);

// console.log(myAlpha.has('b'));
// console.log(myAlpha.has('k'));

// console.log(myAlpha.size);

// myAlpha.forEach((i)=>console.log(i));

// for(i of myAlpha)
// {
//     console.log(i);
// }

// console.log(Array.from(myAlpha));

// myAlpha.clear();
// console.log(myAlpha);

// const myObjSet=new Set();
// const obj1={name:"aalok",age:30};
// const obj2={name:"aalok",age:30};
// myObjSet.add(obj1);
// myObjSet.add(obj2);
// console.log(myObjSet);


//////////////////////////////////////////////////////////////////////////////

// const myMap=new Map();
// myMap.set("name","aalok");
// myMap.age=30;
// myMap.set(1,"banglore");
// myMap.set(2,["bhopal","mp","ind"]);
// myMap.set(true,"open");
// myMap.set([1,2,3,4],"numbers");
// myMap.set("address","bhopal");

// console.log(myMap);
// myMap.delete('address');

// console.log(myMap.size);

// console.log(myMap.has(1));
// console.log(myMap.has(3));
// console.log(myMap);

// console.log(myMap.get(true));
// // in foreach iteration in map first we put value then key in loop
// myMap.forEach((value,key)=>console.log(key,value));

// for([key,value] of myMap)
// {
//     console.log(`${key} == ${value}`);
// }

// console.log(Array.from(myMap));

/////////////////////////////////////////////////////////////////////////

// const person={
//     namee:"aalok baghele",
//     age:90,
//     emmail:"aalok@gmail.com"
// };
// console.log(person,typeof person);

// const jsonStr=JSON.stringify(person);
// console.log(jsonStr ,typeof jsonStr);

// const strJson=JSON.parse(jsonStr);
// console.log(strJson,typeof strJson);

//////////////////////////////////////////////////////////////////////////////

// const obj1={
// name:"aalok",
// age:30
// };
// const obj2={
// isStudentP:true,
// age:25
// };

// Object.assign(obj1,obj2);
// let mergeobject={...obj1,...obj2};
// console.log(obj1);
// console.log(mergeobject);

// const a=
// {
// person:{
// name: "John",
// age: 30,
// address: 
// {city: "New York",
// country:"USA"
// }
// }};
// let propertyPath="person.name";
// const pathArray = propertyPath.split(".");
//   let result = a;

//   for (let property of pathArray) {
//     if (property in result) {
//       result = result[property];
//       console.log(result);
//     } else {
//       console.log(null);
//     }
//   }

//   console.log(result);


//////////////////////////////////////////////////////////////////////////////

// Do not remove nor make any changes in  main() function
// function main() {
//     var sentence = readLine();
//     console.log("hiii");
//     console.log(reverseWords(sentence));
// }
// function reverseWords(sentence) {
//   // Your code goes here
//   let a=sentence.split(" ").reverse().join(" ");
//   return a;
// }


