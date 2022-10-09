let previousEntries = 0
let count = 0
let countElement = document.getElementById("incrementButton")
let saveButton = document.getElementById("save-info")
let errorEl = document.getElementById("error")
let sumEl = document.getElementById("sum-el")
let errorMessage = "Something went wrong, please try again"
function increment() {
    count += 1
    countElement.textContent = count
}
function save() {
    previousEntries = " " + count + " - "
    saveButton.textContent += previousEntries
    count = 0
    countElement.textContent = count
}

let welcomeEl = document.getElementById("welcome-el")
let name = "Diego"
let greeting = "Hi, my name is "
let myGreeting = greeting + name
welcomeEl.innerText = myGreeting
welcomeEl.innerText += " (～o￣3￣)～"

let num1 = 8
let num2 = 2
function error() {
    errorEl.textContent = errorMessage
}

function add() {
    let result = num1 + num2
    sumEl.textContent = "Result: " + result
}
function substract() {

    let result = num1 - num2
    sumEl.textContent = "Result: " + result
}
function divide() {
    let result = num1 / num2
    sumEl.textContent = "Result: " + result
}
function multiply() {
    let result = num1 * num2
    sumEl.textContent = "Result: " + result
}


/*let firstName = "Diego"
let lastName = "Yegros"
let fullName = firstName + " " + lastName
console.log(fullName)
let name1 = "Linda"
let greeting1 = "Hi there"
console.log(greeting1 + ", " + name1 + "!")

let myPoints = 3
function add3Points() {
    myPoints += 3
}
function remove1Point() {
    myPoints -= 1
}
add3Points()
console.log(myPoints)
remove1Point()
console.log(myPoints)*/
