const deck = require('./programfiles/deck');
const bf = require('./programfiles/basicFunc');

const main = () => {
  const bankHand = [];
  const playerHand = [];
  const shuffledDeck = bf.shuffleDeck(deck.deckArray);
  bf.mainHandDeal(shuffledDeck, playerHand, bankHand);
  bf.revileTable(bankHand, playerHand);
  bf.callPlayerCard(shuffledDeck, playerHand, bankHand, 4);
};

main();
