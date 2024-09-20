console.log("inde");

const lblMessage = document.querySelector(".message");
console.log(lblMessage)
console.log(lblMessage.textContent)

let lblNumber = document.querySelector(".number");
console.log(lblNumber);

const lblScore = document.querySelector(".score");
console.log(lblScore);

const inpGuess = document.querySelector(".guess");
console.log(inpGuess);

const secretNumber = Math.floor(Math.random() * 20) + 1;
console.log("Det hemmelige nummer der skal gættes er: ", secretNumber);

let score = 10;
document.querySelector(".score").textContent = score;
let highscore = 0;
document.querySelector(".highscore").textContent = highscore;

const wrongGuessSound = new Audio('uh.mp3');
const victorySound = new Audio("victory.mp3");
const gameoverSound = new Audio("gameover.mp3")


function checkGuess() {
    const guess = Number(inpGuess.value);
    console.log("Brugerens gæt: " + guess);

    if (!guess) {
        lblMessage.textContent = "Not a number, try again";
    } else if (guess === secretNumber) {
        lblMessage.textContent = "You guessed it! Congratulations"
        lblNumber.textContent = secretNumber.toString();
        document.body.style.backgroundColor = 'darkgreen';
        highscore = score;
        document.querySelector(".highscore").textContent = score; // Opdaterer highscoreren med den nuværende score.
        victorySound.play();
        stopTimer();
        document.querySelector(".btn.check").disabled = true;
    } else if (guess < secretNumber) {
        wrongGuessSound.play();
        lblMessage.textContent = "Too low. Try again!"
        score = score - 1;
    } else {
        wrongGuessSound.play();
        lblMessage.textContent = "Too high. Try again!"
        score = score - 1;
    }

    // Opdaterer score efter hvert 'check'
    document.querySelector(".score").textContent = score;


    if (score <= 0) {
        endGame();
    }
}
document.querySelector('.btn.check').addEventListener('click', checkGuess)
document.querySelector(".btn.again").addEventListener("click", function () {
    location.reload();
});

// Countdown - Start

let timeLeft = 30;
const timerDisplay = document.querySelector(".timer");
let timerId; // bruges til at stoppe det samme interval, som er startet
function startTimer() {
    timerId = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            score = 0;
            document.querySelector(".score").textContent = score;
            clearInterval(timerId);
            endGame();
        }
    }, 1000);
}

// stop interval
function stopTimer() {
    clearInterval(timerId);
}

// Endgame
function endGame() {
    lblMessage.textContent = "Game over!";
    document.body.style.backgroundColor = "darkred";
    lblNumber.textContent = "😭";
    document.querySelector(".number").textContent = lblNumber.textContent;
    document.querySelector(".btn.check").disabled = true;
    timeLeft = 0;
    timerDisplay.textContent = timeLeft;
    gameoverSound.play();
}

// Restart/Reload logic
document.querySelector(".btn.again").addEventListener("click", function () {
    location.reload();
    timeLeft = 30;  // Reset timer
    timerDisplay.textContent = '30';  // Reset timer display
    startTimer();  // Restart timer
});
// Starts timer
startTimer();