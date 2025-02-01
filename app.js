// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres
let nombres = [];

// funcion agregar amigo
function agregarAmigo() {

    let nombreAmigo = document.getElementById('amigo').value;

    nombres.push(nombreAmigo);
}

// funcion actualizar amigos
function actualizarListaAmigos() {
    let elementoHTML = document.getElementById('listaAmigos');
    
    elementoHTML.innerHTML =`<div>${nombres}</div>`;

   
    

}

actualizarListaAmigos();