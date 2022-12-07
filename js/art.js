let saveButton = document.getElementById('saveImage');
let resetCanvas = document.getElementById('resetCanvas');
let canvas = document.querySelector('canvas');

saveButton.addEventListener('click', save);
resetCanvas.addEventListener('click',reset);

// get canvas 2D context and set him correct size
var ctx = canvas.getContext('2d');
resize();

// last known position
var pos = { x: 0, y: 0 };

window.addEventListener('resize', resize);
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

// new position from mouse event
function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

// resize canvas
function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

function draw(e) {
  // mouse left button must be pressed
  if (e.buttons !== 1) return;

  ctx.beginPath(); // begin

  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#027373';

  ctx.moveTo(pos.x, pos.y); // from
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to

  ctx.stroke(); // draw it!
}

function save()
{
    const link = document.createElement('a');
    link.download = 'MyCerealImage.png';
    link.href = canvas.toDataURL();
    link.click();
    link.delete;
}

function reset()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}