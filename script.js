window.onload = function() {
  setTimeout(() => {
    const intro = document.getElementById('intro');
    const cards = document.getElementById('cards-container');

    intro.style.transition = 'opacity 1s ease-out';
    intro.style.opacity = 0;

    setTimeout(() => {
      intro.style.display = 'none';
      cards.classList.remove('hidden');
    }, 1000); // Tiempo para desaparecer
  }, 5000); // Espera inicial
};

function flipCard(cardElement, index) {
  if (!cardElement.classList.contains('flipped')) {
    cardElement.classList.add('flipped');
  }
}
