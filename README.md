# MAST5112-ICE-TASK-2
Tic Tac Toe / X & O — Version 1
An interactive, web-based implementation of the classic Tic Tac Toe (X & O) game built with HTML5, CSS3, and JavaScript (ES6).OverviewThis repository tracks the step-by-step development of a 2-player Tic Tac Toe game across sequential development stages (Stage 0 to Stage 7). The project demonstrates modular front-end architecture, DOM manipulation, state management, and clear game logic execution.

Features2-Player Gameplay: Seamless turn-switching between Player X and Player O.

Real-Time Status Display: Live feedback tracking current player turns, game victory, or draw state.

Move Validation: Disables selection of filled cells and locks the grid once a match ends.

Instant Game Reset: Clears board memory and resets UI state with a single click.  Responsive Grid UI: Centered 3x3 layout built with CSS Grid, styled for desktop and mobile devices.

File Structureindex.html — Page structure, board wrapper, and grid buttons style.css — CSS Grid configuration, layout styling, and hover states script.js — Game loops, win matrix checking, and event handling README.md — Project documentation and stage walkthrough Development StagesStage 0 (Base Setup): Built initial HTML boilerplate structure and main application container.  Stage 1 (Grid Layout): Constructed 3x3 layout using CSS Grid and styled empty cell buttons.  Stage 2 (DOM Binding): Linked JavaScript event listeners to grid cell elements.

Stage 3 (State Initialization): Set up global tracking arrays and variables (boardState, currentPlayer, isGameActive).

Stage 4 (Turn Mechanics): Added turn-toggle logic and dynamic UI status text updates.

Stage 5 (Win Detection): Implemented win-check algorithm evaluating combinations across rows, columns, and diagonals.

Stage 6 (Draw Conditions): Added full-board evaluation to detect tie games.

Stage 7 (Reset & Polish): Added restart button logic, cell locking, and final UI adjustments.

Game Logic & Win ConditionsThe board relies on a 9-element array indexed from 0 to 8 mapped directly to the CSS Grid layout: Plaintext 0 | 1 | 2
---+---+---
 3 | 4 | 5
---+---+---
 6 | 7 | 8
The application checks for matches across 8 possible winning combinations:  Horizontal Rows: [0, 1, 2], [3, 4, 5], [6, 7, 8] Vertical Columns: [0, 3, 6], [1, 4, 7], [2, 5, 8] Diagonals: [0, 4, 8], [2, 4, 6]  How to RunClone or download this repository to your local machine.  Open index.html directly in any web browser, or launch it in VS Code using the Live Server extension.  Tech StackHTML5: Semantic elements and dataset attributes (data-index) CSS3: CSS Grid, Flexbox, custom styling, and transition effects JavaScript: ES6+ Array handling, arrow functions, and DOM event handling  
