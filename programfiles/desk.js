
const stake = require('./pot');
const card = require('./card');

const table = require('table');
const chalk = require('chalk');

const generateTabel = (n, m) => {
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};
const fillTable = (desk) => {
  for (let i = 0; i < desk.length; i++) {
    for (let j = 0; j < desk[i].length; j++) {
      desk[i][j] = (' ');
    }
  }
  return desk;
};

const fillWithCont = (desk, bankHand, playerHand, pot) => {
  desk[1][0] = chalk.bold.rgb(0, 0, 0).bgRgb(255, 156, 0)('CHIPPOOL:');
  desk[2][0] = chalk.bold.rgb(50, 50, 50).bgRgb(255, 200, 0)('BANK:');
  desk[2][1] = chalk.bold.rgb(255, 255, 50).bgRgb(50, 50, 50)(stake.chipCase[2].value);
  desk[2][3] = chalk.bold.rgb(50, 50, 50).bgRgb(255, 200, 0)('PLAYER:');
  desk[2][4] = chalk.bold.rgb(255, 255, 50).bgRgb(50, 50, 50)(stake.chipCase[0].value);
  desk[4][0] = chalk.bold.rgb(255, 255, 250).bgRgb(50, 50, 50)('BANK CARDS:');
  desk[4][1] = card.convertCard(bankHand[0]);
  desk[4][2] = card.overCard();
  desk[5][0] = chalk.bold.rgb(255, 255, 250).bgRgb(50, 50, 50)('PLAYER CARDS:');
  for (let i = 0; i < playerHand.length; i++) {
    desk[5][i + 1] = card.convertCard(playerHand[i]);
    if (playerHand[i] === 'BUST') {
      desk[5][i + 1] = chalk.bold.rgb(155, 0, 0)('BUST');
    }
  }
  desk[2][6] = chalk.bold.rgb(150, 50, 50).bgRgb(255, 255, 50)('POT:');
  desk[2][7] = chalk.bold.rgb(155, 50, 50).bgRgb(50, 50, 50)(pot);
  return desk;
};

const fillWithContFull = (desk, bankHand, playerHand, pot) => {
  desk[1][0] = chalk.bold.rgb(0, 0, 0).bgRgb(255, 156, 0)('CHIPPOOL:');
  desk[2][0] = chalk.bold.rgb(50, 50, 50).bgRgb(255, 200, 0)('BANK:');
  desk[2][1] = chalk.bold.rgb(255, 255, 50).bgRgb(50, 50, 50)(stake.chipCase[2].value);
  desk[2][3] = chalk.bold.rgb(50, 50, 50).bgRgb(255, 200, 0)('PLAYER:');
  desk[2][4] = chalk.bold.rgb(255, 255, 50).bgRgb(50, 50, 50)(stake.chipCase[0].value);
  desk[4][0] = chalk.bold.rgb(255, 255, 250).bgRgb(50, 50, 50)('BANK CARDS:');
  for (let j = 0; j < bankHand.length; j++) {
    desk[4][j + 1] = card.convertCard(bankHand[j]);
    if (bankHand[j] === 'BUST') {
      desk[4][j + 1] = chalk.bold.rgb(155, 0, 0)('BUST');
    }
  }
  desk[5][0] = chalk.bold.rgb(255, 255, 250).bgRgb(50, 50, 50)('PLAYER CARDS:');
  for (let i = 0; i < playerHand.length; i++) {
    desk[5][i + 1] = card.convertCard(playerHand[i]);
    if (playerHand[i] === 'BUST') {
      desk[5][i + 1] = chalk.bold.rgb(155, 0, 0)('BUST');
    }
  }
  desk[2][6] = chalk.bold.rgb(150, 50, 50).bgRgb(255, 255, 50)('POT:');
  desk[2][7] = chalk.bold.rgb(155, 50, 50).bgRgb(50, 50, 50)(pot);
  return desk;
};

const fillAnim = (bjAnim, animContent) => {
  for (let i = 0; i < bjAnim[0].length; i++) {
    bjAnim[0][i] = animContent[i];
  }
  return bjAnim;
};

