// function task(message){
//     let n=1000000000;
// while(n>0){
//     n--;
// }
// console.log(message);
// }

// console.log(`start script...............`);
// task(`call an API`);
// console.log(`done!`);


// function task(message){
//     let n=10000000;
//     while(n>0){
//         n--;
//     }
//     console.log(message);
// }
// console.log(`start script......`);
// setTimeout(()=>{
//     task(`Download a file.`);
// },10000);
// console.log(`Done!`);

// console.log(`Hi`);
// setTimeout(()=>{
//     console.log(`Execute immediately.`);
// },0);
// console.log(`bye!`);


// function greet(){
//     console.log(`This will appear next. Hello World!`);
// }

// setTimeout(function(){
//     console.log(`This message appears after 3 seconds`);
//     greet();
// },3000)

/// setTimeout with miltiple parameter

// function sayHello(name,message){
//     console.log(`hello, ${name}! ${message}`);
// }
// setTimeout(sayHello,3000,"john","How are you?");
// console.log(`aalok`);


/// SETINTERVAL()  ///

// function displayTime(){
//     let currentTime= new Date();
//     let hours=currentTime.getHours();
//     let minutes=currentTime.getMinutes();
//     let seconds=currentTime.getSeconds();
//     console.log(`${hours}:${minutes}:${seconds}`);
// }


// clearTimeOut()  /// clearInterval()
// clear scheduled time 
// function sayHello(){
//     console.log(`Hello, World!`);
// }
// const timerId=setTimeout(sayHello,1000);
// clearTimeout(timerId);

// let count=0;
// function displayCount(){
//     count++;
//     console.log(`Cunt: ${count}`);
//     if(count===5){
//         clearInterval(intervalID);
//         console.log(`interval stopperd`);
//     }
// }
// let intervalID=setInterval(displayCount,1000);



// function add(a){
//    let n1=a;
//    return function(){
//     return n1++;
//    } 
// }
// let b=10;
// let mut=add(b);
// console.log(mut());
// console.log(mut());
// console.log(mut());


// var createCounter=function(n){
//     let a=n;
//     function increment(){
//         return ++a;
//     }
//     function decrement(){
//         return --a;
//     }
//     function reset(){
//         return a=n;
//     }
//     return{
//         increment,decrement,reset
//     };
// };
// var init = 5 ;
// const counter = createCounter(init);
// console.log(counter.increment());
// console.log(counter.reset());
// console.log(counter.decrement());


let a=[1,2,3,4,5,6,7,8,9,5];
let res=[];
let temp=[];
let size=4;
a.forEach((i)=>{
    temp.push(i);
    if(temp.length==size)
    {
        res.push(temp);
        temp=[];
    }
});
if(temp.length)
{
    res.push(temp);
}
// if(a.length)
console.log(res);