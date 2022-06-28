// jshint esversion:6

const playerPick = require(__dirname + '/app.js')



exports.result = function() {
    const randomPick = Math.ceil(Math.random() * 3)
    let computerPick = ""
 
    if (randomPick === 1){
     computerPick = "Rock"
    } else if (randomPick === 2) {
     computerPick = "Paper"
    } else if (randomPick === 3) {
     computerPick = "Scissors"
    }
 
    if (playerPick === "") {
        return
    } else if (computerPick === playerPick) {
        return "Tie"
    } else if (computerPick === "Rock" && playerPick === "Paper") {
        return "You choose Paper against Rock. You win!!"
    } else if (computerPick === "Rock" && playerPick === "Scissors") {
        return "You choose Scissors against Rock. You lose!!"
    } else if (computerPick === "Paper" && playerPick === "Scissors") {
        return "You choose Scissors against Paper. You win!!"
    } else if (computerPick === "Paper" && playerPick === "Rock") {
        return "You choose Rock against Paper. You lose!!"
    } else if (computerPick === "Scissors" && playerPick === "Paper") {
        return "You choose Paper against Scissors. You lose!!"
    } else if (computerPick === "Scissors" && playerPick === "Rock") {
        return "You choose Rock against Scissors. You win!!"
    }
}