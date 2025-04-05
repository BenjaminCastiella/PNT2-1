// Simula cuentas de banco. Cada cuenta tiene nombre, saldo. Crea funciones para:
// - Depositar dinero
// - Retirar dinero (si hay saldo suficiente)
// - Mostrar saldo

let cuentas = [
  { nombre: "Juan", saldo: 1000 },
  { nombre: "Lucía", saldo: 500 },
];

function depositar(nombre, monto) {
    let usuario = existeUsuario(nombre);
    if(usuario != undefined){
        usuario.saldo += monto;
    }

    return "";
}

function retirar(nombre, monto) {
    let usuario = existeUsuario(nombre);
    let aRetirar = 0;

    if(usuario != undefined){
        if(monto <= usuario.saldo){
            aRetirar = monto
            usuario.saldo -= monto;
        }
    }

    return aRetirar;
}

function mostrarSaldo(nombre) {
    let usuario = existeUsuario(nombre);
    if(usuario != undefined){
        console.log(`Saldo de ${nombre}: ${usuario.saldo}`);
    }

    return "";
}

function existeUsuario(nombre){
    return cuentas.find(usuario => usuario.nombre === nombre);
}

depositar("Juan", 200);
retirar("Lucía", 100);
mostrarSaldo("Juan");
mostrarSaldo("Lucía");
  