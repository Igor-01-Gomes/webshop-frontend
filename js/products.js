fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(products => {
        const container = document.getElementById('product-container');

        const product = products[0];

        const div = document.createElement('div');

        div.innerHTML = `
            <img src="${product.image}" width="100">
            <h3>${product.title}</h3>
            <p>${product.price} $</p>
            <button>Order</button>
        `;

        const button = div.querySelector('button');

        button.addEventListener('click', () => {
            window.location.href = 'order.html';
        });

        container.appendChild(div);
    });