const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const winner = document.getElementById("winner");
const random1 = Math.floor(Math.random() * 6) + 1;
const random2 = Math.floor(Math.random() * 6) + 1;

dice1.src = `./images/dice${random1}.png`;
dice2.src = `./images/dice${random2}.png`;

if (random1 > random2) {
    winner.innerHTML = "Player 1 Wins!";
} else if (random2 > random1) {
    winner.innerHTML = "Player 2 Wins!";
} else {
    winner.innerHTML = "Draw!";
};