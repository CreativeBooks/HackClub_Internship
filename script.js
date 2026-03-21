const starsContainer = document.getElementById('stars');
for (let i = 0; i < 80; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    const size = Math.random() < 0.7 ? 1:2;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';

    const duration = (2 + Math.random() * 4).toFixed(1);
    const delay = (Math.random() * 5).toFixed(1);
    star.style.animation = `twinkle ${duration}s ease ${delay}s infinite`;

    starsContainer.appendChild(star);
}