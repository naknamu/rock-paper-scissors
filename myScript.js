let playerInput, playerInputLowerCase, playerSelection, commentary;
let playerScore=0, computerScore=0;
let gameOver = false;

const buttons = document.querySelectorAll('button');
const playerOutput = document.querySelector('.player-choice');
const computerOutput = document.querySelector('.computer-choice');
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const commentDisplay = document.querySelector('#comment');

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
        commentary =  "Great! You tied with the computer!";
    //special case where 0 > 2 and vice versa
    } else if (playerSelection === 0 && computerSelection === 2) { //Rock(0) > Scissors(2)
        ++playerScore;
        commentary = "Congrats! You Win!";
    } else if (playerSelection === 2 && computerSelection === 0) { //Scissors(2) < Rock(0)
        ++computerScore;
        commentary = "You Lose! Scissors beats Rock.";
    //now using logical operators
    } else if (playerSelection < computerSelection){ //Rock(0) < Paper (1), Paper(1) < Scissors(2)
        ++computerScore;
        commentary = "You Lose!";
    } else if (playerSelection > computerSelection) { //Paper(1) > Rock(0), Scissors(3) > Paper(1)
        ++playerScore;
        commentary = "Congrats! You Win!";
    }
    // console.log("Player:" + playerScore + " Computer:" +computerScore);
}

//convert string to a number
// function getNumber(playerInputLowerCase) {
//     switch (playerInputLowerCase) {
//         case 'rock':
//             return 0;
//             break;
//         case 'paper':
//             return 1;
//             break;
//         case 'scissors':
//             return 2;
//             break;
//         default:
//             console.log("Input Error! Answer rock, paper and scissors only!");
//     }
// }

// loop until round 5
// function playMultipleRound()
// {
//     for (let i=0; i<5; i++)
//     {
//         //accepts player input
//         playerInput = prompt("Rock, Paper or Scissors?: ", "");
//         //convert player input to lowercase
//         playerInputLowerCase = playerInput.toLowerCase(playerInput);
//         //prints player input to screen
//         console.log("Player: " + playerInputLowerCase);
//         //convert string input to number corresponding Rock(0), Paper(1) and Scissors(2)
//         playerSelection = getNumber(playerInputLowerCase);
//         //computer calcs its own answer
//         const computerSelection = computerPlay();
//         //then the game begins!
//         playRound(playerSelection, computerSelection);
//     }
//     return true;
// }

//check final score
function checkFinalScore()
{
    if (gameOver)
    {
        if (playerScore > computerScore)
        {
            commentary = "Congratulations! You win the RPS game.";
        }
        else if (playerScore < computerScore)
        {
            commentary = "You Lose. Better luck next time!";
        } else {
            commentary = "Wow! You tied with the computer. That's amazing!";
        }
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
    //assign button id to corresponding number 
    convButtonIdToNumber(button.id);
    //computer calcs its own answer
    const computerSelection = computerPlay();
    //convert computer answer to string
    const computerSelectionString = convNumberToString(computerSelection);
    //then the game begins!
    playRound(playerSelection, computerSelection);
    //display choice to the output box
    playerOutput.textContent = button.id;
    computerOutput.textContent = computerSelectionString;
    //display score
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    //display result commentary
    commentDisplay.textContent = commentary;

    if (playerScore == 5 || computerScore == 5)
    {
        gameOver = true;
        //display result commentary
        checkFinalScore();
        commentDisplay.textContent = commentary;
        //disable all buttons
        for (let i=0; i < buttons.length; i++)
        {
            buttons[i].disabled = true;
        }
    }
    });
});

// convert number to a string
function convNumberToString(number)
{
    switch (number) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

//assign button id to corresponding number 
function convButtonIdToNumber(buttonID)
{
    switch(buttonID)
    {
        case "rock":
            playerSelection = 0;
            break;
        case "paper":
            playerSelection = 1;
            break;
        case "scissors":
            playerSelection = 2;
            break;
        default:
            alert("No player selection!");
    }
}















