console.log("This Works!")


//setup a var that keeps track of wins and losses 
//setup a var that stores the letters guessed already
//when player wins make win counter go up, when they lose make loss counter go up

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
;

var wins = 0;
var losses = 1;
var guesses = 9;
var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
var playersGuess = [];

if (guesses >= 1) {
    document.onkeyup = function () {
        console.log("Guesses equals " + guesses);
        var playerChoice = event.key;
        var lower = playerChoice.toLowerCase();
        console.log(playerChoice);
        console.log(randomLetter);
        

        if (lower === randomLetter) {
            playersGuess = [];
            alert("That's It!");
            guesses = 9;
            wins++;
            document.getElementById("winsnumber").innerHTML = wins;
            document.getElementById("guesses").innerHTML = guesses;
            document.getElementById("guessedLetters").innerHTML = playersGuess;
        }
        else if(guesses >= 1 && lower !== randomLetter) {
            alert("That's Not It!");
            guesses--;
            document.getElementById("guesses").innerHTML = guesses;
            playersGuess.push(event.key)
            console.log(playersGuess);
            document.getElementById("guessedLetters").innerHTML = playersGuess;
        } 
        else if(guesses === 0) {
            alert("You Lost!");
            document.getElementById("losses").innerHTML = losses;
            losses++;
            guesses = 10;
            playersGuess = [];
        }
    }
}

