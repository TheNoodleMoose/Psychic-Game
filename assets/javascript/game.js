console.log("This Works!")


//setup a var that keeps track of wins and losses 
//setup a var that stores the letters guessed already
//when player wins make win counter go up, when they lose make loss counter go up

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 1;
var guesses = 9;
var playersGuess = [];

if (guesses >= 1) {
    function randomLetter() {
        var alphabet2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        valueToUse = alphabet2[Math.floor(Math.random() * alphabet2.length)];
        console.log(`This Chose ${valueToUse}`)
    }
    randomLetter();
    document.onkeyup = function () {
        console.log("Guesses equals " + guesses);
        var playerChoice = event.key;
        var lower = playerChoice.toLowerCase();
        console.log(playerChoice);
        console.log(valueToUse);
        

        if (lower === valueToUse) {
            playersGuess = [];
            alert("That's It!");
            randomLetter();
            guesses = 9;
            wins++;
            document.getElementById("winsnumber").innerHTML = wins;
            document.getElementById("guesses").innerHTML = guesses;
            document.getElementById("guessedLetters").innerHTML = playersGuess;
        }
        else if(guesses > 1 && lower !== valueToUse) {
            alert("That's Not It!");
            guesses--;
            document.getElementById("guesses").innerHTML = guesses;
            playersGuess.push(event.key)
            console.log(playersGuess);
            document.getElementById("guessedLetters").innerHTML = playersGuess;
        } 
        else if(guesses === 1 && lower !== valueToUse) {
            console.log("You Lost")
            alert("You Lost!");
            document.getElementById("losses").innerHTML = losses;
            losses++;
            guesses = 9;
            playersGuess = [];
            document.getElementById("guessedLetters").innerHTML = playersGuess;
            document.getElementById("guesses").innerHTML = guesses;
        }
    }
}

