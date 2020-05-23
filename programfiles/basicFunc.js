const bankHand = [];
const playerHand = [];
const deck = require('./programfiles/deck');

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

const shuffledDeck = shuffleDeck(deck.deckArray);
dealCard(shuffledDeck, bankHand);
console.log('BANK:');
revileCard(bankHand);
dealCard(shuffledDeck, playerHand);
dealCard(shuffledDeck, bankHand);
dealCard(shuffledDeck, playerHand);
console.log(' ');
console.log('Player:');
revileCard(playerHand);
