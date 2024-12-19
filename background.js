const canvas = document.getElementById("art-canvas");
const ctx = canvas.getContext("2d");

const fpsInterval = 1000 / 60;
var then = Date.now();

var stars = [];
const mouse = {
  x: canvas.width / 2,
  y: canvas.height / 2
};

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function initStars() {
  for (var i = 0; i < Math.round((canvas.width / canvas.height) * 40); i++) {
    stars.push({
      coords: {
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height)
      },
      speed: {
        x: Math.random() < 0.5 ? -(Math.random() * 2) : Math.random() * 2,
        y: Math.random() < 0.5 ? -(Math.random() * 2) : Math.random() * 2
      },
      metMouse: false
    });
  }
}

window.onresize = function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stars = [];
  initStars();
};

window.addEventListener("mousemove", e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

initStars();

function step() {
  var now = Date.now();
  var elapsed = now - then;

  if (elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval);
    for (var i = 0; i < stars.length; i++) {
      const mouseDist = Math.sqrt(Math.pow(stars[i].coords.x - mouse.x, 2) + Math.pow(stars[i].coords.y - mouse.y, 2));
      stars[i].coords.x += stars[i].speed.x;
      stars[i].coords.y += stars[i].speed.y;

      if (stars[i].coords.x > canvas.width || stars[i].coords.x < 0 || stars[i].coords.y > canvas.height || stars[i].coords.y < 0) {
        stars[i].coords.x = Math.floor(Math.random() * canvas.width);
        stars[i].coords.y = Math.floor(Math.random() * canvas.height);
        stars[i].speed.x = Math.random() < 0.5 ? -(Math.random() * 2) : Math.random() * 2;
        stars[i].speed.y = Math.random() < 0.5 ? -(Math.random() * 2) : Math.random() * 2;
      }

      if (mouseDist < 80 && !stars[i].metMouse) {
        stars[i].speed.x *= -10;
        stars[i].speed.y *= -10;
        stars[i].metMouse = true;
      } else if (mouseDist > 80 && stars[i].metMouse) {
        stars[i].speed.x = stars[i].speed.x < 0 ? -(Math.random() * 2) : Math.random() * 2;
        stars[i].speed.y = stars[i].speed.y < 0 ? -(Math.random() * 2) : Math.random() * 2;
        stars[i].metMouse = false;
      }
    }
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < stars.length; i++) {
    ctx.beginPath();
    ctx.arc(stars[i].coords.x, stars[i].coords.y, 2.5, 0, 2 * Math.PI, false);
    ctx.fillStyle = "white";
    ctx.fill();

    for (var s = 0; s < stars.length; s++) {
      const dist = Math.sqrt(Math.pow(stars[s].coords.x - stars[i].coords.x, 2) + Math.pow(stars[s].coords.y - stars[i].coords.y, 2));
      var ratio = (canvas.width / canvas.height) * 70;

      ratio < 90 ? ratio = 90 : ratio = ratio;
      if (dist < ratio) {
        ctx.strokeStyle = "white";
        ctx.lineWidth = 0.02 * ((ratio - dist) / 4);

        ctx.beginPath();
        ctx.moveTo(stars[i].coords.x, stars[i].coords.y);
        ctx.lineTo(stars[s].coords.x, stars[s].coords.y);
        ctx.stroke();
      }

    }
  }

  requestAnimationFrame(step);
}

requestAnimationFrame(step);
