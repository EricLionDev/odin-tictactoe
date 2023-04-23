let playerTurn = 1;
const gameCells = ["", "", "", "", "", "", "", "", ""];
const gameSolutions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [2, 5, 8],
  [3, 5, 7],
];

function renderMenu() {
  // game area container
  const gameArea = document.createElement("div");
  gameArea.id = "gameArea";
  document.body.appendChild(gameArea);
  // menu  container
  const menuContainer = document.createElement("div");
  menuContainer.id = "menuContainer";
  gameArea.appendChild(menuContainer);
  // form
  const menuForm = document.createElement("form");
  menuForm.id = "menuForm";
  menuContainer.appendChild(menuForm);
  // Player 1 options
}
renderMenu();

function renderBoard() {
  const boardContainer = document.createElement("div");
  boardContainer.id = "board-container";
  gameArea.appendChild(boardContainer);

  gameCells.forEach((_cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("board-piece");
    cellElement.id = index;
    cellElement.addEventListener("click", useTurn);
    boardContainer.appendChild(cellElement);
  });
}
renderBoard();

function useTurn(e) {
  console.log(e.target.hasChildNodes());
  if (!e.target.hasChildNodes()) {
    const moveSelected = document.createElement("div");
    moveSelected.classList.add("placeX");
    moveSelected.innerHTML = "X";
    e.target.appendChild(moveSelected);
  }
}
