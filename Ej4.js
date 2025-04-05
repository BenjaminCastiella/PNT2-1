// Crea una función que reciba una contraseña y diga si es válida según:
// - Tiene al menos 8 caracteres
// - Contiene al menos una mayúscula
// - Contiene al menos un número

function validarLength(pwd){
    return pwd.length >= 8;
}

function validarMayus(pwdSpliteada){
    return pwdSpliteada.some(char => char === char.toUpperCase() && char.match(/[A-Z]/));
}

function validarNum(pwdSpliteada){
    return pwdSpliteada.some(char => !isNaN(char));
}

function validarPassword(pwd) {
    try{
        if(!validarLength(pwd)){
            throw "La contraseña debe contener al menos 8 caracteres";
        }
        pwdSpliteada = pwd.split("");

        if(!validarMayus(pwdSpliteada)){
            throw "La contraseña debe tener al menos una letra mayúscula";
        }
        if(!validarNum(pwdSpliteada)){
            throw "La contraseña debe tener al menos un número";
        }

        console.log("Todo bien!");
        
    } catch(e){
        console.log(e);
    }

    return "";
}

console.log(validarPassword("hola123"));      // false
console.log(validarPassword("Hola1234"));     // true