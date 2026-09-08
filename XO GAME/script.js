// Game State Variables
const cells = document.querySelectorAll('.cell');
const statusText = document.querySelector('#status');
const restartBtn = document.querySelector('#restartBtn');

const winPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
];

let boardState = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let isGameActive = true;

// Initialize Game
function initGame() {
  cells.forEach(cell => cell.addEventListener('click', handleCellClick));
  restartBtn.addEventListener('click', restartGame);
  statusText.textContent = `Player ${currentPlayer}'s Turn`;
}

// Cell Click Logic
function handleCellClick(e) {
  const cell = e.target;
  const index = cell.getAttribute('data-index');

  if (boardState[index] !== "" || !isGameActive) {
    return;
  }

  updateCell(cell, index);
  checkResult();
}

// Update UI and Array State
function updateCell(cell, index) {
  boardState[index] = currentPlayer;
  cell.textContent = currentPlayer;
  cell.classList.add('taken');
}

// Switch Turns
function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusText.textContent = `Player ${currentPlayer}'s Turn`;
}

// Check for Win or Draw
function checkResult() {
  let won = false;

  for (let i = 0; i < winPatterns.length; i++) {
    const [a, b, c] = winPatterns[i];
    if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
      won = true;
      break;
    }
  }

  if (won) {
    statusText.textContent = `Player ${currentPlayer} Wins!`;
    isGameActive = false;
    return;
  }

  if (!boardState.includes("")) {
    statusText.textContent = `It's a Draw!`;
    isGameActive = false;
    return;
  }

  switchPlayer();
}

// Reset Game State
function restartGame() {
  boardState = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  isGameActive = true;
  statusText.textContent = `Player ${currentPlayer}'s Turn`;

  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove('taken');
  });
}

// Run Game
initGame();