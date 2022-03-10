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