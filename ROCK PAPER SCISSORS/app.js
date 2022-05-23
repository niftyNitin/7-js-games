const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice();
    findResult();
}));

function generateComputerChoice() {
    choicemap = {
        1: "rock",
        2: "paper",
        3: "scissors"
    };
    choice = Math.floor(Math.random() * 3) + 1;
    computerChoice = choicemap[choice];
    computerChoiceDisplay.innerHTML = computerChoice;
}

function findResult() {
    if (computerChoice == "rock" && userChoice == "paper") {
        result = "You win!";
    }
    if (computerChoice == "rock" && userChoice == "rock") {
        result = "It's a tie!"
    }
    if (computerChoice == "rock" && userChoice == "scissors") {
        result = "You Lose :(";
    }
    if (computerChoice == "scissors" && userChoice == "paper") {
        result = "You Lose! :(";
    }
    if (computerChoice == "scissors" && userChoice == "rock") {
        result = "You Win! :)";
    }
    if (computerChoice == "scissors" && userChoice == "scissors") {
        result = "It's a tie!";
    }
    if (computerChoice == "paper" && userChoice == "rock") {
        result = "You Lose! :(";
    }
    if (computerChoice == "paper" && userChoice == "scissors") {
        result = "You Win! :)";
    }
    if (computerChoice == "paper" && userChoice == "paper") {
        result = "It's a tie!";
    }
    resultDisplay.innerHTML = result;
}