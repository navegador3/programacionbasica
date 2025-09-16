// Mostrar / Ocultar contraseña
document.querySelectorAll(".toggle_password").forEach((icon, index) => {
    icon.classList.add("fa", "fa-eye"); // ícono inicial

    icon.addEventListener("click", () => {
        const input = icon.previousElementSibling;
        const type = input.getAttribute("type") === "password" ? "text" : "password";
        input.setAttribute("type", type);
        icon.classList.toggle("fa-eye");
        icon.classList.toggle("fa-eye-slash");
    });
});

// Enviar formulario
function enviar() {
    event.preventDefault(); // evita que recargue la página

    // Recolectar datos
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const tipoId = document.getElementById("tipodeidentificación").value;
    const numeroId = document.getElementById("númerodeidentificación").value.trim();
    const email = document.getElementById("email").value.trim();
    const fechaNacimiento = document.getElementById("fechadenacimiento").value;
    const mensaje = document.getElementById("mensaje").value.trim();
    const genero = document.getElementById("genero").value;
    const passwords = document.querySelectorAll("#password");

    // Validaciones básicas
    if (!nombre || !apellido || !numeroId || !email || !fechaNacimiento || !mensaje) {
        Swal.fire("Error", "Por favor, complete todos los campos requeridos.", "error");
        return;
    }

    if (passwords[0].value !== passwords[1].value) {
        Swal.fire("Contraseñas no coinciden", "Verifica las contraseñas ingresadas.", "warning");
        return;
    }

    // Si todo está bien
    Swal.fire({
        title: "Formulario enviado",
        text: "Tus datos fueron enviados exitosamente.",
        icon: "success",
        confirmButtonText: "Aceptar"
    });

    // Aquí podrías hacer algo con los datos, como enviarlos a un servidor...
}

// Limpiar formulario
function limpiar() {
    event.preventDefault();
    document.querySelector("form").reset();

    // Reset de tipo de inputs de contraseña a "password"
    document.querySelectorAll('input[type="text"]').forEach(input => {
        if (input.id === "password") {
            input.setAttribute("type", "password");
        }
    });

    // Reset de íconos a "fa-eye"
    document.querySelectorAll(".toggle_password").forEach(icon => {
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    });

    Swal.fire("Formulario limpiado", "Todos los campos han sido reiniciados.", "info");
}

