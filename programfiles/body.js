const deck = require('./deck');
const bf = require('./basicFunc');
const stake = require('./pot');
const readline = require('readline-sync');
const desk = require('./desk');
const chalk = require('chalk');
const menu = require('./animation');

const quitOrNewGame = () => {
  const key = readline.question(chalk.bgRgb(0, 0, 0)(chalk.rgb(200, 200, 200)('Quit: (q) / Nem Game: (n)')));
  if (key === 'q') {
    console.clear();
    process.exit();
  } else if (key === 'n') {
    console.clear();
    mainMenuCall();
  }
};

const endGameLoop = () => {
  if (stake.chipCase[0].value === 0) {
    console.log(chalk.bgRgb(0, 0, 0)(chalk.rgb(250, 0, 0)('PLAYER IS INSOLVENCY')));
    console.log(chalk.bgRgb(0, 0, 0)(chalk.rgb(200, 200, 0)('THE BANK WIN')));
    console.log(chalk.bgRgb(250, 250, 250)(chalk.rgb(150, 0, 0)('GAME OVER')));
    quitOrNewGame();
  } else if (stake.chipCase[2].value === 0) {
    console.log(chalk.bgRgb(0, 0, 0)(chalk.rgb(250, 0, 0)('BANK IS INSOLVENCY')));
    console.log(chalk.bgRgb(0, 0, 0)(chalk.rgb(200, 200, 0)('THE PLAYER WIN')));
    console.log(chalk.bgRgb(250, 250, 250)(chalk.rgb(150, 0, 0)('GAME OVER')));
    quitOrNewGame();
  } else {
    const key = readline.question(chalk.bgRgb(0, 0, 0)(chalk.rgb(200, 200, 200)('DO YOU WANT TO COUNTINE THIS GAME? (y/n)')));
    if (key === 'n') {
      quitOrNewGame();
    } else if (key === 'y') {
      console.clear();
      body();
    }
  }
};

const body = () => {
  let pot = 0;
  const bankHand = [];
  const playerHand = [];
  const shuffledDeck = bf.shuffleDeck(deck.deckArray);
  bf.mainHandDeal(shuffledDeck, playerHand, bankHand);
  desk.printTableMain(bankHand, playerHand, pot);
  pot = stake.makeThePot(stake.chipCase, pot);
  desk.printTableMain(bankHand, playerHand, pot);
  bf.callPlayerCard(shuffledDeck, playerHand, bankHand, 4, pot, desk);
  console.clear();
  desk.printTableFull(bankHand, playerHand, pot);
  stake.WinConInv(playerHand, bankHand, pot, stake.chipCase);
  pot -= pot;

  endGameLoop();
};

const mainMenuCall = () => {
  menu.fillMainMenu();
  const key = readline.keyIn();
  if (key === 'q') {
    console.clear();
    process.exit();
  } else if (key === 'n') {
    body();
  }
};

module.exports = {
  quitOrNewGame,
  endGameLoop,
  body,
  mainMenuCall

};
