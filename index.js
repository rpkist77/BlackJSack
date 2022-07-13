import Card from "./Classes/Card.js";
import Deck from "./Classes/Deck.js";
import Shoe from "./Classes/Shoe.js";
import Rules from "./Classes/Rules.js";
import Player from "./Classes/Player.js";
import Dealer from "./Classes/Dealer.js";
import { createPlayers } from "./Functions/createPlayers.js";

let rules = new Rules();
let shoe = new Deck(rules.deckCount);
let players = createPlayers(rules);
shoe.shuffle();
