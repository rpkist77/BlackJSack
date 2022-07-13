import Card from "./Card.js";

class Deck {
  constructor(numOfDecks = 1) {
    this.cards = [];
    const suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
    const values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
    for (let i = 0; i < numOfDecks; i++) {
      for (let suit in suits) {
        for (let value in values) {
          this.cards.push(new Card(values[value], suits[suit]));
        }
      }
    }
  }

  shuffle() {
    for (let i = 0; i < this.cards.length; i++) {
      let rand = Math.floor(Math.random() * this.cards.length);
      const temp = this.cards[i];
      this.cards[i] = this.cards[rand];
      this.cards[rand] = temp;
    }
    return this;
  }
}

export default Deck;
