/// PROMISES // IN JAVASCRIPT//

// let condition=false;
// let promiseVal=new Promise((resolve,reject)=>{
//     if(condition)
//     resolve(`yeah! promise full filled`);
//     else
//     reject(`promise not full filled`);
// });
// console.log(promiseVal);


let condition=false;
let promiseVal=new Promise((resolve,reject)=>{
    if(condition)
    resolve(`yeah! promise full filled`);
    else
    reject(`promise not full filled`);
});
promiseVal.then((response)=>console.log(response)).catch((error)=>console.log(error))
.finally(()=>console.log(`this will execute not matters it will resolve or reject`));

//// condition true means resolve then part execute 
// condition false means reject catch part execute
// finally wil print both case 



