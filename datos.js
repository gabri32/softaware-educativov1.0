var datosnom = ["gabriel"];
var datoscorreo = ["gabodelac@gmail.com"];
var usuariounic = ["admin gab"];
var pasword = ["1234"];

function agregarNombre(nuevoNombre, nuevocorreo, nuevousuario, newpasword) {
    datosnom.push(nuevoNombre);
    datoscorreo.push(nuevocorreo);
    usuariounic.push(nuevousuario);
    pasword.push(newpasword);
}

document.getElementById("registrobs").addEventListener("click", function (event) {
    event.preventDefault();

    const nuevoNombre = document.getElementById("nomregis").value;
    const nuevocorreo = document.getElementById("correoregis").value;
    const nuevousuario = document.getElementById("usnew").value;
    const newpasword = document.getElementById("newpas").value;

    if (datoscorreo.includes(nuevocorreo)) {
        alert("El correo ya está registrado");
        return;
    }


    datosnom.push(nuevoNombre);
    datoscorreo.push(nuevocorreo);
    usuariounic.push(nuevousuario);
    pasword.push(newpasword);
    alert("Registro exisitoso");
    // Limpiar los campos de entrada
    document.getElementById("nomregis").value = "";
    document.getElementById("correoregis").value = "";
    document.getElementById("usnew").value = "";
    document.getElementById("newpas").value = "";

    console.log("datosnom actualizado:", datosnom);
});
function mostrarContenido(idContenido) {
    // Ocultar todos los contenidos adicionales
    document.querySelectorAll('.hidden-content').forEach(function (el) {
        el.style.display = 'none';
    });

    // Mostrar el contenido específico
    document.getElementById(idContenido).style.display = 'block';
}

document.getElementById("identrar").addEventListener("click", function (event) {
    event.preventDefault();

    var correoIngresado = document.getElementById("correo").value;
    var contraseñaIngresada = document.getElementById("contraseña").value;


    var correoEncontrado = false;
    for (var i = 0; i < datoscorreo.length; i++) {
        if (correoIngresado === datoscorreo[i]) {

            console.log(datosnom)
            correoEncontrado = true;
            break;
        }
    }

    if (correoEncontrado) {
        var contraseñaCorrespondiente = pasword[i];
        if (contraseñaIngresada === contraseñaCorrespondiente) {
            window.location.href = "../softaware educativo/vista principal/vistaprincipal.html";

        } else {
            alert("Contraseña incorrecta");
        }
    } else {
        alert("El correo no se encuentra registrado");
    }
});


document.getElementById("olvidoContraseña").addEventListener("click", function (event) {
    event.preventDefault();

    var correoParaRestablecer = prompt("Por favor, ingresa tu correo electrónico para restablecer la contraseña:");

    if (correoParaRestablecer === null) {
        // El usuario canceló el restablecimiento de contraseña
        return;
    }

    var correoEncontrado = false;
    var usuarioIndex = -1;

    for (var i = 0; i < datoscorreo.length; i++) {
        if (correoParaRestablecer === datoscorreo[i]) {
            correoEncontrado = true;
            usuarioIndex = i;
            break;
        }
    }

    if (correoEncontrado) {
        var nuevaContraseña = prompt("Ingresa tu nueva contraseña:");

        if (nuevaContraseña !== null && nuevaContraseña !== "") {
            // Actualizar la contraseña del usuario
            pasword[usuarioIndex] = nuevaContraseña;
            alert("Contraseña restablecida con éxito. Puedes iniciar sesión con tu nueva contraseña.");
        } else {
            alert("La contraseña no puede estar en blanco. El restablecimiento de contraseña ha sido cancelado.");
        }
    } else {
        alert("El correo electrónico ingresado no se encuentra registrado.");
    }
});


function redirigirARepositorios() {
    // Cambia 'nombre_de_tu_otro_archivo.html' por el nombre de tu archivo HTML de destino.
    window.location.href = '../softaware educativo/pagina_demodulos/modulo1.html';
}





