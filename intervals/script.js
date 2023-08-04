// number of seconds that have passed
let time = 0;
// reference to the <span> containing the number
let counterElement = document.getElementById("time");

// I'm lost 
// counterElement.don't know what to do next
function myVar() {
counterElement.innerText = parseInt(counterElement.innerText) +1;
console.log("test")
}

setInterval(myVar, 1000)