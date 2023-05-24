let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
console.log(messageEl)

let cardEl = document.getElementById("card-el")
cardEl.textContent = "Cards: firstCard + secondCard"

let sumEl = document.getElementById("sum-el")

function startGame() {
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: " + cards[0] +"  "+ cards 

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
}


function newCard() {
    console.log("Drawing a new card from the deck!")
    let card = 7
    sum += card
    renderGame()
}
