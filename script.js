window.onload = function() {
  const intro = document.getElementById('intro');
  const cards = document.getElementById('cards-container');

  setTimeout(() => {
    // Animar desaparición del intro
    intro.style.transition = 'opacity 1s ease-out';
    intro.style.opacity = 0;

    // Luego de que se desvanezca
    setTimeout(() => {
      intro.style.display = 'none';

      // Mostrar las cards
      cards.classList.remove('hidden');
      cards.style.display = 'flex';

      // Forzar reflow para que la transición funcione
      void cards.offsetWidth;

      // Hacer visibles las cards
      cards.style.opacity = 1;
    }, 1000); // 1 segundo para desaparecer el intro
  }, 5000); // esperar 5 segundos antes de ocultar intro
};

function flipCard(cardElement) {
  if (!cardElement.classList.contains('flipped')) {
    cardElement.classList.add('flipped');
  }
}
