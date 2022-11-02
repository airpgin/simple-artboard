
let ctx = canvasElem.getContext('2d');
ctx.canvas.width = document.documentElement.clientWidth;
ctx.canvas.height = document.documentElement.clientHeight;

canvasElem.onmousedown = function (e) {
  ctx.beginPath();

  canvasElem.onmousemove = function (e) {
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
  };
};

canvasElem.onmouseup = function (e) {
  canvasElem.onmousemove = null;
}


document.addEventListener('keydown', (event) => {
  if (event.key === 'c') {
    ctx.clearRect(0, 0, canvasElem.width, canvasElem.height);
  }
})