var name = "Bill";
if (name === "Bill" || name === "Anne") {
    alert("hi Bill or Anne!");
} else if (name === "Sue") {
    alert("hi Sue!");
} else {
    alert("I don't know you.");
}


// //call stack - asyncrenist programming
// console.log('1');
// setTimeout(() => {
//     console.log('2');
// }, 2000)
// console.log('3');


//Call Stack
console.log('1');
setTimeout(() => {
    console.log('2');
}, 2000)
console.log('3');
//1.Web API
setTimeout() //runs

//2.Callback Queue
callback() //gets called

//3.Event Loop
//checks nonstop all the time to see if call stack is empty.