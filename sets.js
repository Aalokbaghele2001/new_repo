////SET
// SET LIKE AN ARRRA BUT UNIQUE VALUES
// SET CAN NEVER HAVE DUPLICATE VALUES
// ORDER OF ELEMENTS IN A SET IS IRRELEVANT

let arr=[1,2,3,3,3,1,4,5,-5,-6,7,-8];
console.log(arr,arr.length);
let aset=new Set(arr);// set
console.log(aset);

console.log(aset.size);// length of set
console.log(aset.has(3)); // element exist or not it return true
console.log(aset.has(9)); // false

aset.add(9); // add at th end
console.log(aset);
aset.delete(-5);
console.log(aset);

// aset.clear() it will clear all set value
/// set can't use indexing 

/// convert set to array
let arr1=Array.from(aset);
console.log(arr1);

aset.forEach((i)=>console.log(i)); /// iterate using foreachs