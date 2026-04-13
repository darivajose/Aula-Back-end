// Estrutura de controle de fluxo - Switch Case
// switch/case/break/default

/* switch (expressão) {
     case valor1:
         // código a ser executado se a expressão for igual a valor1
         break;
     case valor2:
         // código a ser executado se a expressão for igual a valor2  
         break;
     ...
     default:
         // código a ser executado se a expressão não for igual a nenhum dos casos anteriores
}*/

let fruta = 'Laranja'
switch (fruta){
    case 'Laranja':
        console.log('Suco de Laranja')
        break

    case 'Banana':
        console.log('Vitamina de Banana')
        break

    case 'Macã':
        console.log('Suco de Maçã') 
        break

    default:
        console.log('Fruta não encontrada')
}
