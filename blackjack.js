let firstCard = 6
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-cards-el")

function startGame() {
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = "You have got Blackjack!"
        hasBlackJack = true
    }
    else {
        message = "You are out of the game."
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
}

















/*
let age = 21
if (age < 21) {
    console.log("You can not enter the club!")
}
else {
    console.log("Welcome!")
}

let age = 100
if (age < 100) {
    console.log("Not elegible")
}
else if (age === 100) {
    console.log("Here is your birthday card from the King!")
}
else {
    console.log("Not elegible, you have already gotten one")
}*/
