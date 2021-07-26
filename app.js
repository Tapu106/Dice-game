const diceBtn = document.querySelector(".dice");
console.log(diceBtn);

let score, roundScore, activePlayer, dice, isPlaying;
init = () => {
  score = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  isPlaying = true;

  diceBtn.style.display = "none";
  document.getElementById(`current-0`).textContent = "0";
  document.getElementById(`current-1`).textContent = "0";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
};
// rolling dice event
document.querySelector(".btn-roll").addEventListener("click", () => {
  if (isPlaying) {
    // Random number
    dice = Math.floor(Math.random() * 6) + 1;
    // display result
    diceBtn.style.display = "block";
    diceBtn.src = `dice-${dice}.png`;

    if (dice !== 1) {
      // current player score increases
      roundScore += dice;
      document.getElementById(`current-${activePlayer}`).textContent =
        roundScore;
    } else {
      // next player
      turnToNextPlayer();
    }
  }
});

// hold event

document.querySelector(".btn-hold").addEventListener("click", () => {
  if (isPlaying) {
    score[activePlayer] += roundScore;
    document.getElementById(`score-${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 20) {
      document.getElementById("name-" + activePlayer).textContent = "Winner!";
      diceBtn.style.display = "none";
      document
        .querySelector(`.player-${activePlayer}-panel`)
        .classList.add("winner");
      document
        .querySelector(`.player-${activePlayer}-panel`)
        .classList.remove("active");
      isPlaying = false;
    } else {
      turnToNextPlayer();
    }
  }
});

turnToNextPlayer = () => {
  activePlayer = activePlayer === 0 ? 1 : 0;
  roundScore = 0;
  document.getElementById(`current-0`).textContent = 0;
  document.getElementById(`current-1`).textContent = 0;
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  diceBtn.style.display = "none";
};

// new game event
document.querySelector(".btn-new").addEventListener("click", init);

init();
