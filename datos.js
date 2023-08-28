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
           var label = document.getElementById("cajaTextoLabel");

           // Cambia el valor del label
           label.innerText = datoscorreo;
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








