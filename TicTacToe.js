 // JavaScript code here
 const board = document.getElementById("board");
 const cells = [];
 const message = document.getElementById("message");
 const restartButton = document.getElementById("restartButton");
 let currentPlayer = "X";
 let gameBoard = ["", "", "", "", "", "", "", "", ""];
 let gameActive = true;

 function checkWin() {
   const winPatterns = [
     [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
     [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
     [0, 4, 8], [2, 4, 6] // Diagonals
   ];

   for (const pattern of winPatterns) {
     const [a, b, c] = pattern;
     if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
       gameActive = false;
       return true;
     }
   }

   return false;
 }

 function checkDraw() {
   return " " in gameBoard;
 }

 function handleCellClick(event) {
   const cellIndex = event.target.dataset.index;

   if (gameBoard[cellIndex] || !gameActive) return;

   gameBoard[cellIndex] = currentPlayer;
   event.target.textContent = currentPlayer;

   if (checkWin()) {
     message.textContent = `Player ${currentPlayer} wins!`;
     gameActive = false;
     restartButton.style.display = "block";
   } else if (checkDraw()) {
     message.textContent = "It's a draw!";
     gameActive = false;
     restartButton.style.display = "block";
   } else {
     currentPlayer = currentPlayer === "X" ? "O" : "X";
     message.textContent = `Player ${currentPlayer}'s turn`;
   }
 }

 function createBoard() {
   for (let i = 0; i < 9; i++) {
     const cell = document.createElement("div");
     cell.classList.add("cell");
     cell.dataset.index = i;
     cell.addEventListener("click", handleCellClick);
     board.appendChild(cell);
     cells.push(cell);
   }
 }

 function restartGame() {
   gameBoard = ["", "", "", "", "", "", "", "", ""];
   cells.forEach(cell => {
     cell.textContent = "";
   });
   gameActive = true;
   currentPlayer = "X";
   message.textContent = "";
   restartButton.style.display = "none";
 }

 createBoard();
