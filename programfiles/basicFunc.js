const readline = require('readline-sync');
// const deck = require('./deck');

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

// const dealCard = (shuffledDeck, handArray) => {
//   handArray.push(shuffledDeck[0]);
// };

const revileCard = (handArray) => {
  console.log(handArray);
};

const revileTable = (bankHand, playerHand) => {
  console.log('BANK:');
  revileCard(bankHand[1]);
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

const callPlayerCard = (shuffledDeck, playerHand, bankHand, num) => {
  const call = readline.question('chose order:');
  console.clear();

  if (call === 'h') {
    playerHand.push(shuffledDeck[num]);
  } else if (call === 's') {
    console.clear();
    revileFullTable(playerHand, bankHand);

    while (handValue(bankHand) < 17) {
      console.clear();
      revileFullTable(playerHand, bankHand);
      bankHand.push(shuffledDeck[num++]);
    }
    return console.clear();
  }
  revileTable(bankHand, playerHand);
  callPlayerCard(shuffledDeck, playerHand, bankHand, num + 1);
};

// const dealBankCard = (shuffledDeck, playerHand, bankHand, num) => {
//   console.clear();
//   revileFullTable(playerHand, bankHand);
//   if (handValue(bankHand) < 17) {
//     bankHand.push(shuffledDeck[num]);
//   } else {
//     revileFullTable(playerHand, bankHand);
//   }
//   revileFullTable(playerHand, bankHand);
//   dealBankCard(shuffledDeck, playerHand, bankHand, num + 1);
// };

module.exports = {
  shuffleDeck,
  revileCard,
  revileTable,
  mainHandDeal,
  callPlayerCard,
  revileFullTable,
  handValue

};
