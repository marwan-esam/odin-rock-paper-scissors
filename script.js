class RockPaperScissors {
    constructor() {
      this.choices = ['rock', 'paper', 'scissors'];
      this.playerScore = 0;
      this.computerScore = 0;
      this.scoreText = '';
    }
  
    getComputerChoice() {
      const computerChoice = Math.floor(Math.random() * 3);
      return this.choices[computerChoice];
    }
  
    getPlayerChoice() {
      while (true) {
        let choice = prompt('Rock, Paper, or Scissors?', 'Rock');
        if (choice === null || choice === '') {
          alert('Please enter a valid choice.');
        } else if (choice = choice.toLowerCase(), this.choices.includes(choice)) {
          return choice;
        } else {
          alert('Invalid input! Please enter either Rock, Paper, or Scissors.');
        }
      }
    }
  
    playRound(playerSelection, computerSelection) {
      if (playerSelection === computerSelection) {
        this.playerScore++;
        this.computerScore++;
        // return `It's a tie. You both played ${playerSelection}.`;
        this.scoreText = `It's a tie! You both played ${playerSelection}.`;
      } else if (
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')
      ) {
        this.computerScore++;
        // return `You lose! ${computerSelection} beats ${playerSelection}.`;
        this.scoreText = `You lose! ${computerSelection} beats ${playerSelection}.`;
      } else {
        this.playerScore++;
        // return `You win! ${playerSelection} beats ${computerSelection}.`;
        this.scoreText = `You win! ${playerSelection} beats ${computerSelection}.`;
      }
      return this.scoreText;
    }
  
    playGame() {
      const computerSelection = this.getComputerChoice();
      const playerSelection = this.getPlayerChoice();
      const result = this.playRound(playerSelection, computerSelection);
      return result;
    }

    clear() {
      this.playerScore = 0;
      this.computerScore = 0;
      this.scoreText = '';
      this.winner = {player: 'unknown', score: 0};
    }

    game() {
        for (let i = 0 ; i < 5 ; i++) {
            console.log(`Round ${i + 1}:-`);
            let result = this.playGame();
            console.log(result);
            if (result.includes('win')) {
                this.playerScore++;
            }
            else {
                this.computerScore++;
            }
        }
        
        console.log('---------------');
        console.log('Game Over');
        console.log(`Player Score: ${this.playerScore}`);
        console.log(`Computer Score: ${this.computerScore}`);

        if (this.playerScore > this.computerScore) {
            console.log('You win the game!');
        } else if (this.playerScore < this.computerScore) {
            console.log('You lose the game!');
        } else {
            console.log("It's a tie!");
        }


    }
  }
  




const game = new RockPaperScissors();
const gameRounds = 5;
let isGameOver = false;
const images = document.querySelectorAll('img');

images.forEach((image) => image.addEventListener('click', playRound));


const gameRule = document.querySelector('.game-rule');
const scoreText = document.querySelector('.score-text');
const winner = document.querySelector('.winner');
const playAgain = document.querySelector('.play-again');
const playAgainButton = document.createElement('button');
playAgainButton.classList.add('play-again-button');
playAgainButton.textContent = 'play again';

gameRule.textContent = `First to ${gameRounds} wins!`;


const scoreBoard = document.querySelector('.score-board');
scoreBoard.textContent = '0 - 0';



function playRound () {
  if(isGameOver){
    return;
  }
  const playerChoice = this.alt;
  const computerChoice = game.getComputerChoice();
  scoreText.textContent = game.playRound(playerChoice, computerChoice);
  scoreBoard.textContent = `${game.playerScore} - ${game.computerScore}`;
  if(game.playerScore === 5 || game.computerScore === 5){
    isGameOver = true;
    images.forEach(function (image) {image.classList.remove('playing')});
    if(game.playerScore > game.computerScore){
      winner.textContent = "You won the game! You're good at this.";
    } else if(game.playerScore < game.computerScore){
      winner.textContent = "You lost the game! Better luck next time.";
    } else{
      winner.textContent = "Tie game! You both held your ground. Ready for a rematch?";
    }
    playAgain.appendChild(playAgainButton);
  }
}

function pressPlayAgain(){
  game.clear();
  winner.textContent = '';
  scoreText.textContent = '';
  scoreBoard.textContent = '0 - 0';
  playAgain.removeChild(playAgainButton);
  images.forEach((image) => image.classList.add('playing'));
  isGameOver = false;
}

playAgainButton.addEventListener('click', pressPlayAgain);



