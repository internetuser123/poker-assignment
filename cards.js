import Player from '/players.js'
import Deck from '/deck.js'

class Card {
  constructor(value, suit) {
    this.value = value
    this.suit = suit
  }
  
}

const deck = new Deck()
const luke = new Player("Luke")
const slim = new Player("Slim")

/* deck.createDeck()
deck.shuffle()
const deckCopy = [...deck.cards]
console.log("Deep copy Deck", deckCopy)
console.log(deck.cards)
deck.dealCards([luke, slim]);
console.log(luke.hand);
console.log(slim.hand);
const lukeCopy = [...luke.hand]
const slimCopy = [...slim.hand]
console.log("Luke deep copy", lukeCopy);
console.log("Slim deep copy", slimCopy);
console.log("Deck after first deal cards", deck.cards);
luke.getValues()
slim.getValues()
luke.discardCards(2)
slim.discardCards(2)
console.log("Card pile after first discard", luke.discardedCards)
console.log("Deck after reshuffle", deck.cards)
deck.dealCards([luke, slim], 2);
luke.getValues()
slim.getValues()
console.log(deck.cards)  
console.log(luke.hand);
console.log(slim.hand);
luke.discardCards(5)
slim.discardCards(5)
console.log(luke.hand);
console.log(slim.hand);
console.log(luke.discardedCards)
console.log(slim.discardedCards)
deck.shuffleThrownCards(luke)
deck.shuffleThrownCards(slim)
deck.shuffle()
console.log(deck.cards) */

deck.createDeck()
deck.shuffle()
/* const deckCopy = [...deck.cards]
console.log("Deep copy Deck", deckCopy) */
console.log("First deck", JSON.parse(JSON.stringify(deck.cards)))
deck.dealCards([luke, slim]);
console.log("Lukes first hand", JSON.parse(JSON.stringify(luke.hand)));
console.log("Slims first hand", JSON.parse(JSON.stringify(slim.hand)));
/* const lukeCopy = [...luke.hand]
const slimCopy = [...slim.hand] */
/* console.log("Luke deep copy", lukeCopy);
console.log("Slim deep copy", slimCopy); */
console.log("Deck after first deal cards", JSON.parse(JSON.stringify(deck.cards)));
luke.getValues("Luke")
slim.getValues("Slim")
luke.discardCards(2)
slim.discardCards(2)
console.log("Lukes hand after first discard", JSON.parse(JSON.stringify(luke.hand)));
console.log("Slims hand after first discard", JSON.parse(JSON.stringify(slim.hand)));
console.log("Lukes discarded cards", JSON.parse(JSON.stringify(luke.discardedCards)))
console.log("Slims discarded cards", JSON.parse(JSON.stringify(slim.discardedCards)))
/* console.log("Deck after reshuffle", JSON.parse(JSON.stringify(deck.cards))) */
deck.dealCards([luke, slim], 2);
console.log("Lukes hand after deal 2 cards", JSON.parse(JSON.stringify(luke.hand)));
console.log("Slims hand after deal 2 cards", JSON.parse(JSON.stringify(slim.hand)));
luke.getValues("Luke")
slim.getValues("Slim")
console.log("Deck after deal 2 cards", JSON.parse(JSON.stringify(deck.cards))) 
luke.discardCards(5)
slim.discardCards(5)
console.log("Lukes empty hand", luke.hand);
console.log("Slims empty hand", slim.hand);
console.log("Lukes discarded cards", luke.discardedCards)
console.log("Lukes discarded cards", slim.discardedCards)
deck.shuffleThrownCards(luke)
deck.shuffleThrownCards(slim)
deck.shuffle()
console.log("Deck after discarded cards have been reshuffled", deck.cards)









