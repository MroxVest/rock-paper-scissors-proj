//All returned values will run in console for now

//Take in the players choice - playerSelection
let playerSelection = "PaPer";
let computerSelection = "";
let finalResponse = "";

    //playerSelection should be case-insensitive to avoid caps issues
    playerSelection = playerSelection.toLowerCase();

    //Spellcheck playerSelection
    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
        computerPlay();
        compareSelections(computerSelection, playerSelection);
        console.log(finalResponse);
    }
    else {
        console.log("Please check your spelling and try again.");
    }


//computerPlay function to return random rock, paper or scissors
function computerPlay() {
    //place rock, paper and scissors into an array
    let computerChoiceArray = ["rock", "paper", "scissors"];
    let computerIndex = getRandomInt();
    //choose random number in array 0-2 (rock, paper or scissors)
    function getRandomInt(min, max) {
        min = Math.ceil(0);
        max = Math.floor(3);
        return Math.floor(Math.random() * (max - min) + min);
    };

    computerSelection = computerChoiceArray[computerIndex];

    return computerSelection;
}

//Function to compare computerSelection with playerSelection and return a string
function compareSelections (computerChoice, playerChoice) {
    if (computerChoice === "rock") { //computerIndex = 0
        if (playerChoice === "rock") {
            finalResponse = "Tie game!";
        } else if (playerChoice === "paper") {
            finalResponse = "You win!";
        } else {
            finalResponse = "You lose.";
        }
    } else if (computerChoice === "paper") { //computerIndex = 1
        if (playerChoice === "rock") {
            finalResponse = "You lose.";
        } else if (playerChoice === "paper") {
            finalResponse = "Tie game!";
        } else {
            finalResponse = "You win!";
        }
    } else {                                 //computerIndex = 2
        if (playerChoice === "rock") {
            finalResponse = "You win!";
        } else if (playerChoice === "paper") {
            finalResponse = "You lose.";
        } else {
            finalResponse = "Tie game!";
        }
    }
};