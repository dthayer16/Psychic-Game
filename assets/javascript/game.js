var wins = 0;

var losses = 0;

var guessesLeft = 9;

var keysPressed = [];

var winsText = document.getElementById("winText");
var lossesText = document.getElementById("lossText");
var guessesLeftText = document.getElementById("guessesText");
var letterSoFarText = document.getElementById("lettersSoFar");

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
var alphabet = generateAlphabet();
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

document.onkeyup = function (e) {
    
    var userGuess = e.key.toLocaleLowerCase();

    if (guessesLeft === 0) {
        losses++;
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        guessesLeft = 9;
        keysPressed = []
    }

    if (keysPressed.indexOf(e.key) === -1) {
        keysPressed.push(e.key);

        if (userGuess === computerGuess) {
            wins++;
            computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
            guessesLeft = 9;
            keysPressed = []
        } else {
            guessesLeft--;
        }
        generateScore();
    }
};


