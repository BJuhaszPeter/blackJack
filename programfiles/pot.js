const readline = require('readline-sync');
const chalk = require('chalk');

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
  pot = readline.question(chalk.bold.rgb(155, 50, 50).bgRgb(255, 255, 50)('TAKE THE POT\n'));
  if (chipCase[0].value < pot) {
    console.log(chalk.bold.rgb(250, 50, 50).bgRgb(250, 250, 250)('YOU DONT HAVE THIS MOUNT OF CHIPS\n'));
    makeThePot(chipCase);
  } else {
    chipCase[1].value = pot;
    chipCase[0].value = (chipCase[0].value - pot);
  }
  return pot;
};

const winThePot = (chipCase, pot) => {
  chipCase[0].value = chipCase[0].value + (pot * 2);
  chipCase[2].value = chipCase[2].value - (pot * 1);
  console.log(chalk.bold.rgb(0, 0, 0).bgRgb(255, 255, 50)('THE WINNER IS THE PLAYER!'));
  console.log(' ');
  console.log(chalk.bold.rgb(0, 0, 0).bgRgb(255, 255, 50)('Player:'), chalk.bold.rgb(250, 0, 0).bgRgb(255, 255, 50)(chipCase[0].value));
  console.log(' ');
  console.log(chalk.bold.rgb(200, 200, 200).bgRgb(150, 50, 50)('BANK:'), (chalk.bold.rgb(0, 0, 100).bgRgb(150, 50, 50)(chipCase[2].value)));
};

const loseThePot = (chipCase, pot) => {
  chipCase[2].value = chipCase[2].value + (pot * 1);
  console.log((chalk.bold.rgb(0, 0, 0).bgRgb(255, 255, 50)('THE WINNER IS THE BANK!')));
  console.log(' ');
  console.log(chalk.bold.rgb(200, 200, 200).bgRgb(150, 50, 50)('Player:'), (chalk.bold.rgb(0, 0, 100).bgRgb(150, 50, 50)(chipCase[0].value)));
  console.log(' ');
  console.log((chalk.bold.rgb(0, 0, 0).bgRgb(255, 255, 50)('BANK:'), chalk.bold.rgb(250, 0, 0).bgRgb(255, 255, 50)(chipCase[2].value)));
};

const pushThePot = (chipCase, pot) => {
  chipCase[0].value = chipCase[0].value + (pot * 1);
  console.log(chalk.bold.rgb(250, 0, 0).bgRgb(255, 255, 255)('PUSH!!!'));
  console.log(' ');
  console.log(chalk.bold.rgb(0, 0, 0).bgRgb(255, 255, 50)('Player:'), chalk.bold.rgb(250, 0, 0).bgRgb(255, 255, 50)(chipCase[0].value));
  console.log(' ');
  console.log(chalk.bold.rgb(200, 200, 200).bgRgb(150, 50, 50)('BANK:'), (chalk.bold.rgb(0, 0, 0).bgRgb(150, 50, 50)(chipCase[2].value)));
};

const WinConInv = (playerHand, bankHand, pot, chipCase) => {
  let bankValue = 0;
  let playerValue = 0;

  for (let i = 0; i < playerHand.length; i++) {
    if (playerHand[i] === 'BUST') {
      loseThePot(chipCase, pot);
      return console.log(chalk.bold.rgb(250, 0, 0).bgRgb(255, 255, 255)('\n PLAYER BUST! \n'));
    }
  }
  for (let i = 0; i < bankHand.length; i++) {
    if (bankHand[i] === 'BUST') {
      winThePot(chipCase, pot);
      return console.log(chalk.bold.rgb(0, 0, 0).bgRgb(255, 0, 0)('\n BANK BUST! \n'));
    }
  }
  for (let i = 0; i < bankHand.length; i++) {
    bankValue = bankValue + bankHand[i].value;
  }
  for (let j = 0; j < playerHand.length; j++) {
    playerValue = playerValue + playerHand[j].value;
  }

  if (bankValue > playerValue) {
    return loseThePot(chipCase, pot);
  } else if (bankValue < playerValue) {
    return winThePot(chipCase, pot);
  } else {
    return pushThePot(chipCase, pot);
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
