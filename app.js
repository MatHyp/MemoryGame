//GetElements
const $ = (e) => document.querySelector(e);
// Containers
const boardContainer = $('.board-container');
const body = $('body');
const pop_up = $('.pop-up');

// Buttons
const startBtn = $('.start-game-btn');
const matchedPairs = $('.matched-pairs')
// Spans
const againBtn = $('.again');
const pop_up_fail = $('.moves-counter-fails')
const moveCounter = $('.moves-counter');

let carList = ['bmw','audi','hyundai','alfa','honda','vw','fiat','mercedes','opel','volvo','bmw','audi','hyundai','alfa','honda','vw','fiat','mercedes','opel','volvo'];
//Game variables
let firstClick;
let secoundClick;
let click = 0;
let failMoves = 0;
let matchedPair = 0;

//Create cards html

const createCards = function(){
    // sort and clear bordercontainer
    let sortedCardList = carList.sort(() => Math.random() - 0.5)
    restartGame();
    // for each el from list create crat
    sortedCardList.forEach(car => {
        let cartHtml = `<div class="board " id="halo">
            <img src="img/${car}.png" alt="" class="car-img " id=${car} id="halo">
        </div>`
        boardContainer.insertAdjacentHTML('afterbegin', cartHtml);    
    });
    setTimeout(() => {hiddenForAll(boardContainer)}, 6000);
}

// Add hidden class for all carts after start

const hiddenForAll = function(container){
    for(i = 0; i < carList.length; i++){
        container.children[i].children[0].classList.add('hidden');
    }
}

// Add hidden after missed clicks
const missedClicks = function(){
    failMoves++;
    setTimeout(() => {
        firstClick.classList.add('hidden');
        secoundClick.classList.add('hidden');
        firstClick = '';
        secoundClick = '';

    }, 500)
}

//Matched cards
const matched = function(){
    matchedPair++;
    matchedPairs.innerHTML = String(matchedPair)
    
    if (matchedPair == 10){
        pop_up_fail.innerHTML = String(failMoves);
        pop_up.classList.remove('hidden');
    }
}

const haloo = function(){
    if(matchedPair == 1){
        return false
        
    }
    return true;
}

// Event for card click
document.addEventListener('click',function(e){ 
    if(e.target && e.target.id == 'halo'){
        e.target.children[0].classList.remove('hidden');
        switch(click){
            case 0:
                firstClick = e.target.children[0];
                click++;
                break;
            case 1:
                secoundClick = e.target.children[0];
                let equal = (firstClick.id == secoundClick.id) ? matched() : missedClicks();
                click = 0;
                break;
        }
        moveCounter.innerHTML = String(failMoves);
    }
}, haloo());

const restartGame = function(){
    pop_up.classList.add('hidden');
    boardContainer.textContent = '';
    matchedPair = 0;
    click = 0;
    failMoves = 0;
    matchedPair = 0;
    matchedPairs.innerHTML = String(matchedPair)
    moveCounter.innerHTML = String(failMoves);
}

startBtn.addEventListener('click', createCards);
againBtn.addEventListener('click', createCards);
