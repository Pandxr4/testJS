document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Si la autenticación es exitosa, redirigir a la página de inicio
    window.location.href = '../index.html';
});
