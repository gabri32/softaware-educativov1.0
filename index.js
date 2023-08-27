let button = document.getElementById('btn-enviar');// busca el boton enviar

button.addEventListener('click', function () {
    //alert('Datos enviados')
    let nombreus = document.getElementById('nombreus');
    let pasword = document.getElementById('pasword');
    if (nombreus.value == '' || pasword.value == '') {
        alert("El campo del nombre o el de contraseña esta vacio")
    } else if (nombreus.value.length > 25) {
        alert("USUARIO SUPERA EL LIMITE DE CARACTERES")
    }
    if (pasword.value.length > 30) {
        alert("LA CONTRASEÑA SUPERA EL LIMITE DE CARACTERES")
    }
})


let buttonlim = document.getElementById('btn-limpiar');// busca el boton limpiar
buttonlim.addEventListener('click', function () {
    let nombreus = document.getElementById('nombreus');
    nombreus.value = '';
    let pasword = document.getElementById('pasword');
    pasword.value = '';
    alert('Datos limpiados')
})
const loginForm = document.getElementById("form");
const passwordInput = document.getElementById("pasword");
const nombreinput= document.getElementById("nombreus");

// Agregar un evento de clic al botón de enviar
document.getElementById("btn-enviar").addEventListener("click", function() {
    // Obtener el valor del campo de contraseña
    const passwordValue = passwordInput.value;
const nombrevalue = nombreinput.value;
    // Verificar si la contraseña es igual a "1193"
    if (passwordValue === "1193200857" && nombrevalue === "gabriel") {
        // Si la contraseña coincide, redirigir al usuario al otro formulario
        window.location.href = "file:///C:/Users/gabod/OneDrive/Escritorio/softaware%20educativo/vistaprincipal.html"; // Reemplaza con la URL correcta
    } else {
        // Si la contraseña no coincide, enviar el formulario actual
        loginForm.submit();
    }
});
const btnRegistro = document.getElementById("btn-registro");

// Agregar un evento de clic al botón
btnRegistro.addEventListener("click", function() {
   
    window.location.href = "https://github.com/gabri32/softaware-educativov1.0/fomulairo.html";
});

const btnRetroceso = document.getElementById("btn-retroceso");
btnRetroceso.addEventListener("click", function() {
    window.location.href = "file:///C:/Users/gabod/OneDrive/Escritorio/softaware%20educativo/index.html"; 
});
