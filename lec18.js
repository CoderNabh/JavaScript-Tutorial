let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
console.log(num.length)
delete num[0]
console.log(num, num.length)
let newArray = num.concat(num_more)
console.log(newArray)