const printTableMain = (bankHand, playerHand, pot) => {
  const animContent = [
    (chalk.bold.rgb(0, 0, 0)('CASINO')),
    (chalk.bold.rgb(250, 0, 0)('BLACK')),
    (chalk.bold.rgb(0, 0, 0)('JACK')),
    (chalk.bold.rgb(250, 0, 0)('CASINO')),
    (chalk.bold.rgb(0, 0, 0)('BLACK')),
    (chalk.bold.rgb(250, 0, 0)('JACK')),
    (chalk.bold.rgb(0, 0, 0)('CASINO')),
    (chalk.bold.rgb(250, 0, 0)('BLACK')),
    (chalk.bold.rgb(0, 0, 0)('JACK'))
  ];
  const termContent = [
    (chalk.bold.rgb(250, 250, 250)('V')),
    (chalk.bold.rgb(250, 250, 250)('V')),
    (chalk.bold.rgb(250, 250, 250)('V')),
    (chalk.bold.rgb(250, 250, 250)('GAME')),
    (chalk.bold.rgb(250, 250, 250)('TERMINAL')),
    (chalk.bold.rgb(250, 250, 250)('V')),
    (chalk.bold.rgb(250, 250, 250)('V')),
    (chalk.bold.rgb(250, 250, 250)('V')),
    (chalk.bold.rgb(250, 250, 250)(' '))
  ];
  const bjAnim = generateTabel(1, 9);
  fillAnim(bjAnim, animContent);
  const term = generateTabel(1, 9);
  fillAnim(term, termContent);
  const desk = generateTabel(7, 9);
  fillTable(desk);
  fillWithCont(desk, bankHand, playerHand, pot);
  console.clear();
  console.log(chalk.bgRgb(250, 250, 250)(chalk.rgb(250, 250, 250)(table.table(bjAnim, config))));
  console.log(chalk.bgRgb(0, 100, 0)(chalk.rgb(0, 100, 0)(table.table(desk, config))));
  console.log(chalk.bgRgb(250, 250, 250)(chalk.rgb(250, 250, 250)(table.table(bjAnim, config))));
  console.log(chalk.bgRgb(0, 0, 0)(chalk.rgb(0, 0, 0)(table.table(term, config))));
  return desk;
};

const printTableFull = (bankHand, playerHand, pot) => {
  const animContent = [
    (chalk.bold.rgb(0, 0, 0)('CASINO')),
    (chalk.bold.rgb(250, 0, 0)('BLACK')),
    (chalk.bold.rgb(0, 0, 0)('JACK')),
    (chalk.bold.rgb(250, 0, 0)('CASINO')),
    (chalk.bold.rgb(0, 0, 0)('BLACK')),
    (chalk.bold.rgb(250, 0, 0)('JACK')),
    (chalk.bold.rgb(0, 0, 0)('CASINO')),
    (chalk.bold.rgb(250, 0, 0)('BLACK')),
    (chalk.bold.rgb(0, 0, 0)('JACK'))
  ];
  const termContent = [
    (chalk.bold.rgb(250, 250, 250)('V')),
    (chalk.bold.rgb(250, 250, 250)('V')),
    (chalk.bold.rgb(250, 250, 250)('V')),
    (chalk.bold.rgb(250, 250, 250)('GAME')),
    (chalk.bold.rgb(250, 250, 250)('TERMINAL')),
    (chalk.bold.rgb(250, 250, 250)('V')),
    (chalk.bold.rgb(250, 250, 250)('V')),
    (chalk.bold.rgb(250, 250, 250)('V')),
    (chalk.bold.rgb(250, 250, 250)(' '))
  ];
  const bjAnim = generateTabel(1, 9);
  fillAnim(bjAnim, animContent);
  const term = generateTabel(1, 9);
  fillAnim(term, termContent);
  const desk = generateTabel(7, 9);

  fillTable(desk);
  fillWithContFull(desk, bankHand, playerHand, pot);
  console.clear();
  console.log(chalk.bgRgb(250, 250, 250)(chalk.rgb(250, 250, 250)(table.table(bjAnim, config))));
  console.log(chalk.bgRgb(0, 100, 0)(chalk.rgb(0, 100, 0)(table.table(desk, config))));
  console.log(chalk.bgRgb(250, 250, 250)(chalk.rgb(250, 250, 250)(table.table(bjAnim, config))));
  console.log(chalk.bgRgb(0, 0, 0)(chalk.rgb(0, 0, 0)(table.table(term, config))));
  return desk;
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

module.exports = {
  generateTabel,
  fillTable,
  fillWithCont,
  fillWithContFull,
  printTableMain,
  printTableFull

};
