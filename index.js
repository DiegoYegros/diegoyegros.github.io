let previousEntries = 0
let count = 0
let countElement = document.getElementById("incrementButton")
let saveButton = document.getElementById("save-info")
function increment() {
    count += 1
    countElement.textContent = count
}
function save() {
    previousEntries = " " + count + " - "
    saveButton.textContent += previousEntries
}

let welcomeEl = document.getElementById("welcome-el")
let name = "Diego"
let greeting = "Hi, my name is "
let myGreeting = greeting + name
welcomeEl.innerText = myGreeting
welcomeEl.innerText += " (～o￣3￣)～"
