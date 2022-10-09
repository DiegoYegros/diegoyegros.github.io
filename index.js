let count = 0
let countElement = document.getElementById("incrementButton")
let saveButton = document.getElementById("save-info")
function increment(){
    count+=1
    countElement.innerText = count
}
function save(){
    saveButton.innerText = count
}

let username = "Diego"
let message = "You have three new notifications"
console.log(message + username)