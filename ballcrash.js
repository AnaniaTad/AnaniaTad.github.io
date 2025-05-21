const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const scoreDisplay = document.getElementById("scoreDisplay");
const gameOverDisplay = document.getElementById("gameOver");

// Game elements
const player = {
    x: 200,
    y: 300,
    radius: 20,
    color: 'red',
    speed: 3
};

const box = {
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    dx: 5,
    dy: 1,
    color: 'black'
};

let score = 0;
let gameRunning = true;
const keys = {};

function drawBox() {
    ctx.fillStyle = box.color;
    ctx.fillRect(box.x, box.y, box.width, box.height);
}

function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.beginPath();
    ctx.arc(
        player.x,
        player.y,
        player.radius,
        0,
        2 * Math.PI
    );
    ctx.fill();
}

function movePlayer() {
   // if (keys['ArrowDown']) 
   //     player.y += player.speed;
   // 
   // if (keys['ArrowUp']) {
     //   player.y -= player.speed;
    
    if (keys['ArrowLeft'] && player.x > player.radius) {
        player.x -= player.speed;
    }
    if (keys['ArrowRight'] && player.x < canvas.width - player.radius) {
        player.x += player.speed;
    }

    // Wrap around vertical edges
    if (player.y < -player.radius) {
        player.y = canvas.height + player.radius;
    }
    if (player.y > canvas.height + player.radius) {
        player.y = -player.radius;
 }   
}

function updateScore() {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
}

function moveBox() {
    box.x += box.dx;
    box.y += box.dy;

    // Bounce off edges
    if (box.x > canvas.width - box.width) {
        box.dx = -Math.abs(box.dx);
    }
    if (box.x < 0) {
        box.dx = Math.abs(box.dx);
    }
    if (box.y > canvas.height - box.height) {
        box.dy = -Math.abs(box.dy);
    }
    if (box.y < 0) {
        box.dy = Math.abs(box.dy);
    }
}

function checkCollision() {
    const playerLeft = player.x - player.radius;
    const playerRight = player.x + player.radius;
    const playerTop = player.y - player.radius;
    const playerBottom = player.y + player.radius;

    const boxLeft = box.x;
    const boxRight = box.x + box.width;
    const boxTop = box.y;
    const boxBottom = box.y + box.height;

    if (playerRight > boxLeft &&
        playerLeft < boxRight &&
        playerBottom > boxTop &&
        playerTop < boxBottom) {
        gameRunning = false;
        gameOverDisplay.style.display = "block";
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (gameRunning) {
        updateScore();
        movePlayer();
        moveBox();
        checkCollision();
    }
    
    drawBox();
    drawPlayer();
    
    requestAnimationFrame(animate);
}

// Event listeners
document.addEventListener('keydown', (e) => {
    keys[e.key] = true;
});

document.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

// Start the game
animate();




