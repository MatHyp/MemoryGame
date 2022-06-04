const startBtn = document.querySelector('.start-game')
const boardContainer = document.querySelector('.board-container')

let carList = ['bmw','audi','ford','alfa','honda','vw','fiat','mercedes','opel','volvo','bmw','audi','ford','alfa','honda','vw','fiat','mercedes','opel','volvo'];
randomCarList = carList.sort(() => Math.random() - 0.5);


// Create card html
const createCards = function(){
    randomCarList.forEach(e => {
        let cartHtml = `<div class="board">
            <img src="img/${e}.png" alt="" class="car-img">
        </div>`
        boardContainer.insertAdjacentHTML('afterbegin', cartHtml);

    })
}

startBtn.addEventListener('click', createCards);