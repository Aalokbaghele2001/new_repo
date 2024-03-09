///
///MAP
// MAP IS A DATA STRUCTURE USED TO MAP VALUES TO KEYS LIKE AN OBJECT 
// DIFFERENCE FROM OBJECT IS THAT IN MAPS KEY CAN BE OF ANY TYPE

// const restauant=new Map();
// restauant.set('name',"aallok");// set for adding element
// restauant.set(1,"chennai");
// restauant.set(2,["benglore","KA"]);
// restauant.set(["south india","north india"],"cuisine");
// restauant.set(true,"open");
// restauant.set(false,"close");
// console.log(restauant);

// console.log(restauant.size);
// console.log(restauant.get(1));
// console.log(restauant.has("open"));

// /// map.clear() to clear 
// // map can be converted
// console.log(Array.from(restauant));
// restauant.forEach((i)=>console.log(i)); // iterate using foreach loop


// let a={'J':"aalok","I":"baghele"};
// console.log(a.I);
// for(i in a)
// {
//     console.log(a[i]);
// }


// let s="III"
// let a={'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000};
// let sum=0;
// for(let i=0;i<s.length;i++)
// {
//     sum+=a[s[i]];
// }
// console.log(sum);


// strs=["flower","flow","flight"];
// let test=strs[0];
//   let rest="";
//   for(let j=0;j<test.length;j++)
//   {
//     for(let i=1;i<strs.length;i++)
//       {
//           if(strs[i][j]===test[j])
//           {
//           rest+=test[j];
//     console.log(rest);
//           }
//         else
//         break;
    

//       }

//   }
//   console.log(rest);


let s="([)]";
function validParanthisis(){
let stack = [];
// Traverse each charater in input string...
for (let idx = 0; idx < s.length; idx++) {
    // If open parentheses are present, push it to stack...
    if (s[idx] == '{') {
        stack.push('}');
    } else if (s[idx] == '[') {
        stack.push(']');
    } else if (s[idx] == '(') {
        stack.push(')');
    }
    // If a close bracket is found, check that it matches the last stored open bracket
    else if (stack.pop() !== s[idx]) {
       return false;
    }
}
return !stack.length;
}
console.log(validParanthisis(s));
