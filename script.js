window.onload = function () {
  setTimeout(() => {
    const intro = document.getElementById('intro');
    const cards = document.getElementById('cards-container');

    intro.style.opacity = 0;

    setTimeout(() => {
      intro.style.display = 'none';
      cards.classList.remove('hidden');
      cards.classList.add('visible');
    }, 1000); // Esperar 1s más por la transición
  }, 5000); // Mostrar intro durante 5 segundos
};

function flipCard(cardElement) {
  if (!cardElement.classList.contains("flipped")) {
    cardElement.classList.add("flipped");
  }
}
