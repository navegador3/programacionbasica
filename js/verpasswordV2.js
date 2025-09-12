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

toggle_password.addEventListener("click", () => toggleVisibility(password, toggle_password));
toggle_confirm.addEventListener("click", () => toggleVisibility(password2, toggle_confirm));

// Función de validación de igualdad
function checkPasswords() {
    if (password.value && password2.value) {
        if (password.value === password2.value) {
            password.style.border = "2px solid green";
            password2.style.border = "2px solid green";
            btn_validar.disabled = false;
        } else {
            password.style.border = "2px solid red";
            password2.style.border = "2px solid red";
            btn_validar.disabled = true;
        }
    } else {
        // Si falta alguno, desactivar botón y quitar colores
        password.style.border = "1px solid #ccc";
        password2.style.border = "1px solid #ccc";
        btn_validar.disabled = true;
    }
}

// Escuchar cambios en ambos inputs (tiempo real)
password.addEventListener("input", checkPasswords);
password2.addEventListener("input", checkPasswords);

// Validación completa
function validar() {
    // Reconfirmar que sean iguales
    if (password.value !== password2.value) {
        Swal.fire("Error", "Las contraseñas no coinciden.", "error");
        return;
    }

    let pwd = password.value;
    let lowercase = /[a-z]/.test(pwd);
    let uppercase = /[A-Z]/.test(pwd);
    let number = /\d/.test(pwd);
    let specialchar = /[\W_]/.test(pwd);

    if (pwd.length < 8) {
        Swal.fire("Error", "La contraseña debe tener al menos 8 caracteres.", "error");
        return;
    }

    if (specialchar && lowercase && uppercase && number) {
        Swal.fire("Correcto", "La contraseña cumple con las condiciones.", "success");
    } else {
        Swal.fire({
            icon: "error",
            title: "Contraseña Inválida",

 html: `
                <ul style="text-align:left; margin-left:20px;">
                    <li>${number ? "✅" : "❌"} Al menos un número</li>
                    <li>${lowercase ? "✅" : "❌"} Al menos una minúscula</li>
                    <li>${uppercase ? "✅" : "❌"} Al menos una mayúscula</li>
                    <li>${specialchar ? "✅" : "❌"} Al menos un caracter especial</li>
                </ul>
            `
        });
    }
}


function validar(){
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

    }
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
                <ul style="text-align:left; margin-left:20px;">
                    <li>${number ? "✅" : "❌" } Al menos un número</li>
                    <li>${lowercase ? "✅" : "❌" } Al menos una minúscula</li>
                    <li>${uppercase ? "✅" : "❌" } Al menos una mayúscula</li>
                    <li>${specialchar ? "✅" : "❌" } Al menos un caracter especial</li>
                </ul>
            `
        });                 
    }

} 
