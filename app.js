let playerScore=0;
let computerScore=0;
let counter=0;


const printText = document.getElementById("printOut");


// function playerPlay(){
//     let playerChoiceCase = prompt("Type rock paper or scissors");
//     let playerChoice= playerChoiceCase.toLowerCase();
//     if(playerChoice=="rock" || playerChoice=="paper" || playerChoice=="scissors"){
//         alert(`You have selected ${playerChoice}`);
//         return playerChoice;

//     }
//     else if(playerChoice===null || playerChoice==="" ){
//         alert("You need to enter rock, paper or scissors");
//         playerPlay()
//     }else{
//         alert("Please enter rock paper or scissors");
//         playerPlay()
//     }
    
// }




// function game(){

    function computerPlay(){
        let gameOptions = ["Rock","Paper","Scissors"];
        gameChoice = gameOptions[Math.floor(Math.random()* gameOptions.length)].toLowerCase();
        computerPlay = gameChoice;
    }
    computerPlay();


        function playRound(playerSelection){

            const playerChoice = playerSelection.target.id;


            console.log(computerPlay);
            //    playerSelection =  playerSelection.toLowerCase();
            //    computerSelection = computerSelection.toLowerCase();
            
            if(playerChoice=="rock" && computerPlay=="scissors"){
                playerScore++;
                counter+=1;
                alert("Player Wins, Rock beats Scissors");
            }else if(playerChoice=="paper" && computerPlay=="rock"){
                playerScore++;
                counter+=1;
                alert("Player Wins, Paper beats Rock");
        
            }else if(playerChoice=="scissors" && computerPlay=="paper"){        
                playerScore++;
                counter+=1;
                alert("Player Wins, Scissors beats Paper");
            }else if(playerChoice==computerPlay){
                counter+=1;
                alert("Tie Game!");
            }else{
                counter+=1;
                computerScore++;
                
                alert(`Computer Wins, ${computerPlay} beats ${playerChoice}`);
            }
            getGameScore();

        }

//         let playerSelection = playerPlay();
//         let computerSelection = computerPlay();
//         playRound(playerSelection,computerSelection);


 

function getGameScore(){
    if(counter<5){
        if(playerScore>computerScore){
            printText.textContent = (`Player is currently winning, Scores: Player: ${playerScore} Computer: ${computerScore}`);
        }else if(computerScore> playerScore){
            printText.textContent = (`Computer is currently winning, Scores: Player: ${playerScore} Computer: ${computerScore}`);
        }else if(computerScore==playerScore){
            printText.textContent = (`Computer and Player are currently tied, Scores: Player: ${playerScore} Computer: ${computerScore}`);
        }
    }else if(counter==5){
        if(playerScore>computerScore){
            printText.textContent = (`Player Wins: Player:\n ${playerScore} \n Computer: ${computerScore}`);
            resetGame();
        }else if(computerScore> playerScore){
            printText.textContent = (`Computer Wins: \n Player: ${playerScore} \n Computer: ${computerScore}`);
            resetGame();
        }
    }

}  
    
    
   

   
// }

function resetGame(){
    computerScore=0;
    playerScore=0;
    counter=0
    alert("Game Now Reset")

}

// game();

const buttons = document.querySelectorAll("button");

buttons.forEach((button) =>{
    button.addEventListener("click", playRound);
})

