const startscreen = document.getElementById('startScreen');
const gameScreen = document.getElementById('gameScreen');
const startbutton = document.getElementById('start-button');

const food = document.createElement('div')
startbutton.addEventListener('click', function () {
    startscreen.style.display = 'none';
    gameScreen.style.display = 'block';
    startGame();
});

let x = 0;
let y = 0;
let speed = 20;
let direction = 'right';
let foodx;
let foody;
let score = 0;
let gameInterval;


function startGame() {
    gameInterval = setInterval(moveSnake, 200);

    const display = document.getElementById('display');
    snakehead = document.createElement('div');
    snakehead.style.backgroundColor = 'blue';
    snakehead.style.width = '20px';
    snakehead.style.height = '20px';
    snakehead.style.position = 'absolute';
    snakehead.style.left = x + 'px';
    snakehead.style.top = y + 'px';
    display.appendChild(snakehead);
    food.style.backgroundColor = 'red';
    food.style.width = '20px';
    food.style.height = '20px';
    food.style.borderRadius = '50%';
    food.style.position = 'absolute';
    display.appendChild(food);
    placeFoodRandomly();
    document.getElementById('bgMusic').play();
    document.getElementById('game-over').pause();
}
function moveSnake() {
    snakehead.style.left = x + 'px';
    snakehead.style.top = y + 'px';
    if (direction === 'right') {
        x += speed;

    }
    else if (direction === 'left') {
        x -= speed;
    }
    else if (direction === 'up') {
        y -= speed;
    }
    else if (direction === 'down') {
        y += speed;
    }
    if (x < 0 || x >= 400 || y < 0 || y >= 400) {
        endGame(); // with capital G!

    }
    if (x === foodx && y === foody) {
        score++;
        updatescore();
        placeFoodRandomly();

    }
};
document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') {
        direction = 'right';
    }
    else if (e.key === 'ArrowLeft') {
        direction = 'left';
    }
    else if (e.key === 'ArrowUp') {
        direction = 'up';
    }
    else if (e.key === 'ArrowDown') {
        direction = 'down';
    }
});
function placeFoodRandomly() {
    let maxPosition = 400 / 20;
    foodx = Math.floor(Math.random() * maxPosition) * 20;
    foody = Math.floor(Math.random() * maxPosition) * 20;
    food.style.left = foodx + 'px';
    food.style.top = foody + 'px';
};
function updatescore() {
    const scoredisplay = document.getElementById('score');
    scoredisplay.textContent = 'score: ' + score;
};
function endGame() {
    clearInterval(gameInterval);
    gameScreen.style.display = 'none';
    const gameOverScreen = document.getElementById('gameOverScreen');
    const finalScore = document.getElementById('finalScore');
    finalScore.textContent = 'Your Score: ' + score;
    gameOverScreen.style.display = 'block';
    document.getElementById('bgMusic').pause();
    document.getElementById('game-over').play();
};
document.getElementById('restartBtn').addEventListener('click', function () {
    location.reload(); // Easy way to restart
});

