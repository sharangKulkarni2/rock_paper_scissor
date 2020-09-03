let userScore = 0;
let compScore = 0;
// document caching
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("comp-score");
let scoreBoard_div = document.querySelector(".score-board");
let result_div = document.querySelector(".result");
let rock_div = document.getElementById("r");
let paper_div = document.getElementById("p");
let scissor_div = document.getElementById("s");
let button = document.querySelector(".button");

main();

//adding event listener
function main() {
rock_div.addEventListener("click", function () {
    game("r");
});

paper_div.addEventListener("click", function () {
    game("p");
});

scissor_div.addEventListener("click", function () {
    game("s");
});

    button.addEventListener("click", reset)

}

// defining game function

function game(userChoice) {
   
    let computerChoice = generateComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
            result_div.textContent = "rock beats scissors, You Win!";
            userScore = parseInt(userScore_span.textContent);
            userScore += 1;
            userScore_span.textContent = userScore;
            result_div.style.textAlign = "center";
            break;

        case "pr":
            result_div.textContent = "paper covers rock, You Win!";
            userScore = parseInt(userScore_span.textContent);
            userScore += 1;
            userScore_span.textContent = userScore;
            result_div.style.textAlign = "center";
            break;


        case "sp":
            result_div.textContent = "scissor cuts paper, You Win!";
            userScore = parseInt(userScore_span.textContent);
            userScore += 1;
            userScore_span.textContent = userScore;
            result_div.style.textAlign = "center";
            break;

        case "rp":
            result_div.textContent = "paper covers rock, You loose!";
            compScore = parseInt(computerScore_span.textContent);
            compScore += 1;
            computerScore_span.textContent = compScore;
            result_div.style.textAlign = "center";
            break;

        case "ps":
            result_div.textContent = "scissor cuts paper, You loose!";
            compScore = parseInt(computerScore_span.textContent);
            compScore += 1;
            computerScore_span.textContent = compScore;
            result_div.style.textAlign = "center";
            break;


        case "sr":
            result_div.textContent = "rock beats scissors, You loose!";
            compScore = parseInt(computerScore_span.textContent);
            compScore += 1;
            computerScore_span.textContent = compScore;
            result_div.style.textAlign = "center";

            break;
            
        case "rr":
        case "pp":
        case "ss":
            result_div.textContent = "Draw!";
            result_div.style.textAlign = "center";
            break;
    }
}

// computer generate a random number
function generateComputerChoice() {
    let choices = ["r", "p", "s"];
    let num = Math.floor(Math.random() * 3);
    return choices[num];
}

function reset() {
    userScore_span.textContent = 0;
    computerScore_span.textContent = 0;
    userScore = 0;
    compScore = 0;
    result_div.textContent = "Let's start a new game!";
    result_div.style.textAlign = "center";

}



