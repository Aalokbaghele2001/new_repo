
// /// syncronous coding is running code line by line  is some line of cody executing then remaining line of code weiting for execution

// // function task(message){
// //     let n=10000000000;
// //     while(n>0){
// //         n--;
// //     }
// //     console.log(message);
// // }

// // console.log('start script.......');
// // task('call an api');
// // console.log('done!');

// // in this code task function has loop it take time to execution done 
// // firstly print start script ......
// // then weiting for executing whole loop 
// // then loop execution done then print call an api and after that done!


// // to over come this problem we have asyncronous coding 
// // Asyncronous // 
// // something is not in sequence
// // 

// function task(message){
//     let n=1000000;
//     while(n>0){
//         n--;
//     }
//     console.log(message);
// }

// console.log('start script.......');
// setTimeout(()=>task('call an API'),10000); ///  like alarm settimeout function it indicate that
// /// after 10000 ms task function call
// console.log('done!');

// /// here to overcome that problem we use asyncronous coding 
// // here we use setTimeout() function where we defind time
// // here firstly print start script...... then print done!
// /// then after executive whole loop call an API print 
// // here not weiting for loop execution is simply done all task 


function sayHello(name,massage){
    console.log(`hello , ${name}! ${massage}`);
}
const timerId=setTimeout(sayHello,1000,"john","how are you?"); // sayhello is function 3000 set time and after that 2 argument for function
console.log("take it easy man");
clearTimeout(timerId);

// stop timeout function or execution of code we use cleartimeout


/// promises  //

