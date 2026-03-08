// Set up the canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set the canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create an array of particles
const particles = [];
for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 10,
    vy: (Math.random() - 0.5) * 10,
    color: '#fff'
  });
}

// Draw the particles
function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw each particle
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    ctx.closePath();

    // Move the particle
    p.x += p.vx;
    p.y += p.vy;

    // Bounce off the edges
    if (p.x < 0 || p.x > canvas.width) {
      p.vx = -p.vx;
    }
    if (p.y < 0 || p.y > canvas.height) {
      p.vy = -p.vy;
    }
  });

  // Call the draw function again
  requestAnimationFrame(draw);
}

// Start the animation
draw();
