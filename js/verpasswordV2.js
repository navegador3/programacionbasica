const password = document.getElementById("password");
const toggle = document.getElementById("toggle_password");
const password2 = document.getElementById("password2");
const toggle2 = document.getElementById("toggle_password2");


// Lógica  para ver y ocultar contraseña
toggle.addEventListener("click", () => {
    const type = password.type === "password" ? "text" : "password";
    password.type =  type;
    toggle.classList.toggle("fa-eye");
    toggle.classList.toggle("fa-eye-slash");
});

toggle2.addEventListener("click", () => {
    const type = password2.type === "password" ? "text" : "password";
    password2.type =  type;
    toggle2.classList.toggle("fa-eye");
    toggle2.classList.toggle("fa-eye-slash");
});

toggle_password.addEventListener("click", () => {
    const type = password.type === "password" ? "text" : "password";
    password.type =  type;
    toggle_password.classList.toggle("fa-eye");
    toggle_password.classList.toggle("fa-eye-slash");
});

// Función para alternar visibilidad
function toggleVisibility(input, icon) {
    const type = input.type === "password" ? "text" : "password";
    input.type = type;
    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
}
toggle_password1.addEventListener("click", () => toggleVisibility(password1, toggle_password1));
toggle_password2.addEventListener("click", () => toggleVisibility(Password2, toggle_passwoed2));

// Función de validación de igualdad
function checkPasswords() {
    if (password1.value && Password2.value) {
        if (password1.value === Password2.value) {
            password1.style.border = "2px solid green";
            Password2.style.border = "2px solid green";
            btn_validar.disabled = false;
        } else {
            password1.style.border = "2px solid red";
            Password2.style.border = "2px solid red";
            btn_validar.disabled = true;
        }
    } else {
        // Si falta alguno, desactivar botón y quitar colores
        password1.style.border = "1px solid #ccc";
        Password.style.border = "1px solid #ccc";
        btn_validar.disabled = true;
    }
}

// Escuchar cambios en ambos inputs (tiempo real)
password1.addEventListener("input", checkPasswords);
Password2.addEventListener("input", checkPasswords);

// Validación completa
function validar() {
    // Reconfirmar que sean iguales
    if (password1.value !== Password2.value) {
       
        Swal.fire("Error", "Las contraseñas no coinciden.", "error");
        return;
    }



    let password    = document.getElementById("password").value;
    let lowercase   = /[a-z]/.test(password);
    let uppercase   = /[A-Z]/.test(password);
    let number      = /\d/.test(password);
    let specialchar = /[\W_]/.test(password);
    if(password.length < 8){
        Swal.fire(
            "Error",
            "La contraseña debe tener al menos 8 caracteres.",
            "error"
        );

        return
    };

    if(specialchar && lowercase && uppercase && number){
        Swal.fire(
            "Correcto",
            "La contraseña cumple con las condiciones.",
            "success"
        );                    
    }

    else{
        Swal.fire({
            icon: "error",
            title: "Contraseña Invalida",
            html: `
                <ul style="text-align:left; margin-left:20px;color:red;">
                    <li>${number ? "✅" : "❌" } Al menos un número</li>
                    <li>${lowercase ? "✅" : "❌" } Al menos una minúscula</li>
                    <li>${uppercase ? "✅" : "❌" } Al menos una mayúscula</li>
                    <li>${specialchar ? "✅" : "❌" } Al menos un caracter especial</li>
                </ul>
            `
        });                 
    }
} 




