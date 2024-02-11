//generates random number
let num1 = Math.floor(Math.random() * 6) + 1
let num2 = Math.floor(Math.random() * 6) + 1

let dice1 = document.getElementsByClassName('img1')[0];
let dice2 = document.getElementsByClassName('img2')[0];


function declareWinner() {

    if (num1 > num2) {
        document.querySelector(".container h1").innerHTML = "🚩 Player 1 Wins"
    } else if (num1 < num2) {
        document.querySelector(".container h1").innerHTML = "Player 2 Wins 🚩"
    } else {
        document.querySelector(".container h1").innerHTML = "Its A Draw"
    }


    dice1.setAttribute('src', `images/dice${num1}.png`);
    dice2.setAttribute('src', `images/dice${num2}.png`);
    
}

