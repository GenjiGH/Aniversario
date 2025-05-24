window.onload = function() {
  setTimeout(() => {
    const intro = document.getElementById('intro');
    const cards = document.getElementById('cards-container');

    // Desvanecer el intro
    intro.style.transition = 'opacity 1s ease-out';
    intro.style.opacity = 0;

    // Esperar a que termine la animación de desaparición (1s)
    setTimeout(() => {
      intro.style.display = 'none';

      // Mostrar las cards con efecto
      cards.classList.remove('hidden');
      cards.style.display = 'flex';
      cards.style.opacity = 0;
      cards.style.transition = 'opacity 1s ease-in';

      setTimeout(() => {
        cards.style.opacity = 1;
      }, 50); // pequeña pausa para que la transición se note
    }, 1000);
  }, 5000);
};

function flipCard(cardElement, index) {
  if (!cardElement.classList.contains('flipped')) {
    cardElement.classList.add('flipped');
  }
}
