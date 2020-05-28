// const deck = require('./deck');
// const bf = require('./basicFunc');
const stake = require('./pot');
const card = require('./card');
// const readline = require('readline-sync');
const table = require('table');
const chalk = require('chalk');

const generateTabel = (n, m) => {
  const arr = new Array(n); // Sorok létrehozása
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m); // minden sorhoz m oszlop hozzáadása
  }
  return arr;
};
const fillTable = (desk) => {
  for (let i = 0; i < desk.length; i++) {
    for (let j = 0; j < desk[i].length; j++) {
      desk[i][j] = (' ');
    }
  }
};

const fillWithCont = (desk, bankHand, playerHand, pot) => {
  desk[1][2] = chalk.underline.bold.rgb(250, 250, 250).bgRgb(0, 0, 0)('BLACKJACK');
  desk[3][0] = chalk.bold.rgb(0, 0, 0).bgRgb(255, 156, 0)('CHIPPOOL:');
  desk[4][0] = chalk.bold.rgb(50, 50, 50).bgRgb(255, 200, 0)('BANK:');
  desk[4][1] = chalk.bold.rgb(255, 255, 50).bgRgb(50, 50, 50)(stake.chipCase[2].value);
  desk[4][3] = chalk.bold.rgb(50, 50, 50).bgRgb(255, 200, 0)('PLAYER:');
  desk[4][4] = chalk.bold.rgb(255, 255, 50).bgRgb(50, 50, 50)(stake.chipCase[0].value);
  desk[6][0] = chalk.bold.rgb(255, 255, 250).bgRgb(50, 50, 50)('BANK CARDS:');
  desk[6][1] = card.convertCard(bankHand[0]);
  desk[6][2] = card.overCard();
  desk[7][0] = chalk.bold.rgb(255, 255, 250).bgRgb(50, 50, 50)('PLAYER CARDS:');
  for (let i = 0; i < playerHand.length; i++) {
    desk[7][i + 1] = card.convertCard(playerHand[i]);
    if (playerHand[i] === 'BUST') {
      desk[7][i + 1] = chalk.bold.rgb(155, 0, 0)('BUST');
    }
  }
  desk[9][0] = chalk.bold.rgb(150, 50, 50).bgRgb(255, 255, 50)('POT:');
  desk[9][1] = chalk.bold.rgb(155, 50, 50).bgRgb(50, 50, 50)(pot);
};

const fillWithContFull = (desk, bankHand, playerHand, pot) => {
  desk[1][2] = chalk.underline.bold.rgb(250, 250, 250).bgRgb(0, 0, 0)('BLACKJACK');
  desk[3][0] = chalk.bold.rgb(0, 0, 0).bgRgb(255, 156, 0)('CHIPPOOL:');
  desk[4][0] = chalk.bold.rgb(50, 50, 50).bgRgb(255, 200, 0)('BANK:');
  desk[4][1] = chalk.bold.rgb(255, 255, 50).bgRgb(50, 50, 50)(stake.chipCase[2].value);
  desk[4][3] = chalk.bold.rgb(50, 50, 50).bgRgb(255, 200, 0)('PLAYER:');
  desk[4][4] = chalk.bold.rgb(255, 255, 50).bgRgb(50, 50, 50)(stake.chipCase[0].value);
  desk[6][0] = chalk.bold.rgb(255, 255, 250).bgRgb(50, 50, 50)('BANK CARDS:');
  for (let j = 0; j < bankHand.length; j++) {
    desk[6][j + 1] = card.convertCard(bankHand[j]);
    if (bankHand[j] === 'BUST') {
      desk[7][j + 1] = chalk.bold.rgb(155, 0, 0)('BUST');
    }
  }
  desk[7][0] = chalk.bold.rgb(255, 255, 250).bgRgb(50, 50, 50)('PLAYER CARDS:');
  for (let i = 0; i < playerHand.length; i++) {
    desk[7][i + 1] = card.convertCard(playerHand[i]);
    if (playerHand[i] === 'BUST') {
      desk[7][i + 1] = chalk.bold.rgb(155, 0, 0)('BUST');
    }
  }
  desk[9][0] = chalk.bold.rgb(150, 50, 50).bgRgb(255, 255, 50)('POT:');
  desk[9][1] = chalk.bold.rgb(155, 50, 50).bgRgb(50, 50, 50)(pot);
};

const printTableMain = (bankHand, playerHand, pot) => {
  const desk = generateTabel(10, 10);
  fillTable(desk);
  fillWithCont(desk, bankHand, playerHand, pot);
  console.clear();
  console.log(chalk.bgRgb(0, 100, 0)(chalk.rgb(0, 100, 0)(table.table(desk, config))));
};

const printTableFull = (bankHand, playerHand, pot) => {
  const desk = generateTabel(10, 10);
  fillTable(desk);
  fillWithContFull(desk, bankHand, playerHand, pot);
  console.clear();
  console.log(chalk.bgRgb(0, 100, 0)(chalk.rgb(0, 100, 0)(table.table(desk, config))));
};

const config = {

  columns: {
    0: {
      alignment: 'center',
      width: 16
    },
    1: {
      alignment: 'center',
      width: 12
    },
    2: {
      alignment: 'center',
      width: 12
    },
    3: {
      alignment: 'center',
      width: 12
    },
    4: {
      alignment: 'center',
      width: 12
    },
    5: {
      alignment: 'center',
      width: 12
    },
    6: {
      alignment: 'center',
      width: 12
    },
    7: {
      alignment: 'center',
      width: 12
    },
    8: {
      alignment: 'center',
      width: 12
    }
  }

};

// printTableMain(bankHand, playerHand, pot);

// printTableFull(bankHand, playerHand, pot);

module.exports = {
  generateTabel,
  fillTable,
  fillWithCont,
  fillWithContFull,
  printTableMain,
  printTableFull

};
