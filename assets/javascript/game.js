console.log("This Works!")

//makes array of letters
//setup a var that keeps track of wins and losses 
//setup a var that stores the letters guessed already
//when player wins make win counter go up, when they lose make loss counter go up

var alphabet = ['a', 'b' , 'c' , 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 
                'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(randomLetter);
var guess = prompt("What Letter Am I Thinking Of?");
var lower = guess.toLowerCase();
if(lower === randomLetter) {
    alert("That's It!");
}
else {
    alert("That's Not It!");
}

