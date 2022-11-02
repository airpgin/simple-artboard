
let ctx = canvasElem.getContext('2d');
ctx.canvas.width = document.documentElement.clientWidth;
ctx.canvas.height = document.documentElement.clientHeight;
let allPath = []
let path = [];

canvasElem.onmousedown = function (e) {
  ctx.beginPath();

  canvasElem.onmousemove = function (e) {
    path.push({x: e.clientX, y: e.clientY})
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
  };
};

canvasElem.onmouseup = function (e) {
  allPath.push(path);
  path = []
  console.log(allPath);
  canvasElem.onmousemove = null;
}


document.addEventListener('keydown', (event) => {
  if (event.key === 'c') {
    ctx.clearRect(0, 0, canvasElem.width, canvasElem.height);
  }
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'u') {
    ctx.clearRect(0, 0, canvasElem.width, canvasElem.height);

    allPath.pop();

    for (let i = 0; i < allPath.length; i++) {

      let path = allPath[i];
      ctx.beginPath();
      for (let j = 0; j < path.length; j++) {
        ctx.lineTo(path[j].x, path[j].y);
        ctx.stroke();
      }
    }
  }
})