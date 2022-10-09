let count = 0
let countElement = document.getElementById("incrementButton")
let saveButton = document.getElementById("save-info")
function increment() {
    count += 1
    countElement.innerText = count
}
function save() {
    let placeholder = "The number of times you pressed the button is: " + count
    saveButton.innerText = placeholder
}

let welcomeEl = document.getElementById("welcome-el")
let name = "Diego"
let greeting = "Hi, my name is "
let myGreeting = greeting + name
welcomeEl.innerText = myGreeting
