// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres
let nombres = [];

// funcion actualizar lista de amigos
function actualizarLista() {

    // Limpia la lista actual
    let mostrarLista = document.getElementById('listaAmigos');
    mostrarLista.innerHTML = ' ';
    // Realiza la iteración y muestra la nueva lista
    nombres.forEach(i => {
        // Crea un elemento 'lista' 
        let li = document.createElement('li');
        //Agrega los nombres del array al elemento 'lista'
        li.textContent = i;
        // Muestra los nombres visibles en la pagina
        mostrarLista.appendChild(li);
    });   
}

// funcion agregar amigo
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo');
    // Evalua si se quiere agregar un nobre vacio
    if (nombreAmigo.value === '') {
        alert('Por favor, ingrese un nombre válido')
    } else {
        // Obtiene el nombre digitado y lo agrega al array 
        nombres.push(nombreAmigo.value);
        // Actualiza la lista y limpia el campo para volver a escribir
        actualizarLista();
        nombreAmigo.value = '';
    }
}

// funcion para realizar el sorteo aleatorio 
function sortearAmigo() {
    // Generar número aleatorio para usar como índice del array
    let numeroAleatorio = Math.floor(Math.random()*nombres.length);
    let amigoSorteado = nombres[numeroAleatorio];
    
    //Muestra el ganador aleatoriamente
    let ganador = document.getElementById('listaAmigos');
    ganador.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
}
