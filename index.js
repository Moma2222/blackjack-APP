
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = null;
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
//let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Noa",
    chips: 150
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let rendomNumber =  Math.floor(Math.random() * 13) + 1
    
    if (rendomNumber === 1 ) {
        return 11
    } else if (rendomNumber >= 11) {
        return 10
    } else {
        return rendomNumber
    }

}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    renderGame()
}


function renderGame() {
    sumEl.textContent = "Sum:" + " " + sum
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + ", "
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false ){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}


/*
// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age = 22

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

if (age <= 20) {
    console.log("You can not enter the club!")
} else  {
    console.log("welcome")
}*/

/*
// Check if the person is elegible for a birthday card from the King! (100)

let age = 100;

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if (age < 100) {
    console.log("Not elegible")
} else if (age === 100) {
    console.log("Here is your birthday card from the King!")
} else {
    console.log("Not elegible, you have already gotten one")
}
*/

/*console.log(4 === 3)  // false
console.log(5 > 2)    // true
console.log(12 > 12)  // false
console.log(3 < 0)    // false
console.log(3 >= 3)   // true
console.log(11 <= 11) // true
console.log(3 <= 2)   // false*/

/*let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]

console.log(experience[1])
console.log(experience[2])
console.log(experience[0])*/

/*
let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"

messages.push(newMessage)
console.log(messages)

// How can you remove the last item in an array? Try to google it!

let removeLast = messages.pop()
console.log(messages)
*/


/*for (let i = 0; i < 6; i += 1) {
    console.log(i)
}

// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers

for (let i = 10; i < 101; i+=10) {
    console.log(i)
}

*/

/*
let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "Great to hear",
    "🙌"
]

for (let i = 0; i < messages.length; i++) {
    console.log(messages[i])
} */

/*
let x = "22022022".match(/^(\d{2})(\d{2})(\d{4})$/)
let y = [x[1],x[2],x[3]]
y.join("/")
*/
