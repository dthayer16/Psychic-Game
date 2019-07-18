var wins = 0;

var losses = 0;

var guessesLeft = 9;

var winsText = document.getElementById("winText");
var lossesText = document.getElementById("lossText");
var guessesLeftText = document.getElementById("guessesText");
var letterSoFarText = document.getElementById("lettersSoFar");

var lettersGuessed = [];

function generateAlphabet() {
    var alphabet = [];
    for (var i = 97; i < 123; i++) {
        alphabet.push(String.fromCharCode(i));
    }
    return alphabet;
};

function generateScore() {
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left " + guessesLeft;
    letterSoFarText.textContent = "You have guessed " + keysPressed;
};

document.onkeyup = function (e) {

    var userGuess = e.key.toLocaleLowerCase();

    var computerGuess = generateAlphabet(Math.floor(Math.random() * generateAlphabet.length));

    var keysPressed = [];

    if (guessesLeft === 0) {
        return;
    }

    if (keysPressed.indexOf(e.key) === -1) {
        keysPressed.push(e.key);

        if (userGuess === computerGuess) {
            wins++;
        } else {
            losses++;
        }
        guessesLeft--;
        generateScore();
    }
};