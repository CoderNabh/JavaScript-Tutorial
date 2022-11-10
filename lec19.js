let num = [56, 4, 3, 6, 7]

// for (let i = 0; i < num.length; i++) {
//     console.log(num[i]);
// }

num.forEach((element) => {
    console.log(element*element)
})

 let name = "Nabh"

let name_arr = Array.from(name)
console.log(name_arr)

for (const i of num) {
    console.log(i)
}

for (const key in num) {
    console.log(key)
}