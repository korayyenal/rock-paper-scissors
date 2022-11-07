/* Pseudocode
0. add release please support
1. add a function which returns 1,2, or 3 at random 
2. add a function which plays a single round of Rock Paper Scissors.
*/

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
        return "You Lose! Paper beats Rock";
    } else if ((playerSelection === 'rock') & (computerSelection === 'scissors')) {
        return "You Win! Rock beats Scissors";
    } else if ((playerSelection === 'rock') & (computerSelection === 'rock')) {
        return "It's a draw!";
    } else if ((playerSelection === 'paper') & (computerSelection === 'paper')) {
        return "It's a draw!";
    } else if ((playerSelection === 'paper') & (computerSelection === 'scissors')) {
        return "You Lose! Scissors beats Paper";
    } else if ((playerSelection === 'paper') & (computerSelection === 'rock')) {
        return "You Win! Paper beats Rocks";
    } else if ((playerSelection === 'scissors') & (computerSelection === 'paper')) {
        return "You Win! Scissors beats Paper";
    } else if ((playerSelection === 'scissors') & (computerSelection === 'scissors')) {
        return "It's a draw!";
    } else if ((playerSelection === 'scissors') & (computerSelection === 'rock')) {
        return "You Lose! Rock beats Scissors";
    }
}