const readline = require('readline-sync');

const desk = require('./desk');
const chalk = require('chalk');

const shuffleDeck = (array) => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const revileCard = (handArray) => {
  console.log(handArray);
};

const revileTable = (bankHand, playerHand) => {
  console.log('BANK:');
  revileCard(bankHand[0]);
  console.log(' ');
  console.log('Player:');
  revileCard(playerHand);
};

const revileFullTable = (playerHand, bankHand) => {
  console.log('BANK:');
  revileCard(bankHand);
  console.log(' ');
  console.log('Player:');
  revileCard(playerHand);
};

const handValue = (Arr) => {
  let cardValue = 0;
  const aceSum = [];
  for (let i = 0; i < Arr.length; i++) {
    cardValue = cardValue + Arr[i].value;
  }
  for (let j = 0; j < Arr.length; j++) {
    if (Arr[j].name === 'Ace') {
      aceSum.push(Arr[j]);
    }
  }
  if (aceSum.length > 0) {
    cardValue = cardValue - ((aceSum.length - 1) * 10);
  }
  return cardValue;
};

const mainHandDeal = (shuffledDeck, playerHand, bankHand) => {
  let i = 0;

  bankHand.push(shuffledDeck[i++]);
  playerHand.push(shuffledDeck[i++]);
  bankHand.push(shuffledDeck[i++]);
  playerHand.push(shuffledDeck[i++]);
};

const callPlayerCard = (shuffledDeck, playerHand, bankHand, num, pot) => {
  const call = readline.question(chalk.bgRgb(0, 0, 0)(chalk.rgb(200, 200, 200)('CHOOSE ORDER! (h)it / (s)tay:')));
  console.clear();

  if (call === 'h') {
    playerHand.push(shuffledDeck[num]);
    bustInvest(playerHand);
    for (let i = 0; i < playerHand.length; i++) {
      if (playerHand[i] === 'BUST') {
        return;
      }
    }
  } else if (call === 's') {
    desk.printTableFull(bankHand, playerHand, pot);

    while (handValue(bankHand) < 17) {
      desk.printTableFull(bankHand, playerHand, pot);
      bankHand.push(shuffledDeck[num++]);
      bustInvest(bankHand);
    }
    return desk.printTableFull(bankHand, playerHand, pot);
  }
  desk.printTableMain(bankHand, playerHand, pot);
  callPlayerCard(shuffledDeck, playerHand, bankHand, num + 1, pot);
};

const bustInvest = (handArr) => {
  if (handValue(handArr) > 21) {
    handArr.push('BUST');
    return handArr;
  }
};

module.exports = {
  shuffleDeck,
  revileCard,
  revileTable,
  mainHandDeal,
  callPlayerCard,
  revileFullTable,
  handValue,
  bustInvest

};
