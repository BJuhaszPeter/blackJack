
const table = require('table');
const chalk = require('chalk');
const card = require('./card');
const deck = require('./deck');

const generateTabel = (n, m) => {
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};

const generateCasino = () => {
  const casino = generateTabel(1, 6);
  casino[0][0] = chalk.rgb(50, 0, 0)(' ██████╗ █████╗ ███████╗██╗███╗   ██╗ ██████╗ ');
  casino[0][1] = chalk.rgb(40, 0, 0)('██╔════╝██╔══██╗██╔════╝██║████╗  ██║██╔═══██╗');
  casino[0][2] = chalk.rgb(30, 0, 0)('██║     ███████║███████╗██║██╔██╗ ██║██║   ██║');
  casino[0][3] = chalk.rgb(20, 0, 0)('██║     ██╔══██║╚════██║██║██║╚██╗██║██║   ██║');
  casino[0][4] = chalk.rgb(10, 0, 0)('╚██████╗██║  ██║███████║██║██║ ╚████║╚██████╔╝');
  casino[0][5] = chalk.rgb(0, 0, 0)(' ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ');
  casino[0][6] = chalk.black('══════════════════════════════════════════════');
  return casino;
};

const generateBlack = () => {
  const black = generateTabel(1, 6);
  black[0][0] = chalk.rgb(50, 50, 50)('      ██████╗ ██╗      █████╗  ██████╗██╗  ██╗');
  black[0][1] = chalk.rgb(40, 40, 40)('      ██╔══██╗██║     ██╔══██╗██╔════╝██║ ██╔╝');
  black[0][2] = chalk.rgb(30, 30, 30)('      ██████╔╝██║     ███████║██║     █████╔╝ ');
  black[0][3] = chalk.rgb(20, 20, 20)('      ██╔══██╗██║     ██╔══██║██║     ██╔═██╗ ');
  black[0][4] = chalk.rgb(10, 10, 10)('     ╚██████╔╝███████╗██║  ██║╚██████╗██║  ██╗');
  black[0][5] = chalk.rgb(0, 0, 0)('      ╚═════╝ ╚══════╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝');
  black[0][6] = chalk.black('      ════════════════════════════════════════');
  return black;
};

const generateJack = () => {
  const jack = generateTabel(1, 6);
  jack[0][0] = chalk.rgb(150, 0, 0)('     ██╗ █████╗  ██████╗██╗  ██╗              ');
  jack[0][1] = chalk.rgb(120, 0, 0)('     ██║██╔══██╗██╔════╝██║ ██╔╝              ');
  jack[0][2] = chalk.rgb(100, 0, 0)('     ██║███████║██║     █████╔╝               ');
  jack[0][3] = chalk.rgb(70, 0, 0)('██   ██║██╔══██║██║     ██╔═██╗               ');
  jack[0][4] = chalk.rgb(50, 0, 0)('╚█████╔╝██║  ██║╚██████╗██║  ██╗              ');
  jack[0][5] = chalk.rgb(0, 0, 0)(' ╚════╝ ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝              ');
  jack[0][6] = chalk.black('════════════════════════════');
  return jack;
};

const fillMainMenu = () => {
  console.clear();
  const mainMenu = generateTabel(5, 4);

  const config = {

    columns: {
      0: {
        alignment: 'center',
        width: 12
      },
      1: {
        alignment: 'center',
        width: 47
      },
      2: {
        alignment: 'center',
        width: 47
      },
      3: {
        alignment: 'center',
        width: 12
      }

    }

  };
  const casino = generateCasino();
  const black = generateBlack();
  const jack = generateJack();
  mainMenu[1][0] = card.convertCard(deck.deckArray[12]);
  mainMenu[1][3] = card.convertCard(deck.deckArray[51]);
  mainMenu[2][0] = card.convertCard(deck.deckArray[25]);
  mainMenu[2][3] = card.convertCard(deck.deckArray[38]);
  mainMenu[1][1] = casino;
  mainMenu[2][1] = black;
  mainMenu[2][2] = jack;
  mainMenu[3][1] = chalk.bold.rgb(255, 255, 250).bgRgb(50, 50, 50)('NEW GAME:(n)');
  mainMenu[3][2] = chalk.bold.rgb(255, 255, 250).bgRgb(50, 50, 50)('QUIT:(q)');
  console.log(chalk.bgRgb(0, 100, 0)(chalk.rgb(0, 100, 0)(table.table(mainMenu, config))));
};

module.exports = {
  generateCasino,
  generateBlack,
  generateJack,
  fillMainMenu

};
