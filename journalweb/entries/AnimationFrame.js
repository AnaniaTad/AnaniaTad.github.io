const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let x = 0;
let dx = 5;
let y = 0;
let dy = 1;
let score = 0;
let gameRunning = true;
const player = {
    x: 0,
    y: 0,
    color: 'green',
    speed: 3
};
const keys = {};

function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.beginPath();
    ctx.arc(player.x, player.y, 20, 0, 2 * Math.PI);
    ctx.fill();
}

function drawRect(x, y) {
    console.log("drawing rect");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, y, 50, 50);
}

function movePlayer() {
    if (keys['ArrowRight'] && player.x < 400) {
        player.x += player.speed;
    }
    if (keys['ArrowLeft'] && player.x > 0) {
        player.x -= player.speed;
    }
    if (keys['ArrowDown'] && player.y < 400) {
        player.y += player.speed;
    }
    if (keys['ArrowUp'] && player.y > 0) {
        player.y -= player.speed;
    }
}

function drawScore() {
    ctx.font = "10px Arial";
    ctx.fillText(score, 10, 10);
}
function checkcollition (){
let box_min_x = x
let box_min_y = y
let box_max_x = x + 50;
let box_max_y = y + 50;

let player_min_x = player.x - 20 
let player_min_y = player.x - 20 
let player_max_x = player.x + 20 
let player_max_y = player.x + 20 
}
if (box_max_y > box_min_y  &&
(box_min_y < player_max_y &&
box_max_x > player_min_x &&
box_min_x < player_max_x
gameRunning = false;




function animate() {
    if (gameRunning) {
        score++;
        
        if (score > 999) {
            gameRunning = false;
        }
        
        drawRect(x, y);
        drawPlayer();
        movePlayer();
        drawScore();
       checkcollition(); 
        
        x = x + dx;
        y = y + dy;
        
        if (x > 350) dx = dx * -1;
        if (x < 0) dx = dx * -1;
        if (y > 350) dy = dy * -1;
        if (y < 0) dy = dy * -1;
    }
    requestAnimationFrame(animate);
}

function handleKeyPress(e) {
    keys[e.key] = true;
}

function handleKeyUp(e) {
    keys[e.key] = false;
}

document.addEventListener('keydown', handleKeyPress);
document.addEventListener('keyup', handleKeyUp);
animate();

