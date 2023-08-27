let button = document.getElementById('btn-enviar');// busca el boton enviar

button.addEventListener('click', function () {
    //alert('Datos enviados')
    let nombreus = document.getElementById('nombreus');
    let correous = document.getElementById('correous');
    if (nombreus.value == '' || correous.value == '') {
        alert("El campo del nombre o el de contraseña esta vacio")
    } else if (nombreus.value.length > 25) {
        alert("USUARIO SUPERA EL LIMITE DE CARACTERES")
    }
    if (correous.value.length > 30) {
        alert("LA CONTRASEÑA SUPERA EL LIMITE DE CARACTERES")
    }

})

let buttonlim = document.getElementById('btn-limpiar');// busca el boton limpiar
buttonlim.addEventListener('click', function () {
    let nombreus = document.getElementById('nombreus');
    nombreus.value = '';
    let correous = document.getElementById('pasword');
    correous.value = '';
    alert('Datos limpiados')
})