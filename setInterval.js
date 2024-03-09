function displayTime(){
    let now = new Date();
    let hours=now.getHours();
    let mins=now.getMinutes();
    let secs=now.getSeconds();
    console.log(`time is ${hours}:${mins}:${secs}`);
}

// setTimeout(displayTime,1000);
// console.log("end");

const timeInterval=setInterval(displayTime,100); // keep print code for set interval
// console.log(timeInterval);
setTimeout(()=>{
    clearInterval(timeInterval);
    
},10000);

// clearinterval is to executive the code to given time 