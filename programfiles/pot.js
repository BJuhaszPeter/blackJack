const readline = require('readline-sync');
// const bf = require('./basicFunc');

const chipCase = [

  {
    name: 'PlayerChip',
    value: 1000
  },
  {
    name: 'POT',
    value: 0
  },
  {
    name: 'BankChip',
    value: 1000
  }
];

const printChip = (chipCase) => {
  console.log(chipCase[0].name, ':', chipCase[0].value);
  console.log(chipCase[1].name, ':', chipCase[1].value);
  console.log(chipCase[2].name, ':', chipCase[2].value);
};

const makeThePot = (chipCase) => {
  const pot = readline.question('TAKE THE POT');
  if (chipCase[0].value < pot) {
    console.log('YOU DONT HAVE THIS MOUNT OF CHIPS');
    makeThePot(chipCase);
  } else {
    chipCase[1].value = pot;
    chipCase[0].value = (chipCase[0].value - pot);
    return pot;
  }
};

const winThePot = (chipCase, pot) => {
  chipCase[0].value = chipCase[0].value + (pot * 2);
  chipCase[2].value = chipCase[2].value - (pot * 1);
  console.log('THE WINNER IS THE PLAYER!');
  console.log(' ');
  console.log('Player:', chipCase[0].value);
  console.log(' ');
  console.log('BANK:', chipCase[2].value);
};

const loseThePot = (chipCase, pot) => {
  chipCase[2].value = chipCase[2].value + (pot * 1);
  console.log('THE WINNER IS THE BANK!');
  console.log(' ');
  console.log('Player:', chipCase[0].value);
  console.log(' ');
  console.log('BANK:', chipCase[2].value);
};

const pushThePot = (chipCase, pot) => {
  chipCase[0].value = chipCase[0].value + (pot * 1);
  console.log('PUSH!!!');
  console.log(' ');
  console.log('Player:', chipCase[0].value);
  console.log(' ');
  console.log('BANK:', chipCase[2].value);
};

const WinConInv = (playerHand, bankHand, pot, chipCase) => {
  for (let i = 0; i < playerHand.length; i++) {
    if (playerHand[i] === 'BUST') {
      loseThePot(chipCase, pot);
      return console.log('PLAYER BUST!');
    }
  }
  for (let i = 0; i < bankHand.length; i++) {
    if (bankHand[i] === 'BUST') {
      winThePot(chipCase, pot);
      return console.log('BANK BUST!');
    }
  }
  if (chipCase[2].value > chipCase[0].value) {
    console.log('BANK:', chipCase[2].value, 'PLAYER:', chipCase[0].value);
    loseThePot(chipCase, pot);
  } else if (chipCase[2].value < chipCase[0].value) {
    console.log('BANK:', chipCase[2].value, 'PLAYER:', chipCase[0].value);
    winThePot(chipCase, pot);
  } else {
    console.log('BANK:', chipCase[2].value, 'PLAYER:', chipCase[0].value);
    pushThePot(chipCase, pot);
  }
};

module.exports = {
  chipCase,
  printChip,
  makeThePot,
  winThePot,
  loseThePot,
  pushThePot,
  WinConInv

};
