class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  /*every time you create a new game, the order of the cards
  should change. HINT: can implement Fischer-Yates shuffle.*/
  shuffleCards(cards) {
    let currentIndex = this.cards.length;
    while (currentIndex > 0) {
      currentIndex--;
      const randomIndex = Math.floor(Math.random() * currentIndex);
      let temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }
  //method to check if game is finished.
  /*need to check if prop pairsGuessed has reached THE # OF 
  PAIRS THE GAME HAS*/
  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
