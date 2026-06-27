const button = document.getElementById("confettiBtn");

button.addEventListener("click", () => {
    button.innerText = "I love you!";
    
    var duration = 3 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ff6b81', '#ffc3a0', '#ffffff']
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ff6b81', '#ffc3a0', '#ffffff']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
});
