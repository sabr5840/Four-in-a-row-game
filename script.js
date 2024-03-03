"use strict";

let gameIsOver = false;
let player1Score = 0;
let player2Score = 0;

window.addEventListener("load", start);

function start() {
    console.log("game started");
    makeBoardClick();
}

function selectCell(row, col) {
    if (readFromCell(row, col) === 0 && !gameIsOver) {
        row = findLowestEmptyRow(col);

        writeToCell(row, col, currentPlayer);
        displayBoard();
        if (checkForWinner(currentPlayer, row, col)) {
            console.log(`Player ${currentPlayer} wins!`);
            updateScores();
            gameIsOver = true;
            displayResult(`Player ${currentPlayer} wins!`);
        } else if (checkForTie()) {
            console.log("It's a tie!");
            gameIsOver = true;
            displayResult("It's a tie!");
        } else {
            nextTurn();
        }
        return true;
    } else {
        return false;
    }
}


function findLowestEmptyRow(col) {
    for (let row = model.length - 1; row >= 0; row--) {
        if (readFromCell(row, col) === 0) {
            return row;
        }
    }
    return -1; // Column is full
}

function updateScores() {
    if (currentPlayer === 1) {
        player1Score++;
        document.getElementById("player1Score").textContent = `${player1Score} wins`;
    } else if (currentPlayer === 2) {
        player2Score++;
        document.getElementById("player2Score").textContent = `${player2Score} wins`;
    }
}

function makeBoardClick() {
    document.querySelector("#board").addEventListener("click", boardClicked);
    document.querySelector("#try-again-btn").addEventListener("click", resetGame);
}

function resetGame() {
    model.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            writeToCell(rowIndex, colIndex, 0);
        });
    });

    currentPlayer = 1;
    gameIsOver = false;
    displayBoard();
    console.log("Game reset");
}

function boardClicked(event) {
    const cell = event.target;
    const col = cell.dataset.col;

    console.log(`Clicked on col: ${col}`);
    selectCell(0, col); // Assuming you always drop the disc from the top
}

function displayBoard() {
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 7; col++) {
            const value = readFromCell(row, col);
            const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);

            switch (value) {
                case 0:
                    cell.textContent = " ";
                    break;
                case 1:
                    cell.textContent = "🩵";
                    break;
                case 2:
                    cell.textContent = "🤍";
                    break;
            }

            // Check if the current cell is part of a winning combination
            if (checkForWinner(currentPlayer, row, col)) {
                cell.classList.add("winner-cell");
            } else {
                cell.classList.remove("winner-cell");
            }
        }
    }
}


const model = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
];

function writeToCell(row, col, value) {
    model[row][col] = value;
}

function readFromCell(row, col) {
    return model[row][col];
}

let currentPlayer = 1;

function nextTurn() {
    if (currentPlayer === 1) {
        currentPlayer = 2;
        setTimeout(computerTurn, 500); // Delay the computer's move for a better user experience
    } else if (currentPlayer === 2) {
        currentPlayer = 1;
    }
}


function computerTurn() {
    const availableCols = [];

    for (let col = 0; col < 7; col++) {
        if (readFromCell(0, col) === 0) {
            availableCols.push(col);
        }
    }

    if (availableCols.length === 0) {
        console.log("Game over");
    } else {
        const randomIndex = Math.floor(Math.random() * availableCols.length);
        const randomCol = availableCols[randomIndex];
        selectCell(0, randomCol);
    }
}



function checkForWinner(player, row, col) {
    // Check rows, columns, and diagonals for a win
    if (
        checkRow(player, row) ||
        checkColumn(player, col) ||
        checkDiagonal(player, row, col)
    ) {
        return true;
    }

    return false;
}

function checkRow(player, row) {
    for (let col = 0; col <= 3; col++) {
        if (
            model[row][col] === player &&
            model[row][col + 1] === player &&
            model[row][col + 2] === player &&
            model[row][col + 3] === player
        ) {
            return true;
        }
    }
    return false;
}

function checkColumn(player, col) {
    for (let row = 0; row <= 2; row++) {
        if (
            model[row][col] === player &&
            model[row + 1][col] === player &&
            model[row + 2][col] === player &&
            model[row + 3][col] === player
        ) {
            return true;
        }
    }
    return false;
}

function checkForTie() {
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 7; col++) {
            if (readFromCell(row, col) === 0) {
                return false; // There are still empty cells, not a tie
            }
        }
    }
    return true; // All cells are filled, it's a tie
}


function checkDiagonal(player, row, col) {
    // Check diagonals starting from the bottom-left and bottom-right corners
    if (
        checkDiagonalFromBottomLeft(player, row, col) ||
        checkDiagonalFromBottomRight(player, row, col)
    ) {
        return true;
    }
    return false;
}

function checkDiagonalFromBottomLeft(player, row, col) {
    for (let i = -3; i <= 0; i++) {
        if (
            row + i >= 0 &&
            col + i >= 0 &&
            row + i + 3 < 6 &&
            col + i + 3 < 7 &&
            model[row + i][col + i] === player &&
            model[row + i + 1][col + i + 1] === player &&
            model[row + i + 2][col + i + 2] === player &&
            model[row + i + 3][col + i + 3] === player
        ) {
            return true;
        }
    }
    return false;
}

function checkDiagonalFromBottomRight(player, row, col) {
    for (let i = -3; i <= 0; i++) {
        if (
            row + i >= 0 &&
            col - i >= 0 &&
            row + i + 3 < 6 &&
            col - i - 3 < 7 &&
            model[row + i][col - i] === player &&
            model[row + i + 1][col - i - 1] === player &&
            model[row + i + 2][col - i - 2] === player &&
            model[row + i + 3][col - i - 3] === player
        ) {
            return true;
        }
    }
    return false;
}

function displayResult(message) {
    const modal = document.getElementById("myModal");
    const modalMessage = document.getElementById("modalMessage");

    modalMessage.textContent = message;
    modal.style.display = "block";

    // Close the modal when the close button is clicked
    const closeModalButton = document.getElementById("closeModal");
    closeModalButton.onclick = function() {
        modal.style.display = "none";
    };
}

window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

