const player1ScoreElement = document.getElementById('player1-score');
const player2ScoreElement = document.getElementById('player2-score');
const rollDiceButton = document.getElementById('roll-dice');
const winnerElement = document.getElementById('winner');
const winnerNameElement = document.getElementById('winner-name');
const resetButton = document.querySelector("#reset ")
const image1 = document.getElementById('img1')
const image2 = document.getElementById('img2')

var num1 = 0;
var num2 = 0;

function rollDice() {
  const player1Roll = Math.floor(Math.random() * 6)+1;
  const player2Roll = Math.floor(Math.random() * 6)+1 ;

  num1 += player1Roll;
  num2 += player2Roll;

  player1ScoreElement.textContent = num1;
  player2ScoreElement.textContent = num2;


  image1.setAttribute('src','assets/inverted-dice-'+player1Roll+'.png');
  image2.setAttribute('src','assets/inverted-dice-'+player2Roll+'.png');


  if (num1 >= 20 && num1 > num2) {
    showWinner('Player 1');
  } else if (num2 >= 20 && num2 > num1) {
    showWinner('Player 2');
  }
}

function showWinner(winnerName) {
  winnerNameElement.textContent = winnerName;
  winnerElement.style.display = 'block';
  rollDiceButton.disabled = true;
  resetButton.style.display = 'block';
}
function resetGame() {
    player1Score = 0;
    player2Score = 0;
    num1=0;
    num2=0;
    player1ScoreElement.textContent = '0';
    player2ScoreElement.textContent = '0';
    winnerElement.style.display = 'none';
    rollDiceButton.disabled = false;
    image1.setAttribute('src','assets/inverted-dice-6.png');
    image2.setAttribute('src','assets/inverted-dice-6.png');
    rollDiceButton.style.display = 'block';
    resetButton.style.display = 'none';

}

rollDiceButton.addEventListener('click', rollDice);
resetButton.addEventListener('click', resetGame);
