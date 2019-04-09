//challenge 1
let cupsConsumed = 10;

if (cupsConsumed < 3) {
    console.log('Yes I\'ll take another cup of coffee.');
}else{console.log("I think I'm okay for now.");
}

//challenge 2
let temp = 90;
let precip = true;
let indoors = true;

console.log(`The temperature is ${temp} degrees.`);

if (temp > 80 && precip === false || indoors===true) {
    console.log('Time to swim!');
}

//challenge 3

for (let i = 99; i >= 0; i--){
    if (i > 1) {
        console.log(`There are ${i} bottles remaining!`)
    }else if(i==1){
        console.log(`We have ${i} more bottle of beer!`);
    }else{
        console.log('We need more beer!');
    }
};

//HOMEWORK: Rock, Paper, Scissors Game

const player1="Player 1";
const player2="Player 2";
var p1wins='0';
var p2wins='0';
var p1weapon=null;
var p2weapon=null;
var weapons= ["rock", "paper", "scissors"];


while (p1wins < 3 && p2wins < 3) {
        p1weapon = weapons[Math.floor(Math.random() * weapons.length)];
        console.log(player1+": "+p1weapon);
        p2weapon = weapons[Math.floor(Math.random() * weapons.length)];
        console.log(player2+": "+p2weapon);

        if (p1weapon===p2weapon) {
            console.log("Draw");
            console.log(player1 +" has won "+p1wins+" round(s).");
            console.log(player2+" has won "+p2wins+" round(s).");
        }
        else if (p1weapon=="rock" && p2weapon=="scissors" || p1weapon=="scissors" && p2weapon=="paper" || p1weapon=="paper" && p2weapon=="rock") {
            console.log("Player 1 wins this round.");
            p1wins++;
            console.log(player1 +" has won "+p1wins+" round(s).");
            console.log(player2+" has won "+p2wins+" round(s).");
        }
        else if(p2weapon=="rock" && p1weapon=="scissors" || p2weapon=="scissors" && p1weapon=="paper" || p2weapon=="paper" && p1weapon=="rock") {
            console.log("Player 2 wins this round.");
            p2wins++;
            console.log(player1 +" has won "+p1wins+" round(s).");
            console.log(player2+" has won "+p2wins+" round(s).");
        }
            if (p1wins===3) {
            console.log(player1+" wins the match.");
        }else if (p2wins===3) {
            console.log(player2+" wins the match.");
        }

    }