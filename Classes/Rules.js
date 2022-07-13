import Player from "./Player.js";

class Rules {
  constructor() {
    //Generic Setup Values
    this.deckCount = 6;
    this.seats = 8;
    this.casinoMoney = 100000;
    this.playerMoney = 1000;

    //Game Specific Rules
    this.blackjackPay = 3 / 2;
    this.dealHitSoftSeventeen = true;
    this.canDoubleSplit = true;
    this.MaxSplitHands = 4;
    this.insurancePayout = 2;
    this.surrenderPayout = -(1 / 2);

    //Players
    this.players = [
      new Player(0, this.playerMoney, "TestPlayer0", "Standard"),
      new Player(1, this.playerMoney, "TestPlayer`", "Standard"),
      new Player(2, this.playerMoney, "TestPlayer1", "Standard"),
      new Player(3, this.playerMoney, "TestPlayer2", "Standard"),
      null,
      new Player(5, this.playerMoney, "TestPlayer5", "Standard"),
      null,
      new Player(7, this.playerMoney, "TestPlayer7", "Standard"),
      null,
    ];
  }
}

export default Rules;
