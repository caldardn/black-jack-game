
    

let firstCard = 10
let secondCard = 4
let card = [firstCard, secondCard]
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function start(){
    renderGame()
}



function renderGame(){
cardsEl.textContent = "Cards: " + card[0] + ", " + card[1]
sumEl.textContent = "Sum: " + sum
    if (sum <= 20){
        message = "Would you like to draw a card?"
    }else if (sum === 21){
        message = "You win!"
        hasBlackJack = true
    }else{
        message = ("You have lost the game!")
        isAlive = false
    }
messageEl.textContent = message
}

function newCard(){
    let card = 5
    sum += card
   renderGame() 
}
