document.addEventListener('DOMContentLoaded', () => {
    const carritoItemsContainer = document.getElementById('carrito-items');
    const totalElement = document.getElementById('total');
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    let total = 0;

    carrito.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price}</td>
        `;
        carritoItemsContainer.appendChild(row);

        // Sumar el precio del producto al total
        total += parseFloat(item.price.replace('$', ''));
    });

    // Actualizar el total en el HTML
    totalElement.innerText = `Total: $${total.toFixed(2)}`;

    document.getElementById('vaciar-carrito').addEventListener('click', () => {
        localStorage.removeItem('carrito');
        carritoItemsContainer.innerHTML = '';
        totalElement.innerText = 'Total: $0';
        alert('El carrito ha sido vaciado.');
    });

    document.getElementById('finalizar-compra').addEventListener('click', () => {
        // Redirigir a la página de pago
        window.location.href = '../pages/checkout.html';
    });
});
