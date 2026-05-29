document.getElementById('formularioLogin').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener valores
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    // Validación básica
    if (usuario === 'admin' && contrasena === '12345') {
        alert('Inicio de sesión exitoso. ¡Bienvenido!');

        // Aquí podrías redirigir a otra página:
        window.location.href = "https://cruzcordovacamila4-commits.github.io/Login2Camila3.A/";
    } else {
        alert('Usuario o contraseña incorrectos. Intenta nuevamente.');
    }
});