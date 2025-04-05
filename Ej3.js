// Crear una función que cuente cuántas veces aparece cada palabra en una oración.

const frase = "hola mundo hola código hola mundo";

function contarPalabras(texto) {
    let fraseSeparada = texto.split(" ");
    let result = []

    fraseSeparada.forEach(palabra => {
        let contadorDePalabra = result.find(counter => counter.palabra === palabra);

        if(contadorDePalabra === undefined){
            result.push({palabra: `${palabra}`, count: 1});
        } else{
            contadorDePalabra.count++;
        }
    });

    return result;
}

console.log(contarPalabras(frase));