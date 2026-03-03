const envelope = document.querySelector('.envelope');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    if (!envelope.classList.contains('open')) {
        envelope.classList.add('open');
        btn.textContent = "Развернуть 🔍";

        for (let i = 0; i < 30; i++) {
            const c = document.createElement('div');
            c.className = 'confetti';
            c.style.left = Math.random() * 100 + 'vw';
            c.style.backgroundColor = ['#ff4d6d','#ffb3c1','#f2d74e','#ffffff'][Math.floor(Math.random()*4)];
            c.style.animationDelay = Math.random() * 2 + 's';
            document.body.appendChild(c);
            setTimeout(() => c.remove(), 5000);
        }
    } 
    else if (!envelope.classList.contains('zoom')) {
        envelope.classList.add('zoom');
        btn.textContent = "Сложить ✉️";
    } 
    else {
        envelope.classList.remove('zoom', 'open');
        btn.textContent = "Открыть письмо 🌸";
    }
});
const styleTag = document.createElement('style');
styleTag.innerHTML = `
@keyframes confetti-fall {
    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
}`;
document.head.appendChild(styleTag);
