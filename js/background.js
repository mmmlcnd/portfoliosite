const canvas = document.getElementById('bubbleCanvas');
const ctx = canvas.getContext('2d');
let width, height;

function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// 彩度と透明度を少し上げて、しっかり見えるように
const colors = [
  'rgba(255, 235, 150, 0.35)',  // やさしい黄色
  'rgba(255, 215, 100, 0.3)',   // ハニー系
  'rgba(200, 200, 200, 0.25)',  // 柔らかいグレー
  'rgba(240, 230, 200, 0.3)',   // グレージュ
  'rgba(255, 245, 200, 0.28)'   // ベージュホワイト
];

class Bubble {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.radius = 25 + Math.random() * 35;
    this.speedX = (Math.random() - 0.5) * 0.15;
    this.speedY = (Math.random() - 0.5) * 0.15;
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (
      this.x < -this.radius || this.x > width + this.radius ||
      this.y < -this.radius || this.y > height + this.radius
    ) {
      this.reset();
    }
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

const bubbles = Array.from({ length: 40 }, () => new Bubble());

function animate() {
  ctx.clearRect(0, 0, width, height);
  for (const bubble of bubbles) {
    bubble.update();
    bubble.draw();
  }
  requestAnimationFrame(animate);
}
animate();
