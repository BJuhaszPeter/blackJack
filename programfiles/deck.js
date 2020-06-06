const chalk = require('chalk');

const deckArray = [

  {
    name: chalk.bold.rgb(0, 0, 0)('2 '),
    color: chalk.bold.rgb(0, 0, 0)('♠'),
    value: 2
  },
  {
    name: chalk.bold.rgb(0, 0, 0)('3 '),
    color: chalk.bold.rgb(0, 0, 0)('♠'),
    value: 3
  },
  {
    name: chalk.bold.rgb(0, 0, 0)('4 '),
    color: chalk.bold.rgb(0, 0, 0)('♠'),
    value: 4
  },
  {
    name: chalk.bold.rgb(0, 0, 0)('5 '),
    color: chalk.bold.rgb(0, 0, 0)('♠'),
    value: 5
  },
  {
    name: chalk.bold.rgb(0, 0, 0)('6 '),
    color: chalk.bold.rgb(0, 0, 0)('♠'),
    value: 6
  },
  {
    name: chalk.bold.rgb(0, 0, 0)('7 '),
    color: chalk.bold.rgb(0, 0, 0)('♠'),
    value: 7
  },
  {
    name: chalk.bold.rgb(0, 0, 0)('8 '),
    color: chalk.bold.rgb(0, 0, 0)('♠'),
    value: 8
  },
  {
    name: chalk.bold.rgb(0, 0, 0)('9 '),
    color: chalk.bold.rgb(0, 0, 0)('♠'),
    value: 9
  },
  {
    name: chalk.bold.rgb(0, 0, 0)('10'),
    color: chalk.bold.rgb(0, 0, 0)('♠'),
    value: 10
  },
  {
    name: chalk.bold.rgb(0, 0, 0)('J '),
    color: chalk.bold.rgb(0, 0, 0)('♠'),
    value: 10
  },
  {
    name: chalk.bold.rgb(0, 0, 0)('Q '),
    color: chalk.bold.rgb(0, 0, 0)('♠'),
    value: 10
  },
  {
    name: chalk.bold.rgb(0, 0, 0)('K '),
    color: chalk.bold.rgb(0, 0, 0)('♠'),
    value: 10
  },

  {
    name: chalk.bold.rgb(0, 0, 0)('A '),
    color: chalk.bold.rgb(0, 0, 0)('♠'),
    value: 11
  },
  {
    name: chalk.bold.rgb(250, 0, 0)('2 '),
    color: chalk.bold.rgb(250, 0, 0)('♥'),
    value: 2
  },
  {
    name: chalk.bold.rgb(250, 0, 0)('3 '),
    color: chalk.bold.rgb(250, 0, 0)('♥'),
    value: 3
  },
  {
    name: chalk.bold.rgb(250, 0, 0)('4 '),
    color: chalk.bold.rgb(250, 0, 0)('♥'),
    value: 4
  },
  {
    name: chalk.bold.rgb(250, 0, 0)('5 '),
    color: chalk.bold.rgb(250, 0, 0)('♥'),
    value: 5
  },
  {
    name: chalk.bold.rgb(250, 0, 0)('6 '),
    color: chalk.bold.rgb(250, 0, 0)('♥'),
    value: 6
  },
  {
    name: chalk.bold.rgb(250, 0, 0)('7 '),
    color: chalk.bold.rgb(250, 0, 0)('♥'),
    value: 7
  },
  {
    name: chalk.bold.rgb(250, 0, 0)('8 '),
    color: chalk.bold.rgb(250, 0, 0)('♥'),
    value: 8
  },
  {
    name: chalk.bold.rgb(250, 0, 0)('9 '),
    color: chalk.bold.rgb(250, 0, 0)('♥'),
    value: 9
  },
  {
    name: chalk.bold.rgb(250, 0, 0)('10'),
    color: chalk.bold.rgb(250, 0, 0)('♥'),
    value: 10
  },
  {
    name: chalk.bold.rgb(250, 0, 0)('J '),
    color: chalk.bold.rgb(250, 0, 0)('♥'),
    value: 10
  },
  {
    name: chalk.bold.rgb(250, 0, 0)('Q '),
    color: chalk.bold.rgb(250, 0, 0)('♥'),
    value: 10
  },
  {
    name: chalk.bold.rgb(250, 0, 0)('K '),
    color: chalk.bold.rgb(250, 0, 0)('♥'),
    value: 10
  },
  {
    name: chalk.bold.rgb(250, 0, 0)('A '),
    color: chalk.bold.rgb(250, 0, 0)('♥'),
    value: 11
  },

  {
    name: chalk.bold.rgb(0, 0, 0)('2 '),
    color: chalk.bold.rgb(0, 0, 0)('♣'),
    value: 2
  },
  {
    name: chalk.bold.rgb(0, 0, 0)('3 '),
    color: chalk.bold.rgb(0, 0, 0)('♣'),
    value: 3
  },
  {
    name: chalk.bold.rgb(0, 0, 0)('4 '),
    color: chalk.bold.rgb(0, 0, 0)('♣'),
    value: 4
  },
  {
    name: chalk.bold.rgb(0, 0, 0)('5 '),
    color: chalk.bold.rgb(0, 0, 0)('♣'),
    value: 5
  },
  {
    name: chalk.bold.rgb(0, 0, 0)('6 '),
    color: chalk.bold.rgb(0, 0, 0)('♣'),
    value: 6
  },
  {
    name: chalk.bold.rgb(0, 0, 0)('7 '),
    color: chalk.bold.rgb(0, 0, 0)('♣'),
    value: 7
  },
  {
    name: chalk.bold.rgb(0, 0, 0)('8 '),
    color: chalk.bold.rgb(0, 0, 0)('♣'),
    value: 8
  },
  {
    name: chalk.bold.rgb(0, 0, 0)('9 '),
    color: chalk.bold.rgb(0, 0, 0)('♣'),
    value: 9
  },
  {
    name: chalk.bold.rgb(0, 0, 0)('10'),
    color: chalk.bold.rgb(0, 0, 0)('♣'),
    value: 10
  },
  {
    name: chalk.bold.rgb(0, 0, 0)('J '),
    color: chalk.bold.rgb(0, 0, 0)('♣'),
    value: 10
  },
  {
    name: chalk.bold.rgb(0, 0, 0)('Q '),
    color: chalk.bold.rgb(0, 0, 0)('♣'),
    value: 10
  },
  {
    name: chalk.bold.rgb(0, 0, 0)('K '),
    color: chalk.bold.rgb(0, 0, 0)('♣'),
    value: 10
  },
  {
    name: chalk.bold.rgb(0, 0, 0)('A '),
    color: chalk.bold.rgb(0, 0, 0)('♣'),
    value: 11
  },

  {
    name: chalk.bold.rgb(250, 0, 0)('2 '),
    color: chalk.bold.rgb(250, 0, 0)('♦'),
    value: 2
  },
  {
    name: chalk.bold.rgb(250, 0, 0)('3 '),
    color: chalk.bold.rgb(250, 0, 0)('♦'),
    value: 3
  },
  {
    name: chalk.bold.rgb(250, 0, 0)('4 '),
    color: chalk.bold.rgb(250, 0, 0)('♦'),
    value: 4
  },
  {
    name: chalk.bold.rgb(250, 0, 0)('5 '),
    color: chalk.bold.rgb(250, 0, 0)('♦'),
    value: 5
  },
  {
    name: chalk.bold.rgb(250, 0, 0)('6 '),
    color: chalk.bold.rgb(250, 0, 0)('♦'),
    value: 6
  },
  {
    name: chalk.bold.rgb(250, 0, 0)('7 '),
    color: chalk.bold.rgb(250, 0, 0)('♦'),
    value: 7
  },
  {
    name: chalk.bold.rgb(250, 0, 0)('8 '),
    color: chalk.bold.rgb(250, 0, 0)('♦'),
    value: 8
  },
  {
    name: chalk.bold.rgb(250, 0, 0)('9 '),
    color: chalk.bold.rgb(250, 0, 0)('♦'),
    value: 9
  },
  {
    name: chalk.bold.rgb(250, 0, 0)('10'),
    color: chalk.bold.rgb(250, 0, 0)('♦'),
    value: 10
  },
  {
    name: chalk.bold.rgb(250, 0, 0)('J '),
    color: chalk.bold.rgb(250, 0, 0)('♦'),
    value: 10
  },
  {
    name: chalk.bold.rgb(250, 0, 0)('Q '),
    color: chalk.bold.rgb(250, 0, 0)('♦'),
    value: 10
  },
  {
    name: chalk.bold.rgb(250, 0, 0)('K '),
    color: chalk.bold.rgb(250, 0, 0)('♦'),
    value: 10
  },
  {
    name: chalk.bold.rgb(250, 0, 0)('A '),
    color: chalk.bold.rgb(250, 0, 0)('♦'),
    value: 11
  }

];

module.exports = {
  deckArray
};
