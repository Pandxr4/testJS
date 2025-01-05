document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productRow = button.parentElement.parentElement;
        const productName = productRow.children[0].innerText;
        const productPrice = productRow.children[1].innerText;
        addToCart(productName, productPrice);
    });
});

function addToCart(productName, productPrice) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push({ name: productName, price: productPrice });
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`${productName} ha sido agregado al carrito.`);
}
