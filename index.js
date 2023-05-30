let player = {
    name: "Player",
    chips: 0
}

let cards = []
let sum = 0 
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumer = Math.floor( Math.random()*13 ) + 1 // 1-13
    if ( randomNumer > 11) {
        return 10
    } else if ( randomNumer === 1 ) {
        return 11 
    } else {
        return randomNumer 
    }
}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " 
    for ( let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
        
}
    sumEl.textContent = "Sum:  " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!" 
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message

    if (hasBlackJack === true) {
        playerEl.textContent = player.name + ": $200 Congraatulations" 
    } else if (hasBlackJack === false) {
        playerEl.textContent = player.name + ": $" + player.chips 
    }
}


function newCard() {
    if ( isAlive === true && hasBlackJack === false) {
          let card = getRandomCard()
          sum += card
          cards.push(card)
          renderGame()
          }
}


if (hasBlackJack === true) {
    playerEl.textContent = player.name + ": $200 Congraatulations" 
} else if (hasBlackJack === false) {
    playerEl.textContent = player.name + ": $" + player.chips 
}