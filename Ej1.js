// Dado un array de usuarios con nombre y edad, crea una función que retorne solo los mayores de edad.
const usuarios = [
    { nombre: "Ana", edad: 17 },
    { nombre: "Luis", edad: 22 },
    { nombre: "Marta", edad: 18 },
    { nombre: "Carlos", edad: 15 },
];
 
function obtenerMayoresDeEdad(lista) {
    return lista.filter(usuario => usuario.edad >= 18);
}
 
console.log(obtenerMayoresDeEdad(usuarios));