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
  // play 1 option area container 1
  const inputBox1 = document.createElement("div");
  inputBox1.classList.add("input-box");
  menuForm.appendChild(inputBox1);

  // p1o name label
  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "playerOneName");
  nameLabel.classList.add("playerDetails");
  nameLabel.textContent = "Enter Your Name: ";
  inputBox1.appendChild(nameLabel);

  // p1o name input box
  const nameInput = document.createElement("input");
  nameInput.id = "playerName";
  nameInput.classList.add("playerOptionInput");
  nameInput.setAttribute("name", "playerOneName");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("maxlength", "24");
  nameInput.setAttribute("Placeholder", "Player One's Name");
  nameInput.setAttribute("required", true);
  inputBox1.appendChild(nameInput);

  // p1 choice container 2
  const inputBox2 = document.createElement("div");
  inputBox2.classList.add("input-box");
  menuForm.appendChild(inputBox2);

  // p1 choice label
  const choiceLabel = document.createElement("label");
  choiceLabel.id = "choiceLabel";
  choiceLabel.classList.add("playerDetails");
  choiceLabel.textContent = "Choose your playing piece:";
  choiceLabel.setAttribute("name", "pieceChoices");
  inputBox2.appendChild(choiceLabel);

  // p1 input choice X or O
  const choiceSelectElement = document.createElement("select");
  choiceSelectElement.id = "selectedPiece";
  choiceSelectElement.setAttribute("name", "pieceChoices");
  choiceSelectElement.classList.add("playerOptionInput");
  choiceSelectElement.setAttribute("Placeholder", "Player One's Name");
  inputBox2.appendChild(choiceSelectElement);

  // X OPTION
  const chooseOptionX = document.createElement("option");
  chooseOptionX.setAttribute("value", "X");
  chooseOptionX.textContent = "X";
  chooseOptionX.classList.add("pieceSelectChoices");
  choiceSelectElement.appendChild(chooseOptionX);

  // O OPTION
  const chooseOptionO = document.createElement("option");
  chooseOptionO.setAttribute("value", "O");
  chooseOptionO.textContent = "O";
  chooseOptionO.classList.add("pieceSelectChoices");
  choiceSelectElement.appendChild(chooseOptionO);
}
renderMenu();
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
