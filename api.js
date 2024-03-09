let user = fetch(`https://jsonplaceholder.typicode.com/users`);
user.then((res)=>{
    res.json().then((data)=>{
        console.log(data);
    });
});

/// call back hell= call back inside call back

