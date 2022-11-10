let sum = 1;
let n = prompt("What is the value of n?")
for (let i = 0; i < n ;  i++) {
    sum *= (i+1); 
    console.log(i+1)
}
console.log("The value of " + n + "! " + sum)