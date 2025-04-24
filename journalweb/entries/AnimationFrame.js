       const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
       
    let x = 0;
        let dx = 5;
        let y = 0;
        let dy = 1;
        
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
            if (keys['ArrowRight']) player.x += player.speed;
            if (keys['ArrowLeft']) player.x -= player.speed;
            if (keys['ArrowDown']) player.y += player.speed;
            if (keys['ArrowUp']) player.y -= player.speed;
        }
        
        function animate() {
            drawRect(x, y);
            drawPlayer();
            movePlayer();
            
            x = x + dx;
            y = y + dy;
            
            if (x > 350) dx = dx * -1;
            if (x < 0) dx = dx * -1;
            if (y > 350) dy = dy * -1;
            if (y < 0) dy = dy * -1;
            
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
  


