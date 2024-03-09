// closure function
// here add() function return anynomous function with one parameter
// parent functions variables value is always accessible into return function with same name
function add(){
    let num1=5;
    return function(num2){
        console.log(num1);
        console.log(num2);
        console.log(num1+num2);
    };
}
const returnFunc=add(); // add() return anynomous function with one parameter
// after initialization into returnFunc , anynomous function become function withname 
// returnFunc it has one parameter
returnFunc(15);// here we put 15 as argument so this become num2 in anynomous function

