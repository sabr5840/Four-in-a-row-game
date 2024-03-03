# Four in a Row Game

## Introduction

Welcome to the Four in a Row Game, a classic two-player connect-four game implemented in JavaScript. This interactive game allows players to take turns dropping colored discs into a vertically suspended grid. The objective is to connect four of their discs in a row, either horizontally, vertically, or diagonally, before the opponent.

## Code Overview

The codebase is written in JavaScript and utilizes HTML and CSS for the user interface. Here's a brief overview of the key components:

Game Logic: The game logic is implemented in script.js, handling the board, player turns, checking for winners, and computer moves in single-player mode.
HTML Structure: The game board and user interface elements are structured in index.html, including the grid, score display, and the "Try Again" button.
Styling: Styling is defined in style.css to provide a visually appealing and responsive user interface.

## Implementation Procedure

Initialization: The game starts when the window loads, triggering the start function in script.js.
Player Moves: Players take turns clicking on a column to drop their colored discs. The game checks for a winner or a tie after each move.
Computer Opponent: In single-player mode, the computer opponent makes a move after the player. The computer's move is delayed for a better user experience.
Resetting the Game: The "Try Again" button allows players to reset the game and start a new round.

## Deployment

This Four in a Row Game can be experienced live on GitHub Pages at https://sabr5840.github.io/Four-in-a-row-game/. Simply visit the provided link to play the game in your browser.
