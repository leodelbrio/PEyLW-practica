let edad = 20;

let tieneDocuemnto = true;

let puedeIngresar = edad >= 18 && tieneDocuemnto;

let esInvitado = false;

console.log(puedeIngresar || esInvitado);
console.log(!tieneDocuemnto)

let inscripta = true;

let suspendida = false;

let puedeRendir = (inscripta == true && suspendida == false);

console.log(puedeRendir);

