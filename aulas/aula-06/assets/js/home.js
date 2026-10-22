'use strict';
const busca = document.querySelector('#busca-especialidade');
const cards = document.querySelectorAll('.lista-especialidades li');
function normalizar(texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}
busca.addEventListener('input', () => {
  const termo = normalizar(busca.value.trim());
  cards.forEach((card) => {
    card.classList.toggle('oculto', !normalizar(card.textContent).includes(termo));
  });
});


