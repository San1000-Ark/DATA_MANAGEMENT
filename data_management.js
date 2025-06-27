function data_management() {
    console.clear();
    console.log('Data management');

    window.products = {
        1: { id: 1, name: 'laptop', price: 1500 },
        2: { id: 2, name: 'mouse', price: 25 },
        3: { id: 3, name: 'keyboard', price: 50 }
    };

    window.setProducts = new Set(Object.values(products).map(p => p.name));

    window.mapProducts = new Map([
        ['Electronic', 'laptop'],
        ['Accessory', 'mouse'],
        ['Accessory', 'keyboard']
    ]);

    renderData();
}

function renderData() {
    // show table products
    const productTableBody = document.getElementById('productTableBody');
    productTableBody.innerHTML = '';
    for (const id in products) {
        const product = products[id];
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${product.id}</td><td>${product.name}</td><td>$${product.price}</td>`;
        productTableBody.appendChild(tr);
    }

    // show unique products (Set)
    const uniqueProductsList = document.getElementById('uniqueProductsList');
    uniqueProductsList.innerHTML = '';
    setProducts.forEach(productName => {
        const li = document.createElement('li');
        li.textContent = productName;
        uniqueProductsList.appendChild(li);
    });

    // show map of categories
    const mapTableBody = document.getElementById('mapTableBody');
    mapTableBody.innerHTML = '';
    mapProducts.forEach((product, category) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${category}</td><td>${product}</td>`;
        mapTableBody.appendChild(tr);
    });
}

// execute when the DOM is ready up
document.addEventListener('DOMContentLoaded', () => {
    data_management(); // execute automatic

    const addButton = document.getElementById('addProductButton');
    addButton.addEventListener('click', () => {
        const id = prompt("Ingrese ID:");
        const name = prompt("Ingrese nombre:");
        const price = prompt("Ingrese precio:");

        if (!id || !name || !price || isNaN(price)) {
            alert("Datos inválidos");
            return;
        }

        products[id] = { id, name, price: parseFloat(price) };
        setProducts.add(name);

        renderData(); // render the program
    });
});
