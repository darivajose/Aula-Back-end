
/* se tiver ligado, execute o comando.*/

let heLigado = true

if(heLigado){

    console.log('execute o comando')
}

    
/* Vai ao supermecado, se tiver ovos, compre leite.*/


let possuiOvos = true
let itensComprados = ''

if(possuiOvos){
    itensComprados = 'Leite' 
    console.log("Item comprado: " + itensComprados) // está DENTRO do escopo do if, será executado de qualquer maneira.    
}