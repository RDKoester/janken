// jshint esversion:6

exports.result = function (playerPick) {

  let computerPick = "";
  let result = "";
  const win = "You win!!"
  const lose = "You lose!!"
  const rock = "Rock"
  const paper = "Paper"
  const scissors = "Scissors"

  // Generating a random pick for the computer
  const randomPick = Math.ceil(Math.random() * 3);
  
  if (randomPick === 1) {
    computerPick = rock;
  } 
  if (randomPick === 2) {
    computerPick = paper;
  } 
  if (randomPick === 3) {
    computerPick = scissors;
  }

  // Game logic based on the players pick
  if (playerPick === "") {
    return "Error";
  }
  if (computerPick === playerPick) {
    result = "It's a tie!!";
  }
  if (computerPick === rock && playerPick === paper) {
    result = win;
  }
  if (computerPick === rock && playerPick === scissors) {
    result = lose;
  }
  if (computerPick === paper && playerPick === rock) {
    result = lose;
  }
  if (computerPick === paper && playerPick === scissors) {
    result = win;
  }
  if (computerPick === scissors && playerPick === paper) {
    result = lose;
  }
  if (computerPick === scissors && playerPick === rock) {
    result = win;
  }
  return { result: result, cp: computerPick, pp: playerPick };
};
