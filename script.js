const products = [
  {
    name: '67',
    stats: 'Price: $10, Limited availability',
    link: null // null means out of stock for now
  },
  {
    name: 'Sunflower',
    stats: 'Price: $15, Boosts health',
    link: null
  },
  {
    name: 'Peashooter',
    stats: 'Price: $20, High damage',
    link: null
  }
];

const productList = document.getElementById('product-list');

products.forEach((product, index) => {
  const card = document.createElement('div');
  card.className = 'card';

  const header = document.createElement('div');
  header.className = 'card-header';
  header.textContent = product.name;

  const stats = document.createElement('div');
  stats.className = 'stats';
  stats.textContent = product.stats;

  const buyBtn = document.createElement('button');
  buyBtn.className = 'buy-btn';
  buyBtn.textContent = 'Buy';

  const message = document.createElement('div');
  message.className = 'message';

  buyBtn.addEventListener('click', () => {
    if (product.link) {
      message.textContent = product.link; // In future, replace with real private server link
    } else {
      message.textContent = 'Out of stock';
    }
  });

  card.appendChild(header);
  card.appendChild(stats);
  card.appendChild(buyBtn);
  card.appendChild(message);

  productList.appendChild(card);
});
