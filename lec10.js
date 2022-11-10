let n = prompt("What is the value of n");
n = Number.parseInt(n);

let i = 1;
let fact = 1;
do {
    fact *= i;
    i++;
}while (i<=n)
console.log(fact)