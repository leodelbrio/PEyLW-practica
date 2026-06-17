const nombre = "Leonardo";
const apellido = "del Brio";
const materia = "Estatica";

let nota1 = 5;
let nota2 = 5;
let nota3 = 2;

let suma = (nota1 + nota2 + nota3);
let promedio = (suma/3);

console.log(promedio);

console.log("Alumno: " + nombre + " " + apellido);
console.log("En la materia: " + materia);
console.log("Usted tiene un promedio de: " + promedio);

let aprobado = (promedio > 6);

if (aprobado == true) {
    console.log("Aprobado")
} else {
    console.log("Seguir estudiando")
};

const nombres = ["leo", "luca", "manuel"];

const saludos =
    nombres.map(function(names){
        return "Hola " + names;
    });

console.log(saludos)


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const dobles = numeros.map(function (numero){
    return numero * 2;
})

console.log(dobles);

const divPorDos = numeros.map(function (numero) {
    if (numero % 2 == 0) {
        return numero + " es par"
    }else{
        return numero + " es impar"
    }
})

console.log(divPorDos);

const triplets = numeros.map(function (numero){
    if (numero % 3 == 0) {
        return numero;
    }
})

console.log(triplets)










