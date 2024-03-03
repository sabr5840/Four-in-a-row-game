# Four in a Row Game

Welcome to the Four in a Row Game! This is a simple web-based game where you can play against the computer and try to connect four of your discs in a row. The game features a user-friendly interface and an option to reset the game and try again.

## Demo

Check out the live demo on GitHub Pages: Four in a Row Game

## Overview of the Code

The JavaScript code (script.js) for this project implements the game logic. Here's a brief overview:

- The game initializes with a 6x7 game board.
- Players take turns to drop their discs into columns.
- The game checks for a winner by examining rows, columns, and diagonals.
- If a player wins or the game results in a tie, the scores are updated, and the option to try again is provided.
- The computer player makes random moves for player 2.

## Implementation Details

### Important Functions:
- start(): Initializes the game when the window loads.
- selectCell(row, col): Handles the selection of a cell by a player.
- updateScores(): Updates the scores when a player wins.
- resetGame(): Resets the game to its initial state.
- boardClicked(event): Handles clicks on the game board.
- displayBoard(): Displays the current state of the game board.
- computerTurn(): Implements the computer's move.
- checkForWinner(player, row, col): Checks for a winning combination.

### Styling:
The game is styled using CSS (style.css). It features a simple and clean interface with a responsive design.

## How to Play

1. Click on a column to drop your disc.
2. Try to connect four of your discs in a row horizontally, vertically, or diagonally.
3. The game will notify you if you win or if it's a tie.
4. Click "Try Again" to reset the game and play again.