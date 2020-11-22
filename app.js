// computerPlay function - randomly return computers play
var playerSelection = prompt("Enter rock, paper or scissors");
var computerSelection = computerPlay();

function computerPlay() {
    let rps = ["rock", "paper", "scissors"];
    const pick = Math.floor(Math.random() * rps.length);
    return rps[pick] 
}


let yourScore = 0;
let computerScore = 0;
let results = [];


// playerSelection - get user play 

// single round - compare computerSelection and playerSelection and return which is winner string and counter++ winner

function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection == "rock" || playerSelection == "Rock" || playerSelection == "ROCK") &&
        (computerSelection == "scissors" || computerSelection == "Scissors" || computerSelection == "SCISSORS") 
        ||
        (playerSelection == "paper" || playerSelection == "Paper" || playerSelection == "PAPER") && 
        (computerSelection == "rock" || computerSelection == "Rock" || computerSelection == "ROCK") &&
        (yourScore <= 5 || computerScore <= 5)) {
            
            results.push(`You win: ${playerSelection} beats ${computerSelection}!`);
            yourScore++;
            if (yourScore >= 5) {
                results.push(`You have 5 points - you win!`)
            }
            
        } else if (
            (playerSelection == "rock" || playerSelection == "Rock" || playerSelection == "ROCK") &&
            (computerSelection == "paper" || computerSelection == "Paper" || computerSelection == "PAPER") 
            || 
            (playerSelection == "paper" || playerSelection == "Paper" || playerSelection == "PAPER") &&
            (computerSelection = "scissors" || computerSelection == "Scissors" || computerSelection == "SCISSORS") &&
            (yourScore <= 5 || computerScore <= 5)) {
                results.push(`Computer wins: ${computerSelection} beats ${playerSelection}`);
                computerScore++;
                if (computerScore >= 5) {
                    results.push(`Computer has 5 points - it wins!`);
                }
            } else {
              //  results.push("You tied")
            }
        }        
       

function game() {
    while (yourScore < 5 && computerScore < 5) {
        playRound(prompt("Enter rock, paper or scissors"), computerPlay());
    
       // playerSelection = playerSelection.toLowerCase();
    
// //    if (yourScore > computerScore) {
//         console.log("You win");
//     } else if (computerScore > yourScore) {
//         console.log("Computer wins");
//     } else {
//         console.log('You tied');
//     }
}
}
game();


const title = document.getElementById('title');
title.textContent = "Rock, Paper, Scissors";

const score = document.createElement('div');
title.appendChild(score);
score.textContent = results


