/* Pseudocode
0. add release please support
1. add a function which returns 1,2, or 3 at random 
2. add a function which plays a single round of Rock Paper Scissors.
*/

/* playRound() test
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
*/

// start the game
alert("Let's play rock paper scissors!");
game();

function game() {
    // initialize
    let playerScore = 0;
    let computerScore = 0;

    // play the game five times
    for (let i = 0; i < 5; i++) {
        // ask for input
        let playerSelection = prompt("rock, paper, or scissors?");
        const computerSelection = getComputerChoice();
        let y = playRound(playerSelection,computerSelection);
        console.log(y);
        if (y === "You Lose") {
            computerScore ++;
        } else if (y === "You Win") {
            playerScore++;
        }
    }
    // compare final score
    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("Sorry, you lose the game!");
    } else if (playerScore === computerScore) {
        console.log("Its a draw!");
    }
}

function getComputerChoice() {
// Returns a random integer from 1 to 3:
x = Math.floor(Math.random() * 3) + 1;
if (x === 1) {
    return "rock";
} else if (x === 2) {
    return "paper";
} else {
    return "scissors";
}
}


function playRound(playerSelection,computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if ((playerSelection === 'rock') & (computerSelection === 'paper')) {
        return "You Lose";
    } else if ((playerSelection === 'rock') & (computerSelection === 'scissors')) {
        return "You Win";
    } else if ((playerSelection === 'rock') & (computerSelection === 'rock')) {
        return "Its a draw";
    } else if ((playerSelection === 'paper') & (computerSelection === 'paper')) {
        return "Its a draw";
    } else if ((playerSelection === 'paper') & (computerSelection === 'scissors')) {
        return "You Lose";
    } else if ((playerSelection === 'paper') & (computerSelection === 'rock')) {
        return "You Win";
    } else if ((playerSelection === 'scissors') & (computerSelection === 'paper')) {
        return "You Win";
    } else if ((playerSelection === 'scissors') & (computerSelection === 'scissors')) {
        return "Its a draw";
    } else if ((playerSelection === 'scissors') & (computerSelection === 'rock')) {
        return "You Lose";
    }
}