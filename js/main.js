const lists = [1, 2]; // Add more list IDs here
const grid = document.getElementById('game-grid');

lists.forEach(listId => {
  fetch(`data/list${listId}.json`)
    .then(res => res.json())
    .then(data => {
      data.games.forEach(game => {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => {
          window.location.href = `play.html/${listId}/${game.id}`;
        };

        const img = document.createElement('img');
        img.src = game.image;
        img.alt = game.title;

        const title = document.createElement('div');
        title.className = 'card-title';
        title.textContent = game.title;

        card.appendChild(img);
        card.appendChild(title);
        grid.appendChild(card);
      });
    })
    .catch(err => console.error(`Error loading list ${listId}:`, err));
});

