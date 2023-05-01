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

renderBoard();

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

function useTurn(e, piece) {
  console.log(e.target.hasChildNodes());
  if (!e.target.hasChildNodes()) {
    const moveSelected = document.createElement("div");
    moveSelected.innerHTML = "";
    e.target.appendChild(moveSelected);
  }
}
