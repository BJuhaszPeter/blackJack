const bankHand = [];
const playerHand = [];
const deck = require('./deck');
const readline = require('readline-sync');

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

const dealCard = (shuffledDeck, handArray) => {
  handArray.push(shuffledDeck[0]);
};

const revileCard = (handArray) => {
  console.log(handArray);
};

const revileTable = () => {
  console.log('BANK:');
  revileCard(bankHand[1]);
  console.log(' ');
  console.log('Player:');
  revileCard(playerHand);
};

const mainHandDeal = (shuffledDeck, playerHand, bankHand) => {
  let i = 0;
  bankHand.push(shuffledDeck[i++]);
  playerHand.push(shuffledDeck[i++]);
  bankHand.push(shuffledDeck[i++]);
  playerHand.push(shuffledDeck[i++]);
};

const callPlayerCard = (shuffledDeck, playerHand, num) => {
  const call = readline.question('chose order:');

  if (call === 'h') {
    playerHand.push(shuffledDeck[num]);
  } else if (call === 's') {
    return playerHand;
  }

  revileTable();

  callPlayerCard(shuffledDeck, playerHand, num + 1);
};
const shuffledDeck = shuffleDeck(deck.deckArray);

mainHandDeal(shuffledDeck, playerHand, bankHand);

revileTable();

callPlayerCard(shuffledDeck, playerHand, 4);
