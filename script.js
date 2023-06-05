class RockPaperScissors {
    constructor() {
      this.choices = ['rock', 'paper', 'scissors'];
      this.playerScore = 0;
      this.computerScore = 0;
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
        return `It's a tie. You both played ${playerSelection}.`;
      } else if (
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')
      ) {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
      } else {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
      }
    }
  
    playGame() {
      const computerSelection = this.getComputerChoice();
      const playerSelection = this.getPlayerChoice();
      const result = this.playRound(playerSelection, computerSelection);
      return result;
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
  
const startGame = new RockPaperScissors();
startGame.game();
  