const deck = require('./programfiles/deck');
const bf = require('./programfiles/basicFunc');
const stake = require('./programfiles/pot');
const readline = require('readline-sync');
const desk = require('./programfiles/desk');
// const chalk = require('chalk');

const quitOrNewGame = () => {
  const key = readline.question('Kilépés: (q) / Új Játék: (n)');
  if (key === 'q') {
    console.clear();
    process.exit();
  } else if (key === 'n') {
    console.clear();
    console.log('A játék újrakezdés még nem érhető el a demo változatban. Idítsd újra a programot ha szeretnél új játékot!');
    process.exit();
  }
};

const endGameLoop = () => {
  if (stake.chipCase[0].value === 0) {
    console.log('PLAYER IS INSOLVENCY');
    console.log('THE BANK WIN');
    console.log('GAME OVER');
    quitOrNewGame();
  } else if (stake.chipCase[2].value === 0) {
    console.log('BANK IS INSOLVENCY');
    console.log('THE PLAYER WIN');
    console.log('GAME OVER');
    quitOrNewGame();
  } else {
    const key = readline.question('DO YOU WANT TO COUNTINE THIS GAME? (y/n)');
    if (key === 'n') {
      quitOrNewGame();
    } else if (key === 'y') {
      console.clear();
      main();
    }
  }
};

const main = () => {
  let pot = 0;
  const bankHand = [];
  const playerHand = [];
  const shuffledDeck = bf.shuffleDeck(deck.deckArray);
  bf.mainHandDeal(shuffledDeck, playerHand, bankHand);
  desk.printTableMain(bankHand, playerHand, pot);
  stake.makeThePot(stake.chipCase, pot);
  // stake.printChip(stake.chipCase, pot);
  bf.callPlayerCard(shuffledDeck, playerHand, bankHand, 4, pot, desk);
  console.clear();
  desk.printTableFull(bankHand, playerHand, pot);
  stake.WinConInv(playerHand, bankHand, pot, stake.chipCase);
  pot -= pot;
  // console.log(pot);
  endGameLoop();
};

main();
