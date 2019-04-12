//Exercise 1

// var billAmount = 100.58;

// function gratutity(a,b){
//     return grat = a*b;
//   }
// gratutity(billAmount,0.2);


// function totalWithGrat(c,d){
//   return total = c+d;

// }
// totalWithGrat(billAmount,grat);

// console.log(totalWithGrat(billAmount,grat).toFixed(2));

// //RPS Game

// function playTournament(){

// }

//Exercise 2
 
hands = ['rock','paper','scissors'];

function getHand(){
  return parseInt(Math.floor(Math.random()*10))%3;
};

const player1 = {
  name : 'Chad',
  hand : null,
  wins: 0,
}

const opponent = {
  name : 'Opp',
  hand :null,
  wins: 0,
}

function playRound(player1, opponent){
  // player1=getHand()
  // opponent=getHand()

  while (player1.wins < 5 || opponent.wins < 5){
  }
  if (player1.hand===opponent.hand) {
    player1.hand=hands[getHand()]
    opponent.hand=hands[getHand()]
    console.log('Game is a tie.');
  }else if(player1.hand==='rock' && opponent.hand==='scissors' || player1.hand==='scissors' && opponent.hand==='paper' || player1.hand==='paper' && opponent.hand==='rock'){
    player1.wins++
    console.log(player1.name + ' wins!');
    console.log(player1.name + ' has ' + player1wins + '.');
    console.log(opponent.name + ' has ' + opponent.wins + '.');
  }else{
    opponent.wins++
    console.log(opponent.name + ' wins.');
    console.log(player1.name + ' has ' + player1wins + '.');
    console.log(opponent.name + ' has ' + opponent.wins + '.');
  }

}

console.log(playRound());