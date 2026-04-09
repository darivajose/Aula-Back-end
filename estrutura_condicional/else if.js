/* Vai ao supermecado, se tiver ovos, compre leite.*/
let nivelDeFome = 3



if(nivelDeFome === 1){
    console.log('Pouca fome')


}else if(nivelDeFome ===2){
    console.log('muita fome')


}else{
    console.log('Você é um guloso')


}





let nota1 = 3
let nota2 = 4
let somaMedia = (nota1 + nota2) / 2
let media = 7

if(somaMedia >= media){  // 1. Nota 7 ou mais
    console.log(`Parebens você está aprovado com méida ${somaMedia}`)
}
else if(somaMedia >= 4){ // 2. Se não for 7, mas for ao menos 4 (cobre 4 até 6.9)
    console.log(`Você tirou nota ${somaMedia} e esta de RECUPERAÇÃO`)
}

else{ // 3. Se não for nenhuma das de cima (automaticamente menor que 4)
    console.log(`Você tirou nota valor ${somaMedia} e esta REPROVADO!`)
}

/* nota >= 7	"Tirou 7 ou qualquer coisa acima?"	Aprovado
** nota >= 4	"Não tirou 7, mas tirou ao menos 4?"	Recuperação
** else	"Não tirou nem 4? (sobrou o resto)"	Reprovado

*/


//                    Praticando >= Maior ou igual / <= Menor ou igual

//Maior ou Igual (>=)
//Pense em limites mínimos. Você precisa de pelo menos aquilo para passar.
let idade = 18;
if (idade >= 18) {
    console.log("Pode entrar na festa!"); // 18 entra, 19 entra...
}

//Menor ou Igual (<=)
//Pense em limites máximos. Você não pode passar daquilo.
let velocidade = 80;
if (velocidade <= 80) {
    console.log("Dentro do limite permitido."); // 80 está ok, 70 está ok.
}

