// jshint esversion:6

exports.result = function (playerPick) {

  // Generating a random pick for the computer
  const randomPick = Math.ceil(Math.random() * 3);
  let computerPick = "";

  if (randomPick === 1) {
    computerPick = "Rock";
  } else if (randomPick === 2) {
    computerPick = "Paper";
  } else if (randomPick === 3) {
    computerPick = "Scissors";
  }

  // Game logic based on the players pick
  if (playerPick === "") {
    return "Error";
  } else if (computerPick === playerPick) {
    return { result: "It's a tie!!", cp: computerPick, pp: playerPick };
  } else if (computerPick === "Rock" && playerPick === "Paper") {
    return { result: "You win!!", cp: computerPick, pp: playerPick };
  } else if (computerPick === "Rock" && playerPick === "Scissors") {
    return { result: "You lose!!", cp: computerPick, pp: playerPick };
  } else if (computerPick === "Paper" && playerPick === "Scissors") {
    return { result: "You win!!", cp: computerPick, pp: playerPick };
  } else if (computerPick === "Paper" && playerPick === "Rock") {
    return { result: "You lose!!", cp: computerPick, pp: playerPick };
  } else if (computerPick === "Scissors" && playerPick === "Paper") {
    return { result: "You lose!!", cp: computerPick, pp: playerPick };
  } else if (computerPick === "Scissors" && playerPick === "Rock") {
    return { result: "You win!!", cp: computerPick, pp: playerPick };
  }
};
