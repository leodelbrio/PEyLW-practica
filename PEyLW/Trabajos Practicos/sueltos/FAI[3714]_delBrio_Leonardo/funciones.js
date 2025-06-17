
//validar los datos dentro de los cosos
function validar () {
    //dejo en 0
    dejarEnCero();

    var errores = 0;

    //llamo a los elementos del enunciado 
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');
    var dia = document.getElementById("dia");
    var mes = document.getElementById('mes');
    var anio = document.getElementById("anio");
    var obSo = document.getElementById('obras_sociales');

    // cosos vacios 
    // trim() saca los espacios

    if (nombre.value.trim() === '') {
        unError(nombre);
        errores++
    }

    if (apellido.value.trim() === '') {
        unError(apellido);
        errores++;
    };

    //que el mail no este vacio y este bien escrito 

    if (email.value.trim() === "" || !validarEmail(email.value)) {
        unError(email)
        errores++;
    }

    if (obSo.value === '') {
        unError(obSo);
        errores++;
    }

    //arrancan las validaciones varias y confirmamos fechas de las fechas 
    //
    //──────▄▌▐▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▌
    //───▄▄██▌█ BEEP BEEP
    //▄▄▄▌▐██▌█  fechas
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
        } 

        if (errores > 0) {
            return false
        }

        alert('Los datos ingresados son correctos y fueron enviados!');

        return true

}

    //si el usuario se equivoca se lo decimos 
function unError (x) {
    x.style.backgroundColor = 'rgb(252, 128, 100)'
    x.style.border = '3px solid  rgb(255, 47, 0)'
}

function dejarEnCero () {
    var aLimpiar = document.querySelectorAll('#miFormulario input, #miFormulario select');
    var i = 0;

    for (i = 0; i < aLimpiar.length; i++){
        aLimpiar[i].style.border = ''
        aLimpiar[i].style.backgroundColor = ''
    };
}

    //una demencia esto

function esEnteroPositivo(y) {
    var num = parseInt(y);
    return Number.isInteger(num) && num > 0;
}

    //las validaciones, gracias taringa
    
function validarEmail(correoElec) {
    var emotes = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emotes.test(correoElec)
}


    //fechas...
    //ඞ ඞ ඞ ඞ 
function esFechaValida(d, m, a) {

    //numeros enteros
    if (!Number.isInteger(d) || !Number.isInteger(m) || !Number.isInteger(a)) {
        return false;
    }

    //cantidad meses
    if (m < 1 || m > 12) {
        return false;
    }

    //dias
    var diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    //un anio cada cuatro anios
    if (m === 2 && ((a % 4 === 0 && a % 100 !== 0) || (a % 400 === 0))) {
        diasPorMes[1] = 29;
    }

    //dia 32 no existe
    if (d < 1 || d > diasPorMes[m - 1]) {
        return false;
    }

    
    var fechaIngresada = new Date(a, m - 1, d);
    var hoy = new Date();

    return fechaIngresada <= hoy;
}

