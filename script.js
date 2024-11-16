// Imagens com o efeito
const images = document.querySelectorAll('.hobby-image');

// Glitch
images.forEach(image => {
  image.classList.add('glitch-effect');
  
  // Cursor
  image.addEventListener('mouseenter', () => {
    image.classList.add('active');
  });
  
  image.addEventListener('mouseleave', () => {
    image.classList.remove('active');
  });
});

// Efeito Glitch
function randomGlitch() {
  const activeImages = document.querySelectorAll('.glitch-effect.active');
  
  activeImages.forEach(image => {
    const x = Math.random() * 10 - 5;
    const y = Math.random() * 10 - 5;
    
    image.style.transform = `translate(${x}px, ${y}px)`;
    
    setTimeout(() => {
      image.style.transform = 'translate(0, 0)';
    }, 50);
  });
}

// ms do Glitch
setInterval(randomGlitch, 200);
