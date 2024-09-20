# Guess My Number!

## Overview
"Guess My Number!" is a fun, interactive game where you try to guess a number between 1 and 20 within a 30-second time limit. This game is designed to be played in a web browser.

## Features

- **Interactive Play**: Type in your guess and see immediate feedback on whether your guess is too high or too low.
- **Countdown Timer**: You have 30 seconds to make your guess.
- **High Score Tracking**: Keeps track of the highest score achieved during the session.
- **Audio Feedback**: Sounds play for wrong guesses, game over, and victory.

## Gameplay

1. **Start the Game**: The game starts automatically when the page loads. The timer begins counting down from 30 seconds.
2. **Make a Guess**: Enter a number between 1 and 20 and click the "Check!" button to submit your guess.
3. **Feedback**:
   - If the guess is too low, a sound plays, and you are prompted to guess higher.
   - If the guess is too high, a sound plays, and you are prompted to guess lower.
   - If the guess is correct, the game celebrates your victory with a sound and updates the high score if it's the highest yet.
4. **End of Game**:
   - If you run out of time or reach a score of zero, the game ends with a "Game over!" message and a specific sound.
   - You can restart the game by clicking the "Again!" button.

## Scripts

- **Main Game Logic**: The core functionality, including checking guesses, updating scores, and managing game states.
- **Timers**: Manages the countdown and stops the timer when necessary.
- **Event Listeners**: Handles button clicks for guessing and restarting the game.

## Files Included

- **index.html**: Contains the structure of the game interface.
- **style.css**: Styles the visual aspects of the game.
- **script.js**: Includes all the interactive elements and game logic.
- **uh.mp3, victory.mp3, gameover.mp3**: Audio files for different game events.

## Setup

To play the game, open `index.html` in a web browser. Ensure all associated files are in the same directory to load the game correctly.
