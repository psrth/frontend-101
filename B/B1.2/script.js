const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function drawCircle() {
    ctx.clearRect(0, 0, canvas.height, canvas.height)
    ctx.beginPath();
    ctx.arc(canvas.height/2, canvas.height/2, 195, 0, 2 *  Math.PI, true);
    ctx.strokeStyle = '#FFF';
    ctx.stroke();
    ctx.closePath();
    
    let TIME = new Date();
    let secondsAngle = TIME.getSeconds() * 6;
    let minutesAngle = TIME.getMinutes() * 6;
    let hoursAngle = TIME.getHours() * 6; 
  
    ctx.beginPath();
    drawHands(150, secondsAngle);
    drawHands(140, minutesAngle);
    drawHands(100, hoursAngle);
    ctx.stroke();
    ctx.closePath(); 
}
  
function drawHands(length, angle){
    ctx.save();
    ctx.translate(200,200);
    ctx.moveTo(0,0);
    let x = length * Math.cos(((angle - 90) * Math.PI)/180);
    let y = length * Math.sin(((angle - 90) * Math.PI)/180);
    ctx.lineTo(x, y);
    ctx.restore();
} 
  
setInterval(drawCircle,1000);
  