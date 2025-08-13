const grid = document.getElementById('game-grid');
const panel = document.getElementById('info-panel');
const title = document.getElementById('info-title');
const desc = document.getElementById('info-desc');
const images = document.getElementById('info-images');
const closeBtn = document.getElementById('close-btn');

fetch('games.json')
  .then(res => res.json())
  .then(games => {
    games.forEach(game => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${game.image}" alt="${game.title}">
        <h3>${game.title}</h3>
      `;
      card.onclick = () => showInfo(game);
      grid.appendChild(card);
    });
  });

function showInfo(game) {
  title.textContent = game.title;
  desc.textContent = game.description;
  images.innerHTML = '';
  game.screenshots.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    images.appendChild(img);
  });
  panel.classList.add('visible');
}

closeBtn.onclick = () => {
  panel.classList.remove('visible');
};
