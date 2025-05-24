window.onload = function () {
  setTimeout(() => {
    const intro = document.getElementById('intro');
    const cards = document.getElementById('cards-container');
    intro.style.opacity = 0;

    setTimeout(() => {
      intro.style.display = 'none';
      cards.classList.remove('hidden');
    }, 1000); // Tiempo para transición
  }, 5000); // Esperar 5 segundos antes de desaparecer
};

function flipCard(cardElement, index) {
  if (!cardElement.classList.contains("flipped")) {
    cardElement.classList.add("flipped");
  }
}
