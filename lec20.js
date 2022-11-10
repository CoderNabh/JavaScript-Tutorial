let arr = [45, 23, 67,]
let a = arr.map((value) =>{
    // console.log(value)
    return value*value
})
// console.log(a)

let arr2 = [45, 23, 67,0 ,10, 8, 9]
let a2 = arr2.filter((a)=>{
    return a<10
})
// console.log(a2)

let arr3 = [1, 3, 2, 4]
let a3 = arr.reduce((h1 , h2)=>{
    return h1 + h2
})
console.log(a3)