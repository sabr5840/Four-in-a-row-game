# Connect Four Game - README

This repository contains a computerized version of the classic game "Connect Four." The game has been implemented based on the following procedure:

## Game Overview

The game utilizes a 6x7 model, where two players, a human player, and the computer, place their tokens (1 and 2) in the columns. The objective is to connect four tokens either horizontally, vertically, or diagonally. The computer makes random choices for token placement.


## The code in general

- Clear separation between the model and view.
- HTML and CSS has been used for the view.
- Javascript
- Model represented as a grid of 6 rows and 7 columns.
- Functions to manipulate the model (remove tokens, check column height, add tokens).
- Functions to check for a winner horizontally, vertically, and diagonally.

## Procedure of implementation

1. **Model Setup:** Initially, create the game model in the console. Add tokens without checking for four in a row.
2. **View Integration:** Connect the model to the view, making the game interactive in the browser. Players can take turns adding tokens.
3. **Controller Implementation:** Implement the controller to allow the computer to make random choices for token placement.
4. **Winning Conditions:** Develop functions to check for four in a row, starting with vertical, then horizontal, and finally diagonal.

