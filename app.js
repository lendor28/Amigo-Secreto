let amigos = [];
// Función para validar el nombre.
function validarNombre(nombre) {
    // Validar que el campo no esté vacío o contenga espacios.
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return false;
    }

    // Verificar si el nombre ya está en la lista.
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return false;
    }
    return true;
}

// Función para agregar un amigo a la lista.
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value.trim(); // Elimina espacios al principio y al final.

    if (validarNombre(nombreAmigo)) {
        // Agregar el nombre al array.
        amigos.push(nombreAmigo);
        // Limpiar el campo de entrada.
        inputAmigo.value = "";
        // Actualizar la lista visual.
        actualizarListaAmigos();
    }
}
// Función para actualizar la lista visual de amigos.
function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar.

    // Recorrer el array de amigos y crear elementos <li> para cada uno.
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto.
function sortearAmigo() {
    // Verificar si hay suficientes amigos para sortear.
    if (amigos.length < 2) {
        alert("Necesitas al menos 2 amigos para realizar el sorteo.");
        return;
    }

    // Seleccionar un amigo aleatorio.
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado.
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}

// Event listener para el campo de entrada (permite usar Enter).
document.getElementById('amigo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarAmigo();
    }
});