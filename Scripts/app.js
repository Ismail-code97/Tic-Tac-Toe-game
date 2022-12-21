const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
  {
    name: " ",
    symbol: "X",
  },

  {
    name: " ",
    symbol: "O",
  },
];

const editPlayer1Button = document.getElementById("edit-player-1");
const editPlayer2Button = document.getElementById("edit-player-2");
const playerConfigOverlayElement = document.getElementById("config-overlay");
const backDropElement = document.getElementById("backdrop");
const cancelButtonElement = document.getElementById("cancel-button");
const formElement = document.querySelector("form");
const outputErrorElement = document.getElementById("config-errors");
const startGameButton = document.getElementById("start-game-btn");
const gameAreaElement = document.getElementById("active-game");
const gameFieldElements = document.querySelectorAll("#game-board li");
const activePlayerNameElement = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");
const gameBoardElement = document.getElementById("game-board");

editPlayer1Button.addEventListener("click", openPlayerConfig);
editPlayer2Button.addEventListener("click", openPlayerConfig);
cancelButtonElement.addEventListener("click", closePlayerConfig);
backDropElement.addEventListener("click", closePlayerConfig);
formElement.addEventListener("submit", savePlayerConfig);
startGameButton.addEventListener("click", startNewGame);

for (const gameFieldElement of gameFieldElements) {
  gameFieldElement.addEventListener("click", selectGameField);
}
