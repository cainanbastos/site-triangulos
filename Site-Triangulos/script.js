// Pesquisa local: funciona sem internet, conta resultados e aceita acentos.
const form = document.querySelector('#search-form');
const input = document.querySelector('#search');
const cards = [...document.querySelectorAll('.searchable')];
const status = document.querySelector('#search-status');
const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
function search() {
 const query = normalize(input.value.trim());
 let count = 0;
 cards.forEach(card => { const match = normalize(card.textContent).includes(query); card.hidden = !match; if (match) count++; });
 status.textContent = query ? (count ? `${count} resultado(s) encontrado(s). Limpe o campo para mostrar todo o conteúdo.` : 'Nenhum resultado. Tente “área”, “escaleno” ou “ângulo”.') : '';
}
form.addEventListener('submit', event => { event.preventDefault(); search(); });
input.addEventListener('input', search);
