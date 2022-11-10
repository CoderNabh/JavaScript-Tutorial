let number = Math.round(Math.random()*101);
var guesses = 0
while (n != number) {
    var n = prompt("Guess a number between 1 and 100")
    n = Number.parseInt(n)
    if (n > number) {
        alert(`The number is less than ${n}`)
        guesses++
    }
    else if (n < number){
        alert(`The number is greater than ${n}`)
        guesses++
    }
}

if (n == number) {
    alert("You have guessed the correct number")
    guesses++
    let score = 100 - guesses
    alert(`Your score was ${score} and you took ${guesses} guesses`)
}