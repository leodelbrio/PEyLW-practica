function suma () {
 //   n1 = prompt ('valor1=', 0);
 //   n2 = prompt ('valor2', 0);
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var suma = parseInt(n1) + parseInt(n2);
    salida = document.getElementById("salida");
    salida.value+=n1 + '+' +n2+ '=' +suma+ '\n';
}

function restar () {
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var resta = parseInt(n1) - parseInt(n2);
    salida = document.getElementById("salida");
    salida.value+= n1 + '-' + n2 + '=' + resta + '\n';
}

function dividir () {
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    if (n2 == 0) {
        alert("no")
    } else {
        var dividir = parseInt(n1) / parseInt(n2);
        salida = document.getElementById("salida")
        salida.value+= n1 + '/' + n2 + '=' + dividir + '\n';
    };
}

function multiplicar () {
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var multi = parseInt(n1) * parseInt(n2);
    salida = document.getElementById("salida");
    salida.value+=n1 + '*' +n2+ '=' + multi + '\n';
}