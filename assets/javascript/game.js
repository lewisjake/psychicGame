// Array of letters
var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Set all the beginning values
let wins = 0;
let losses = 0;
let guesses = 9;
let guessesRemaining = 9;
var guessesSoFar = [];
var letterToGuess = null;

// Have the computer generate a random letter from the array.
var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
// Give the user 9 guesses
function updateGuessesRemaining() {
    // Changes the html to guessesRemaining
    document.querySelector('#guessesRemaining').innerHTML = "Guesses Left: " + guessesRemaining;
};

// Update the letterToGuess
function updateletterToGuess() {
    this.letterToGuess = this.computerChoice(Math.floor(Math.random() * this.computerChoice.length));
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


// Set key release so it becomes users guess
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = computerChoice.includes(userGuess);

    if (check === false) {
        alert("That was an invalde guess, try again!");
        return false;
    }
    else if (check === true) {
        // If the user's choice was a char, it will add the guess to the array of guessed letters
        guessesRemaining --; 
        guessedSoFar.push(usersGuess);
        updateGuessRemaining();
        updateGuessesSoFar();

        if (guessesRemaining > 0) {
            if (userGuess == letterToGuess) {
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                userGuess = userGuess.toUpperCase();
                Reset();
            }
        
        } else if (guessesRemaining == 0) {
            // User will lose and then we update the html to display a loss.
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            // App will reset after this.
            Reset();
        }
    return false;
} else {
    alert("Error");
}
};
}