const $ = (e) => document.querySelector(e);

// containers 
const boardContainer = $('.board-container');

// console.log(boardContainer);
//btns
// log
const startBtn = $('.start-game');

let carList = ['bmw','audi','ford','alfa','honda','vw','fiat','mercedes','opel','volvo','bmw','audi','ford','alfa','honda','vw','fiat','mercedes','opel','volvo'].sort(() => Math.random() - 0.5);
let firstClick;
let secoundClick;

// Create card html
const createCards = function(){
    carList.forEach(car => {
        let cartHtml = `<div class="board " id="halo">
            <img src="img/${car}.png" alt="" class="car-img " id=${car} id="halo">
        </div>`
        boardContainer.insertAdjacentHTML('afterbegin', cartHtml);    
    })
    // setTimeout(halo(boardContainer), 5000);
    setTimeout(() => {addHiden(boardContainer)}, 5000);
   
}
const addHiden = function(container){
    for(i = 0; i< carList.length; i++){
        container.children[i].children[0].classList.add('hidden');
    }
}

document.addEventListener('click',function(e){ 
    if(e.target && e.target.id == 'halo'){
        // e.target.children[0].classList.remove('hidden');
        // firstClick = e.target.children[0].id;

    }
});

startBtn.addEventListener('click', (createCards));