function sumar () {

    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var suma = parseInt (n1) + parseInt (n2);
    salida = document.getElementById('salida');
    salida.value+= n1 + '+' + n2 + '=' + suma + '\n';

};

function restar () {
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var resta = parseInt(n1) - parseInt(n2);
    salida = document.getElementById('salida')
    salida.value+= n1 + '-' + n2 + '=' + resta + '\n';

}

function multiplicar () {
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var multi = parseFloat(n1) * parseFloat(n2);
    salida = document.getElementById('salida');
    salida.value+= n1 + '*' + n2 + '=' + multi + '\n';
}

function dividir () {
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var division = parseFloat(n1) / parseFloat(n2);
    salida = document.getElementById('salida');
    salida.value+= n1 + '/' + n2 + '=' + division + '\n';
};

function potencia () {
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var pot = Math.pow(n1 , n2);
    salida = document.getElementById('salida');
    salida.value+= n1 + ' potencia de ' + n2 + ' = ' + pot + '\n';
}

function raiz () {
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var ra = Math.sqrt(n1, n2);
    salida = document.getElementById('salida');
    salida.value+=  n1 + ' raiz de ' + n2 + ' = ' + ra + '\n';
}

function valorSeleccion () {
    var numTot = document.getElementById('n1').value;
    var resul = 0

    if (numTot < 0) {
        resul = -1;
        salidaDos = document.getElementById('salida2');
        salidaDos.value += resul;
    }else if (numTot >= 0 && numTot < 10) {
        resul = 0
        salidaDos = document.getElementById('salida2');
        salidaDos.value += resul;
    }else if ( numTot >= 10 && numTot <50) {
        resul = 1
        salidaDos = document.getElementById('salida2');
        salidaDos.value += resul;
    }else if (numTot >= 50 && numTot < 100) {
        resul = 2
        salidaDos = document.getElementById('salida2');
        salidaDos.value += resul;
    } else if (numTot >= 100) {
        resul = 3
        salidaDos = document.getElementById('salida2');
        salidaDos.value += resul;
    } else {
        salidaDos = document.getElementById('salida2');
        salidaDos.value += 'Ingrese un numero correcto';          
    }
}

function conversor () {
    var cantidad = document.getElementById('cantPlata').value;
    var resultado

    var divisa = document.getElementById('divisa');
    var moneda = divisa.value;

    salida = document.getElementById('salidaPlata');

    // toFixed es para mostrar x cantiadad de comas

    switch (moneda) {
        case 'PD':
            resultado = cantidad / 1179;
            salida.value = cantidad + ' Pesos son: ' + resultado + ' dolares';
            break;
        case 'DP':
            resultado = cantidad * 1179;
            salida.value = cantidad + ' Dolares son: ' + resultado + ' pesos';
            break;
        case 'PR':
            resultado = cantidad / 212;
            salida.value = cantidad + ' Pesos son: ' + resultado + ' Reales';
            break;
        case 'RP':
            resultado = cantidad * 212;
            salida.value = cantidad + ' Reales son: ' + resultado + ' Pesos';
            break;
        case 'PE':
            resultado = cantidad / 1362;
            salida.value = cantidad + ' Pesos son: ' + resultado + ' Euros';
            break;
        case 'EP':
            resultado = cantidad * 1362;
            salida.value = cantidad + ' Euros son: ' + resultado + ' Pesos';
            break;    
        default:
            salida.value = 'Por favor, seleccione una divisa'
            break;
    };

    
}