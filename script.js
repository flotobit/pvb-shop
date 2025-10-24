const items = [
    { name: '67', price: 10.00 },
    // Add more preset items here if you want!
];

function renderItems() {
    const itemList = document.getElementById('item-list');
    itemList.innerHTML = '';
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = `
            <span class="item-name">${item.name}</span>
            <span class="item-price">$${item.price.toFixed(2)}</span>
        `;
        itemList.appendChild(div);
    });
}

document.getElementById('add-item-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('item-name').value.trim();
    const price = parseFloat(document.getElementById('item-price').value);
    if (name && !isNaN(price) && price > 0) {
        items.push({ name, price });
        renderItems();
        this.reset();
    }
});

renderItems();
