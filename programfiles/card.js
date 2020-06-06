// const deck = require('./deck');
const chalk = require('chalk');

const GenereateCard = () => {
  const arr = new Array(0);

  arr[0] = new Array(8);

  return arr;
};

const fillCard = (arr, cardName, cardColor) => {
  const cardName1 = `${'│'}${cardName} ${'      │'}`;
  const cardColor1 = `${'│   '} ${cardColor} ${'   │'}`;
  const cardName2 = `${'│     '} ${cardName} ${'│'}`;
  arr[0][0] = chalk.bgWhite('┌─────────┐');
  arr[0][1] = chalk.bgWhite(cardName1);
  arr[0][2] = chalk.bgWhite('│         │');
  arr[0][3] = chalk.bgWhite('│         │');
  arr[0][4] = chalk.bgWhite(cardColor1);
  arr[0][5] = chalk.bgWhite('│         │');
  arr[0][6] = chalk.bgWhite('│         │');
  arr[0][7] = chalk.bgWhite(cardName2);
  arr[0][8] = chalk.bgWhite('└─────────┘');
};

const convertCard = (actCard) => {
  const card = GenereateCard();
  const cardName = actCard.name;
  const cardColor = actCard.color;
  fillCard(card, cardName, cardColor);
  return card;
};

const overCard = () => {
  const overCrd = [[
    chalk.bgWhite('┌─────────┐'),
    chalk.bgWhite('│░░░░░░░░░│'),
    chalk.bgWhite('│░░░░░░░░░│'),
    chalk.bgWhite('│░░░░░░░░░│'),
    chalk.bgWhite('│░░░░░░░░░│'),
    chalk.bgWhite('│░░░░░░░░░│'),
    chalk.bgWhite('│░░░░░░░░░│'),
    chalk.bgWhite('│░░░░░░░░░│'),
    chalk.bgWhite('└─────────┘')]];
  return overCrd;
};

module.exports = {
  GenereateCard,
  fillCard,
  convertCard,
  overCard

};
