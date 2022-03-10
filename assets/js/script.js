let playerScore = 0;
let computerScore = 0;
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const computerChoiceDisplay = document.querySelector('#computer-choice');
const userChoiceDisplay = document.querySelector('#user-choice');
const resultDisplay = document.querySelector('#result');
const possibleChoices = document.querySelectorAll('.control');
const computerImage = document.querySelector('#house-choice-img');
let userChoice ;
let result ;
const rockRef = document.querySelector('#rock');
const scissorsRef = document.querySelector('#scissors');
const paperRef = document.querySelector('#paper');
var rulesRef = document.getElementById('rules');

rockRef.addEventListener('click', () => {
    displayUserChoice('rock');});

scissorsRef.addEventListener('click', () => {
    displayUserChoice('scissors');});

paperRef.addEventListener('click', () => {
    displayUserChoice('paper');});

rulesRef.addEventListener('click', toggleImage);
 
const controlOptions = {
    rock: "./assets/images/rock.jpg",
    paper: "./assets/images/paper.jpg",
    scissors: "./assets/images/scissors.jpg",
};

function displayUserChoice(control) { 
    document.getElementById("user-choice-img").src = controlOptions[control];

    let userContest = document.getElementById("user-choice-img");
      userContest.style.visibility = "visible" ;
    }
      
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
userChoice = e.target.id;
userChoiceDisplay.innerHTML = userChoice;
generateComputerChoice();
getResult();
gameOver();
}));


function generateComputerChoice(){
    const choices = ['rock', 'scissors', 'paper'];
    const randomNumber = Math.floor(Math.random () * choices.length);
    computerChoiceDisplay.innerHTML = choices[randomNumber] ;
    computerImage.src = `./assets/images/${computerChoiceDisplay.innerHTML}.jpg`; 
     computerImage.style.visibility = "visible" ;  
 }

 function getResult(){
    if(computerChoiceDisplay.innerHTML === 'rock' && userChoice === 'rock'){
        result = 'Draw, you both have rock!';
   
    
    }
    if(computerChoiceDisplay.innerHTML === 'paper' && userChoice === 'paper'){
        result = 'Draw, you both have paper!';
    

    }
    if(computerChoiceDisplay.innerHTML === 'scissors' && userChoice === 'scissors'){
        result = 'Draw, you both have scissors!';
  

    }
    if(computerChoiceDisplay.innerHTML === 'rock' && userChoice === 'paper'){
        result = 'You Win, paper wraps rock !';
        win();

    }
    if(computerChoiceDisplay.innerHTML === 'rock' && userChoice === 'scissors'){
        result = 'You lost!, scissors gets jammed by rock  ';
        lose();

    }
    if(computerChoiceDisplay.innerHTML === 'paper' && userChoice === 'scissors'){
        result= 'You Win!, scissors cuts paper';
        win();
        
    }
    if(computerChoiceDisplay.innerHTML === 'paper' && userChoice === 'rock'){
        result= 'You lost!, rock gets wrapped by paper';
        lose();
        
        
    }
    if(computerChoiceDisplay.innerHTML === 'scissors' && userChoice === 'rock'){
        result= 'You Win!, rock jams scissors';
        win();
        
    }
    if(computerChoiceDisplay.innerHTML === 'scissors' && userChoice === 'paper'){
        result= 'You lost!, paper gets cut by scissors';
        lose();
    }
    resultDisplay.innerHTML = result;
}
 
function win(){
    playerScore++;
    playerScoreSpan.innerHTML = playerScore;
    computerScoreSpan.innerHTML = computerScore;
    
}
function lose(){
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    playerScoreSpan.innerHTML = playerScore;
}

function toggleImage() {
    var hiddenImage = document.getElementById('rules-text');
    hiddenImage.classList.toggle('hidden');
  }