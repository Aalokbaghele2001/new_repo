// let firstName="aalok",lastName="baghele";

// function fullName(f,l)
// {
//     return `${f} ${l}`;
// }

// console.log(fullName(firstName,lastName));


// let n=3;
// console.log(isPrime(n));

// function isPrime(n)
// {
//     if(n<1)
//     return false;
//     else if(n===2)
//     return true;
//     else if(n%2==0)
//     return false;
//     else
//     {
//         // for(let i=n-1;i>=2;i--)
//         for(let i=3;i<=parseInt(n/2);i+=2)
//         {
//             if(n%i==0)
//             return false;
//         }
//         return true;
//     }
// }

// let numbers=[1,2,3,4,2,5,2];
// let target=2;
// let count=0;
// numbers.forEach((i)=>
// {
//     if(target===i)
//     count++;
// });
// console.log(count);

let customers=['Alpha',
    'Beta',
    'Zeta',
    'Beta',
    'Zeta',
    'Zeta',
    'Epsil',
    'Beta',
    'Zeta',
    'Beta',
    'Zeta',
    'Beta',
    'Delta',
    'Zeta',
    'Beta',
    'Zeta',
    'Beta',
    'Zeta',
    'Beta',
    'Zeta','Beta'];

let set=new Set(customers);
let customer=Array.from(set);
let res=[];
customer.forEach((c)=>{
    let count=0;
    customers.forEach((i)=>
    {
    if(i===c)
    count++;
});
if(((count/customers.length)*100)>=5)
{
res.push(c);
console.log((count/customers.length)*100);
}
});
console.log(res.sort());

