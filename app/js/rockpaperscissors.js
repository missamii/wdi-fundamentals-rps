////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return var userChoice = prompt("Choose rock, paper or scissors?");
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return var computerChoice = Math.random();

if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if (computerChoice > 0.57) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

console.log("Computer: " + computerChoice);
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    var compare = function (choice1, choice2) {
    if (areThey("paper", "rock", choice1, choice2)) {
        return ("paper wins");
    } else if (areThey("paper", "scissors", choice1, choice2)) {
        return ("scissors wins");
    } else if (areThey("scissors", "rock", choice1, choice2)) {
        return ("rock wins");
    }
    return ("it's a tie!");
}
    return winner;
}
var check = function(choice){
if (choice !== "rock" && choice !== "scissors" && choice !== "paper"){
            userChoice=prompt ("It is invalid. Please choose rock, paper, or scissors.");
            check(userChoice);
        }
};
check(userChoice);

compare (userChoice, computerChoice);

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
     while (playerWins < 5 && computerWins < 5 ) {
        if (playerVscomputer === 'player') {
        playerWins += 1;
        } else if (playerVscomputer === 'computer') {
        computerWins += 1;
        }
    return [playerWins, computerWins];
}

