/// execution contex

const name="pizza party";
const getPizza= ()=>{
    let qty=2;
    let seasoningQty=getSeasoning(qty);
    return{
        pizza_qty : qty,
       seasoning_qty: seasoningQty,
    };
};
function getSeasoning(qty){
    if(qty===1) return 1;
    return qty+1;
}
let pizzaOrder=getPizza();
console.log(pizzaOrder);