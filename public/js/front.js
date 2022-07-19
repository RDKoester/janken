let result = document.getElementById("result").innerHTML;
let playerPick = document.getElementById("playerPick").innerHTML;
let computerPick = document.getElementById("computerPick").innerHTML;
let ppImg = document.getElementById("ppImg");
let cpImg = document.getElementById("cpImg");

// Changing the image based on what the player picked

if (playerPick === "Rock") {
  ppImg.src = "images/rock.png";
}
if (playerPick === "Paper") {
  ppImg.src = "images/paper.png";
}
if (playerPick === "Scissors") {
  ppImg.src = "images/scissors.png";
}

// Changing the image based on what the computer generated

if (computerPick === "Rock") {
  cpImg.src = "images/rock.png";
}
if (computerPick === "Paper") {
  cpImg.src = "images/paper.png";
}
if (computerPick === "Scissors") {
  cpImg.src = "images/scissors.png";
}

// Redirecting the player to the start of the game

ppImg.addEventListener("click", () => {
  location.href = "/";
});

cpImg.addEventListener("click", () => {
  location.href = "/";
});
