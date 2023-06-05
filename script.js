class RockPaperScissors {
    constructor() {
      this.choices = ['rock', 'paper', 'scissors'];
    }
  
    getComputerChoice() {
      const computerChoice = Math.floor(Math.random() * 3);
      return this.choices[computerChoice];
    }
  
    getPlayerChoice() {
      while (true) {
        let choice = prompt('Rock, Paper, or Scissors?', 'Rock').toLowerCase();
        if (choice === null || choice === '') {
          alert('Please enter a valid choice.');
        } else if (this.choices.includes(choice)) {
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
      console.log(result);
    }
  }
  
  const game = new RockPaperScissors();
  game.playGame();
  