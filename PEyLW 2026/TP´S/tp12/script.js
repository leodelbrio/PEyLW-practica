console.log("ej1------------")

function calCularPromedio (nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

const promedio = calCularPromedio(7, 8, 9);
console.log(promedio)

console.log("ej1.1------------")

function nombreCompleto (nombre1, apellido1){
    return (nombre1 + apellido1);
}

let nombreYapellido = nombreCompleto("leonardo", " del Brio");
console.log(nombreYapellido);

console.log("ej1.2------------")

function estaAprobado(promedios){
    if (promedios >= 6) {
        return true;
    } else {
        return false;
    }
}

const promedio1 = (6 + 4 + 10) / 3;
let resultado = estaAprobado(promedio1);
console.log(resultado)

console.log("ej1.3---------------")

