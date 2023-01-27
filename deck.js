
export default class Deck {
    constructor() {
      this.cards = [];
    }
  
    get numberOfCards() {
      return this.cards.length;
    }
  
    createDeck() {
      for (let suit = 0; suit < 4; suit++) {
        for (let value = 0; value < 13; value++) {
          this.cards.push({name: `${cardValues[value].name} of ${suits[suit]}`, value: cardValues[value].value})
          }
        }
    }
  
    shuffle() {
      for (let i = this.numberOfCards - 1; i > 0; i--) {
        const newIndex = Math.floor(Math.random() * (i + 1))
        const oldValue = this.cards[newIndex]
        this.cards[newIndex] = this.cards[i]
        this.cards[i] = oldValue
      }
      return this.cards;
    }
  
    dealCards(players, numberOfCards = 5) {
  
      players.forEach(player => {
        for (let i = 0; i < numberOfCards; i++) {
          player.hand.push(this.cards.shift())
        }  
      })
    }
  
    shuffleThrownCards(player) {
      this.cards = this.cards.concat(player.discardedCards)
    }
  }

const cardValues = [
    {name: "Ace", value: 14},
    {name: "2", value: 2},
    {name: "3", value: 3},
    {name: "4", value: 4}, 
    {name: "5", value: 5},
    {name: "6", value: 6},
    {name: "7", value: 7},
    {name: "8", value: 8},
    {name: "9", value: 9},
    {name: "10", value: 10},
    {name: "Jack", value: 11},
    {name: "Queen", value: 12},
    {name: "King", value: 13}
    ];
    
const suits = ["Hearts", "Spades", "Diamonds", "Clubs"];

