/* Vai ao supermecado, se tiver ovos, compre leite.*/


let possuiOvos = false
let itensComprados = ''

if(possuiOvos){   //if =  se
    itensComprados = 'Leite' 
    console.log(`Itens comprado:   ${itensComprados}`)
      
}

else{  // se não
    itensComprados = 'Lasanha congelada'
    console.log(`Itens comprado:  ${itensComprados}`) // está DENTRO do escopo do if, será executado de qualquer maneira
    
}

 


