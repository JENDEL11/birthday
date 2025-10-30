// Animation utility functions

export function createConfetti(count = 100) {
  const colors = ['#f093fb', '#f5576c', '#4facfe', '#00f2fe', '#43e97b', '#38f9d7', '#fa709a', '#fee140'];

  for (let i = 0; i < count; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-10px';
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    confetti.style.animationDelay = Math.random() * 0.5 + 's';
    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }
}

export function launchFireworks() {
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f7b731', '#5f27cd', '#ee5a6f', '#00d2d3'];

  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight * 0.5;

      for (let j = 0; j < 30; j++) {
        const particle = document.createElement('div');
        particle.className = 'firework';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];

        const angle = (Math.PI * 2 * j) / 30;
        const velocity = 100 + Math.random() * 100;
        const xVel = Math.cos(angle) * velocity;
        const yVel = Math.sin(angle) * velocity;

        particle.style.setProperty('--x', xVel + 'px');
        particle.style.setProperty('--y', yVel + 'px');
        particle.style.animation = 'firework-burst 1s ease-out forwards';

        document.body.appendChild(particle);

        setTimeout(() => particle.remove(), 1000);
      }
    }, i * 400);
  }
}

export function makeItRain() {
  createConfetti(200);
  setTimeout(() => createConfetti(200), 300);
  setTimeout(() => createConfetti(200), 600);
}
