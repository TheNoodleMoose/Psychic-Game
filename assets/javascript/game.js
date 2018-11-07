

//Variable For Wins
var wins = 0;
//Variable For Wins
var losses = 0;
//Variable For Guesses
var guesses = 9;
//Variable that stores players guessed letters
var playersGuess = [];

//If statement to check if guesses are greater than equal to 1
if (guesses >= 1) {

    //Function that outputs a random letter when called
    function randomLetter() {
        var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        valueToUse = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(`This Chose ${valueToUse}`)
    }
    // Calling The Function to get a random letter before the onkeyup function starts
    randomLetter();

    //When the key is lifted up the function begins
    document.onkeyup = function () {

        //Variable that stores what the button pressed by the player is
        var playerChoice = event.key;

        //This converts what the player chose into lowercase to make sure there is no problems with compatibility
        var lower = playerChoice.toLowerCase();
        
        //Used to see what the computer chose at its random number
        console.log(valueToUse);
        
        // This statement says, If the players key input equals what the computer chose, they win
        if (lower === valueToUse) {
            //If They win empty the guesses array
            playersGuess = [];
            //alert that they have guessed the right answer
            alert("That's It!");
            //call randomLetter to get a new letter
            randomLetter();
            //Reset guesses back to 9
            guesses = 9;
            //add 1 to wins
            wins++;

            //These update the new values  in the html when the player wins
            document.getElementById("winsnumber").innerHTML = wins;
            document.getElementById("guesses").innerHTML = guesses;
            document.getElementById("guessedLetters").innerHTML = playersGuess;
        }
        // If guesses is greater than 1 and the players choice is wrong, subtract guesses and tell them they are wrong
        else if(guesses > 1 && lower !== valueToUse) {
            //If they guess wrong, alert them they guessed wrong
            alert("That's Not It!");
            //subtract from guesses
            guesses--;
            //Push their guess to the array playerGuess
            playersGuess.push(event.key)
            //Update the html with the new values
            document.getElementById("guesses").innerHTML = guesses;
            document.getElementById("guessedLetters").innerHTML = playersGuess;
        }
        //If statement for losing condition, if the guess is equal to one and not the right answer, they lose 
        else if(guesses === 1 && lower !== valueToUse) {
            //if they lose, alert that they lost
            alert("You Lost!");

            //add to losses
            losses++;
            //Reset guesses back to 9
            guesses = 9;
            //Set playerGuess back to an empty array
            playersGuess = [];

            //Update all the html with the new values
            document.getElementById("losses").innerHTML = losses;
            document.getElementById("guessedLetters").innerHTML = playersGuess;
            document.getElementById("guesses").innerHTML = guesses;
        }
    }
}

