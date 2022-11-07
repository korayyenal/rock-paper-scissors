/* Pseudocode
1. add a function which returns 1,2, or 3 at random 
2. 
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