let playerTurn = 1;
let menuForm = document.getElementById("menuForm");
let turnDisplay = document.getElementById("turnDisplay");
let turnInformation = document.getElementById("turnInformation");
let winnerInfo = document.getElementById("winnerDisplay");
let restartBtn = document.getElementById("restart-btn-container");
const gameCells = ["", "", "", "", "", "", "", "", ""];
const gameSolutions = [
  ["1", "2", "3"],
  ["1", "4", "7"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["1", "5", "9"],
  ["2", "5", "8"],
  ["3", "5", "7"],
];
turnDisplay.style.display = "none";
restartBtn.style.display = "none";
let myPlayers = [];

function renderBoard() {
  const boardContainer = document.createElement("div");
  boardContainer.id = "board-container";
  gameArea.appendChild(boardContainer);

  gameCells.forEach((_cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("board-piece");
    cellElement.id = index + 1;
    cellElement.addEventListener("click", useTurn);
    boardContainer.appendChild(cellElement);
  });
}
renderBoard();

function useTurn(e) {
  if (!e.target.hasChildNodes()) {
    if (playerTurn == "1") {
      const moveSelected = document.createElement("div");
      moveSelected.innerHTML = playerOne.piece;
      e.target.appendChild(moveSelected);
      playerOne.pieceList.push(e.target.id);
      if (arraysMatch(gameSolutions, playerOne.pieceList) === true) {
        gameOver(playerOne);
        console.log("gg");
      } else if (
        playerOne.pieceList.length == 5 &&
        arraysMatch(gameSolutions, playerOne.pieceList) === false
      ) {
        turnInformation.innerText = "";
        winnerInfo.innerText = `DRAW!`;
        restartBtn.style.display = "flex";
      } else {
        playerTurn = "2";
        turnInformation.innerText = `${playerTwo.name}, it is your turn!`;
      }
    } else if (playerTurn == "2") {
      const moveSelected = document.createElement("div");
      moveSelected.innerHTML = playerTwo.piece;
      e.target.appendChild(moveSelected);
      playerTwo.pieceList.push(e.target.id);
      if (arraysMatch(gameSolutions, playerTwo.pieceList) === true) {
        gameOver(playerTwo);
        console.log("gg");
      } else {
        playerTurn = "1";
        turnInformation.innerText = `${playerOne.name}, it is your turn!`;
      }
    }
  }
}

function Player(name, piece) {
  this.name = name;
  this.piece = piece;
  this.pieceList = [];
}
let playerOne;
let playerTwo;

function setPlayers() {
  playerOne = new Player(
    document.getElementById("playerName").value,
    document.getElementById("selectedPiece").value
  );
  if (playerOne.piece == "X") {
    playerTwo = new Player("Player 2", "O");
  } else {
    playerTwo = new Player("Player 2", "x");
    console.log(playerTwo.piece);
  }

  // change menu display

  menuForm.style.display = "none";
  turnDisplay.style.display = "block";
  turnInformation.innerText = `${playerOne.name}, it is your turn!`;
}

function arraysMatch(arrayOfArrays, arrayToCheck) {
  return arrayOfArrays.some(
    (arr) =>
      arr.length === arrayToCheck.length &&
      arr.every((val) => arrayToCheck.includes(val))
  );
}

function gameOver(obj) {
  turnInformation.innerText = "";
  winnerInfo.innerText = `${obj.name} is the Winner!`;
  const boardPieceList = document.getElementsByClassName("board-piece");

  Array.from(boardPieceList).forEach((element) => {
    element.removeEventListener("click", useTurn);
  });
  restartBtn.style.display = "flex";
}
