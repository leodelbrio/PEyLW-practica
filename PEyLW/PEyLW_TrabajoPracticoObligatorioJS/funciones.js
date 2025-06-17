
//validar los datos dentro de los cosos
function validar () {
    //dejo en 0
    dejarEnCero();

    var errores = 0;

    //llamo a los cosos del enunciado 
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');
    var dia = document.getElementById("dia");
    var mes = document.getElementById('mes');
    var anio = document.getElementById("anio");
    var obSo = document.getElementById('obras_sociales');

    //coss vacios 
    // trim() saca los espacios

    if (nombre.value.trim() === '') {
        unError(nombre);
        errores++
    }

    if (apellido.value.trim() === '') {
        unError(apellido);
        errores++;
    };

    //que el mail este no vacio y este bien escrito (cos Y coso)

    if (email.value.trim() === "" || !validarEmail(email.value)) {
        unError(email)
        errores++;
    }

    if (obSo.value === '') {
        unError(obSo);
        errores++;
    }

    //lo de las fechas 
    //
    //──────▄▌▐▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▌
    //───▄▄██▌█ BEEP BEEP
    //▄▄▄▌▐██▌█  if's
    //███████▌█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▌
    //▀(⊙)▀▀▀▀▀▀▀(⊙)(⊙)▀▀▀▀▀▀▀▀▀▀(⊙)

    if (!esEnteroPositivo(dia.value) || !esEnteroPositivo(mes.value) || 
        !esEnteroPositivo(anio.value)) {
            unError(dia);
            unError(mes);
            unError(anio);
            errores++;
        } else if (!esFechaValida(parseInt(dia.value), parseInt(mes.value), parseInt(anio.value))) {
            unError(dia);
            unError(mes);
            unError(anio);
            errores++;
        } else {
            //no se que poner aca
            // console.log('esta todo bien?)
        }

        if (errores > 0) {
            return false
        }

        alert('Los datos ingresados son correctos y fueron enviados!');

        return true

}

function unError (x) {
    x.style.backgroundColor = 'rgb(252, 128, 100)'
    x.style.border = '3px solid  rgb(255, 47, 0)'
}

function dejarEnCero () {
    var aLimpiar = document.querySelectorAll('#miFormulario input, #miFormulario select');
    var i = 0;

    for (i = 0; i < aLimpiar.length; i++){
        aLimpiar[i].style.border = '  '
        aLimpiar[i].style.backgroundColor = ''
    };
}

    //una demencia esto

function esEnteroPositivo(y) {
    var num = parseInt(y);
    return Number.isInteger(num) && num > 0;
}

    //las validaciones gracias taringa
    
function validarEmail(correoElec) {
    var emotes = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emotes.test(correoElec)
}

function esFechaValida(d, m, a) {
  var fecha = new Date(a, m - 1, d);
  return fecha.getDate() === d && (fecha.getMonth() + 1) === m && fecha.getFullYear() === a;
}

