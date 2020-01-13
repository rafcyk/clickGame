const startBtn = document.querySelector('.start');
const squares = document.querySelectorAll('.square');
const scoreScreen = document.querySelector('span.result');
const againBtn = document.querySelector('.again');

let timeGame = 1;
let score = 0;

let gameTimeSetVal;



const changeColor = ()=> {

    squares[Math.floor(Math.random() * squares.length)].id = 'colorRed';
    startBtn.style.display = 'none';
    againBtn.style.display = 'none';

gameTimeSet(); 

    if(timeGame % 2 == 0){
        squares.forEach(square => {
            square.id = '';
        });
    }

console.log(timeGame);
        if(timeGame == 30){
            clearTimeout(gameTimeSetVal);
            againBtn.style.display = 'block';
        }


    timeGame++;
}

function gameTimeSet(){
    gameTimeSetVal = setTimeout(changeColor,500);
}

startBtn.addEventListener('click', changeColor);

squares.forEach(square => {
    square.addEventListener('click', ()=> {
        if(square.id == 'colorRed'){
            square.id = '';
            score++;
            scoreScreen.textContent = score;
        }
        
    })
});


againBtn.addEventListener('click',()=>{
    score = 0;
    timeGame = 1;
    scoreScreen.textContent = '';
    startBtn.style.display = 'block';
    againBtn.style.display = 'none';
})

