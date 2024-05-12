

let userInput;
const arr = ["rock","paper","scissor"];

// let computerChoice = getComputerChoice();
let result ;

startGame();

// Starts the game
function startGame()
{
    let user = getUserChoice();
    let computer = getComputerChoice();
    printResult(checkResult(user,computer));
}

// checkResult
function checkResult(u,c)
{
    console.log("User : " + u);
    console.log("Computer : " + c);
    if(u=="rock" && c=="scissor") result = "User win";
    else if(u=="scissor" && c=="paper") result = "User Win";
    else if(u=="paper" && c=="rock") result = "User Win";
    else if(u===c) result = "Match Ties....";
    else result ="Computer Wins....";
    return result;
}

// Prints the result 
function printResult(r)
{
    console.log(r);
}

// Returns the computer choice 
function getComputerChoice()
{
    return arr[generateRandomNumber()];
}

// Generates a random number from 0 to 2
function generateRandomNumber()
{
    return parseInt(Math.random()*3);
}

// Get's the input from user and store it into userInput variable and then return it
function getUserChoice()
{
    userInput = prompt("Please Type :'rock','paper',or 'scissor'");
    return userInput;
}




