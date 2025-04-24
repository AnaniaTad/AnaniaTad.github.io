const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 400, 400);

function house(x, y, size) {
    ctx.fillStyle = "brown";
    ctx.fillRect(x - size/2, y - size/2, size, size);
    
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.moveTo(x - size, y - size/2);  
    ctx.lineTo(x + size, y - size/2);  
    ctx.lineTo(x, y - size);           
    ctx.closePath();
    ctx.fill();
}

house(100, 100, 80);
house(100, 200, 60);
house(300, 200, 100);

