const diceBtn = document.querySelector(".dice");
console.log(diceBtn);

let score, roundScore, activePlayer, dice;
score = [0, 0];
roundScore = 0;
activePlayer = 0;

const activePlayerRoundScore = document.getElementById(
  `current-${activePlayer}`
);

//chnaging css style using DOM
diceBtn.style.display = "none";

// rolling dice event
document.querySelector(".btn-roll").addEventListener("click", () => {
  // Random number
  dice = Math.floor(Math.random() * 6) + 1;
  // display result
  diceBtn.style.display = "block";
  diceBtn.src = `dice-${dice}.png`;

  if (dice !== 1) {
    // current player score increases
    roundScore += dice;
    activePlayerRoundScore.textContent = roundScore;
  } else {
    // next player
    activePlayer = activePlayer === 0 ? 1 : 0;
    roundScore = 0;
    document.getElementById(`current-0`).textContent = 0;
    document.getElementById(`current-1`).textContent = 0;
    
    
  }
});
