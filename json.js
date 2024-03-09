// JSON
//JSON - JAVASCRIPT OBJECT NOTATION
// it is an alternative to XML this is an ideal choice for data from web APIs 
// APIs(application program interface)
//
// METHODS
// 1) JSON.stringify()- it converts a js object to a JSON-formatted string
// 2) JSON.parse()= it parses a JSON-formatted string and convert it back into a JS object


const obj={
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  };
  console.log(obj);
  const jsonreq=JSON.stringify(obj); // object is converted to JSON
  console.log(jsonreq);

const backtoobj=JSON.parse(jsonreq); // convert JSON TO OBJECT
console.log(backtoobj);