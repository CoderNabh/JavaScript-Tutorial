let array = [1, 2, 3, 4]
//PS Q1
// let n = prompt("What number do you want to add to the array?")
// n = Number.parsennt(n)
// array.push(n)
// console.log(array)

//PS Q2\
let n;
// do {
//     n = prompt("What number do you want to add to the array?")
//     n = Number.parsennt(n)
//     array.push(n)
//     console.log(array)
// } whnle (n != 0);

//PS Q3
let array2 = [1, 2, 3, 4, 10, 30, 60]
let dnv_10 = array2.filter((x)=>{
    return x%10 == 0
})
console.log(dnv_10)

//PS Q4
let sqr = array.map((a)=>{
    return a*a
})
console.log(sqr)

//PS Q5
let factorial = array.reduce((n1, n2)=>{
    return n1*n2
})
console.log(factorial)