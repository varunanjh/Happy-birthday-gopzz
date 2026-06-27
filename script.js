// Screen Elements
const bgMusic = document.getElementById('bgMusic');
const screens = {
    welcome: document.getElementById('welcomeScreen'),
    gift: document.getElementById('giftScreen'),
    letter: document.getElementById('letterScreen'),
    gallery: document.getElementById('galleryScreen'),
    final: document.getElementById('finalScreen')
};

// Function to transition between screens smoothly
function showScreen(screenName) {
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
        screen.classList.add('hidden');
    });
    screens[screenName].classList.remove('hidden');
    screens[screenName].classList.add('active');
}

// 1. Welcome Screen -> Plays Music & Goes to Gift
document.getElementById('startBtn').addEventListener('click', () => {
    bgMusic.play().catch(e => console.log("Music blocked by browser"));
    showScreen('gift');
});

// 2. Gift Box -> Opens Letter
document.getElementById('giftBox').addEventListener('click', () => {
    showScreen('letter');
    setTimeout(typeWriterEffect, 500); // Wait half a second before typing
});

// 3. Typewriter Effect Logic
// EDIT THIS TEXT to say exactly what you want!
const letterText = "Happy Birthday Gopzzz! I wanted to build something completely unique just for you. Every moment we spend together is my favorite. Here is a little look back at us, and to so many more memories ahead. I love you! ❤️";
let i = 0;

function typeWriterEffect() {
    if (i < letterText.length) {
        document.getElementById('typewriterText').innerHTML += letterText.charAt(i);
        i++;
        setTimeout(typeWriterEffect, 50); // Speed of typing
    } else {
        // Show the next button only after typing finishes
        document.getElementById('nextToGallery').classList.remove('hidden');
    }
}

// 4. Letter -> Goes to Gallery
document.getElementById('nextToGallery').addEventListener('click', () => {
    showScreen('gallery');
});

// 5. Gallery Slideshow Logic (Your 6 Photos)
const photos = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg', 'photo5.jpg', 'photo6.jpg'];
let currentPhotoIndex = 0;
const slideImg = document.getElementById('slideImg');

document.getElementById('nextBtn').addEventListener('click', () => {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    slideImg.src = photos[currentPhotoIndex];
});
document.getElementById('prevBtn').addEventListener('click', () => {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    slideImg.src = photos[currentPhotoIndex];
});

// 6. Gallery -> Final Surprise
document.getElementById('finalBtn').addEventListener('click', () => {
    showScreen('final');
    fireworks();
});

// 7. Interactive Cake Fireworks
document.getElementById('cake').addEventListener('click', () => {
    fireworks();
});

// Fireworks Animation Engine
function fireworks() {
    var duration = 5 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        // Left side fireworks
        confetti({ particleCount: 6, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#ff1493', '#ffd700', '#ffffff'] });
        // Right side fireworks
        confetti({ particleCount: 6, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#ff1493', '#ffd700', '#ffffff'] });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}
