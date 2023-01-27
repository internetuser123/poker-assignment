

export default class Player {
    constructor(name) {
      this.name = name
      this.hand = []
      this.discardedCards = []
    }
  
    getValues(player) {
      let value = this.hand.reduce(function (accumulator, obj) {
          return accumulator + obj.value
          }, 0)
          console.log(`Value of ${player}s cards: ${value}`)
        }
    
    discardCards(amount) {
      for (let i = 0; i < amount; i++) {
        this.discardedCards.push(this.hand.pop())
      }
    }
  
  }

  