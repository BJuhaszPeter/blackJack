const readline = require('readline-sync');
// const deck = require('./deck');
// const stake = require('./pot');

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
  const call = readline.question('CHOOSE ORDER! (h)it / (s)tay:');
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
    console.clear();
    revileFullTable(playerHand, bankHand);

    while (handValue(bankHand) < 17) {
      console.clear();
      revileFullTable(playerHand, bankHand);
      bankHand.push(shuffledDeck[num++]);
      bustInvest(bankHand);
    }
    return console.clear();
  }
  revileTable(bankHand, playerHand);
  callPlayerCard(shuffledDeck, playerHand, bankHand, num + 1);
};
const bustInvest = (handArr) => {
  if (handValue(handArr) > 21) {
    handArr.push('BUST');
    return handArr;
  }
};

// const quitOrNewGame = () => {
//   const key = readline.question('Kilépés: (q) / Új Játék: (n)');
//   if (key === 'q') {
//     process.exit();
//   } else if (key === 'n') {
//     console.clear();
//     main();
//   }
// };

// const endGameLoop = () => {
//   if (stake.chipCase[0].value === 0) {
//     console.log('PLAYER IS INSOLVENCY');
//     console.log('THE BANK WIN');
//     console.log('GAME OVER');
//     quitOrNewGame();
//   } else if (stake.chipCase[2].value === 0) {
//     console.log('BANK IS INSOLVENCY');
//     console.log('THE PLAYER WIN');
//     console.log('GAME OVER');
//     quitOrNewGame();
//   } else {
//     const key = readline.question('DO YOU WANT TO COUNTINE THIS GAME? (y/n)');
//     if (key === 'n') {
//       quitOrNewGame();
//     } else if (key === 'y') {
//       console.clear();
//       main();
//     }
//   }
// };

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
  handValue,
  bustInvest

};
