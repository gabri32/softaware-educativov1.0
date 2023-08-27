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

    agregarNombre(nuevoNombre, nuevocorreo, nuevousuario, newpasword);

    
    document.getElementById("nomregis").value = "";
    document.getElementById("correoregis").value = "";
    document.getElementById("usnew").value = "";
    document.getElementById("newpas").value = "";

   
    console.log("datosnom actualizado:", datosnom);
});

document.getElementById("identrar").addEventListener("click", function (event) {
    event.preventDefault();

    var correoIngresado = document.getElementById("correo").value;
    var contraseñaIngresada = document.getElementById("contraseña").value;

   
    var correoEncontrado = false;
    for (var i = 0; i < datoscorreo.length; i++) {
        if (correoIngresado === datoscorreo[i]) {
            correoEncontrado = true;
            break; 
        }
    }

    
    if (correoEncontrado) {
        var contraseñaCorrespondiente = pasword[i]; 
        if (contraseñaIngresada === contraseñaCorrespondiente) {
            window.location.href = "../softaware educativo/vistaprincipal.html";
        } else {
            alert("Contraseña incorrecta");
        }
    } else {
        alert("El correo no se encuentra registrado");
    }
});







