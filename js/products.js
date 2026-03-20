
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(products => {

    const container = document.getElementById('products');

    products.forEach(product => {

      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${product.image}" width="100">
        <h3>${product.title}</h3>
        <p class="price">${product.price} $</p>
        <button>Order</button>
      `;

      const button = card.querySelector('button');

      button.addEventListener('click', () => {
        window.location.href = 'order.html';
      });

      container.appendChild(card);
    });
  });