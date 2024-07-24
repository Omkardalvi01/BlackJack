const disp_cards = document.getElementById('cards')
const sum = document.getElementById('sum')
const res = document.getElementById('result')

const player_el = document.getElementById('player_id')

let player = {
    Name: "Omkar",
    Chips: 200
}

let card_arr = []
let s = 0
let gotblackjack = false
let isAlive = false
val_arr = [2,3,4,5,6,7,8,9,10,10,10,10,11]


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function updatechips(){
    player_el.textContent = player.Name + ": $" + player.Chips
}
function start(){
    res.textContent = "You don't have a Blackjack, yet!"
    isAlive = true
    gotblackjack = false
    s = 0
    card_arr = []
    for(i = 0 ; i < 2; i++){
        drawcard()
    }
}
function drawcard(){
    if(!isAlive || gotblackjack){
        return
    }
    updatechips()
    index = getRandomInt(13)
    card = val_arr[index]
    card_arr.push(card)
    console.log(card_arr)
    s += card
    disp_cards.textContent = "Cards: "
    for(j = 0; j < card_arr.length;  j++){
        disp_cards.textContent += card_arr[j] + " "
    }
    
    sum.textContent = "Sum: " + s

    if(s === 21){
        res.textContent = "You have BlackJack, you Won"
        gotblackjack = true
        player.Chips = player.Chips + 20
        updatechips()

    }
    if(s > 21){
        res.textContent = "You lost!"
        isAlive = false
        player.Chips = player.Chips - 20
        updatechips()
    }
    if(player.Chips === 0){
        player.Chips = 200
        start()
    }
}
