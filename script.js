const startBtn = document.getElementById('startBtn');
const openingCinematic = document.getElementById('opening-cinematic');
const openBtn = document.getElementById('openBtn');
const hero = document.getElementById('hero');
const gallery = document.getElementById('gallery');
const music = document.getElementById('music');
const loveBtn = document.getElementById('loveBtn');
const backBtn = document.getElementById('backBtn');

// Effect: Falling Flowers/Petals Generator
function createFallingFlowers() {
    setInterval(() => {
        const flower = document.createElement('div');
        flower.className = 'falling-flower';
        
        const flowers = ['🌸', '✨', '🌹', '💮', '💖'];
        flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
        
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.fontSize = (15 + Math.random() * 20) + 'px';
        flower.style.animationDuration = (5 + Math.random() * 5) + 's';
        
        document.body.appendChild(flower);
        setTimeout(() => flower.remove(), 10000);
    }, 400);
}

// Start falling flowers immediately on load for the background/opening
createFallingFlowers();

// Cinematic Opening Click Action
startBtn.onclick = () => {
    openingCinematic.classList.add('fade-away');
    
    // Play Musik directly when entering the premium story (fixes mobile autoplay guard)
    music.play().catch(err => console.log("Audio play allowed after interaction."));
    
    setTimeout(() => {
        openingCinematic.style.display = 'none';
        hero.classList.remove('hidden');
    }, 1500);
};

// Transisi ke Gallery
openBtn.onclick = () => {
    hero.classList.add('hidden');
    
    setTimeout(() => {
        hero.style.display = 'none';
        gallery.style.display = 'flex';
        
        setTimeout(() => {
            gallery.classList.remove('hidden');
        }, 50);
    }, 1000);
};

// Transisi Balik ke Halaman Depan (Back)
backBtn.onclick = () => {
    gallery.classList.add('hidden');
    
    setTimeout(() => {
        gallery.style.display = 'none';
        hero.style.display = 'flex';
        
        // Reset state tombol & surat
        loveBtn.style.display = 'inline-block';
        document.getElementById('letter').style.display = 'none';
        document.getElementById('typed-text').innerHTML = '';
        
        setTimeout(() => {
            hero.classList.remove('hidden');
        }, 50);
    }, 1000);
};

const msg = `Kalau ditanya apa yang paling aku syukuri akhir-akhir ini, 
jawabannya sederhana: masih bisa punya kamu di hidupku. 
Karena nggak semua orang seberuntung aku yang bisa dicintai 
dan diperhatiin sama seseorang sebaik kamu❤️
from Arthaaa`;

let isTyping = false;

loveBtn.onclick = () => {
    if (isTyping) return;
    
    loveBtn.style.display = 'none';
    document.getElementById('letter').style.display = 'block';
    
    const t = document.getElementById('typed-text');
    t.innerHTML = '';
    let i = 0;
    isTyping = true;

    const iv = setInterval(() => {
        t.innerHTML += msg.charAt(i);
        i++;
        if (i >= msg.length) {
            clearInterval(iv);
            isTyping = false;
        }
    }, 45);
};

// Efek Hati Terbang di Halaman Gallery
setInterval(() => {
    if (gallery.style.display !== 'flex') return;
    if (document.querySelectorAll('.heart').length > 20) return;

    const heart = document.createElement('div');
    heart.className = 'heart';
    
    const hearts = ['💖', '❤️', '💝', '🌸'];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (4 + Math.random() * 4) + 's';
    
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
}, 600);