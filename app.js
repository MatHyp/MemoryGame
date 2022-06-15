const $ = (e) => document.querySelector(e);

// containers 
const boardContainer = $('.board-container');
const startBtn = $('.start-game');

let carList = ['bmw','audi','ford','alfa','honda','vw','fiat','mercedes','opel','volvo','bmw','audi','ford','alfa','honda','vw','fiat','mercedes','opel','volvo'].sort(() => Math.random() - 0.5);
let firstClick;
let secoundClick;
let click = 0
// Create card html

const createCards = function(){
    carList.forEach(car => {
        let cartHtml = `<div class="board " id="halo">
            <img src="img/${car}.png" alt="" class="car-img " id=${car} id="halo">
        </div>`
        boardContainer.insertAdjacentHTML('afterbegin', cartHtml);    
    })

    setTimeout(() => {addHiden(boardContainer)}, 2000);
}

const addHiden = function(container){
    for(i = 0; i < carList.length; i++){
        container.children[i].children[0].classList.add('hidden');
    }
}

const halo1 = function(){
    firstClick.classList.add('hidden');
    secoundClick.classList.add('hidden');
    firstClick = '';
    secoundClick = '';
}

const halo = function(){
    
}

document.addEventListener('click',function(e){ 
    if(e.target && e.target.id == 'halo'){
        e.target.children[0].classList.remove('hidden');
        switch(click){
            case 0:
                firstClick = e.target.children[0];
                click++;
                console.log(firstClick);
                break;
            case 1:
                secoundClick = e.target.children[0];
                let equal = (firstClick.id == secoundClick.id) ? true : halo1();

                click = 0;
                break;
        }
    }
});

startBtn.addEventListener('click', (createCards));