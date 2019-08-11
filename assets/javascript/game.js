// Array of letters
var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Set all the beginning values
let wins = 0;
let losses = 0;
let guesses = 0;
let guessesRemaining = 0;
var guessesSoFar = [];
var letterToGuess = null;

// Have the computer generate a random letter from the array.
var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
// Give the user 9 guesses
function updateGuessesLeft() {
    // Changes the html to guessesLeft
    document.querySelector('#guessesRemaining').innerHTML = "Guesses Left: " + guessesRemaining;
};

// Update the letterToGuess
function updateletterToGuess() {
    this.letterToGuess = this.computerChoice(Math.floor(Math.random() * this.computerChoice.length);
};

// Update the letters that the user has guessed already. Take what the user has input so far and display
function updateGuessesSoFar() {
    document.querySelector('#let').innerHTML = "Your Guesses So Far: " + guessesSoFar.join(', ');

};

// Reset function
var Reset = function () {
    totalGuesses = 9;
    guessesRemaining = 9;
    guessesSoFar = [];
     {
        updateletterToGuess();
        updateGuessesLeft();
        updateGuessesSoFar();
    }

    updateletterToGuess();
    updateGuessesLeft();
}

// Set key release so it becomes users guess
document.onkeyup =function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check =computerChoice.includes(userGuess);

    if (check === false) {
        alert("That was an invalde guess, try again!");
        return false;
    }
}