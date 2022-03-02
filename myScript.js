let playerInput, playerInputLowerCase, playerSelection;
let playerScore=0, computerScore=0;

function computerPlay(){
    /*calculates random number from 0, 1 and 2; */
    let randomNumber = Math.round(Math.random() * 2);
    
    if (randomNumber === 0)        //if number is equal to 0, return a string 'rock'
    {
        console.log('Computer: rock'); 
    } else if (randomNumber === 1) //if 1, return 'paper'
    {
        console.log('Computer: paper'); 
    } else {                       //else 2, return 'scissor'
        console.log('Computer: scissors'); 
    }
    return randomNumber;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){ //Rock(0) = Rock(0), Paper(1) = Paper(1), Scissors(2) = Scissors(2)
        console.log("Great! You tied with the computer!");
    //special case where 0 > 2 and vice versa
    } else if (playerSelection === 0 && computerSelection === 2) { //Rock(0) > Scissors(2)
        ++playerScore;
        console.log("Congrats! You Win!");
    } else if (playerSelection === 2 && computerSelection === 0) { //Scissors(2) < Rock(0)
        ++computerScore;
        console.log("You Lose! Scissors beats Rock.");
    //now using logical operators
    } else if (playerSelection < computerSelection){ //Rock(0) < Paper (1), Paper(1) < Scissors(2)
        ++computerScore;
        console.log("You Lose!");
    } else if (playerSelection > computerSelection) { //Paper(1) > Rock(0), Scissors(3) > Paper(1)
        ++playerScore;
        console.log("Congrats! You Win!");
    }
    console.log("Player:" + playerScore + " Computer:" +computerScore);
}

//convert string to a number
function getNumber(playerInputLowerCase) {
    switch (playerInputLowerCase) {
        case 'rock':
            return 0;
            break;
        case 'paper':
            return 1;
            break;
        case 'scissors':
            return 2;
            break;
        default:
            console.log("Input Error! Answer rock, paper and scissors only!");
    }
}

// loop until round 5
function playMultipleRound()
{
    for (let i=0; i<5; i++)
    {
        //accepts player input
        playerInput = prompt("Rock, Paper or Scissors?: ", "");
        //convert player input to lowercase
        playerInputLowerCase = playerInput.toLowerCase(playerInput);
        //prints player input to screen
        console.log("Player: " + playerInputLowerCase);
        //convert string input to number corresponding Rock(0), Paper(1) and Scissors(2)
        playerSelection = getNumber(playerInputLowerCase);
        //computer calcs its own answer
        const computerSelection = computerPlay();
        //then the game begins!
        playRound(playerSelection, computerSelection);
    }
    return true;
}

//check final score
let roundEnded = playMultipleRound();
if (roundEnded)
{
    if (playerScore > computerScore)
    {
        console.log("Congratulations! You win the RPS game.");
    }
    else if (playerScore < computerScore)
    {
        console.log("You Lose. Better luck next time!");
    } else {
        console.log("Wow! You tied with the computer. That's amazing!");
    }
}




