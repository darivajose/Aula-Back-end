function torrar(){
    console.log("torrando pão")
}

 
function injetarPao(){
    console.log("preparando para injetar o pão")
    console.log("finalizado")
}
torrar()
injetarPao()

// dois escopo dentro< um funçao
function getData(){
    console.log("pegando dads do usuario ");
    if(1 < 3) {
        console.log("numero encotrado")
    }
}
getData()


/*
function dobra(vetor){
    let resultados = [];
    for (let i = 0; i < vetor.length ; i++){
        resultados.push(vetor[i] * 2);
    }
    return resultados;
}
*/



// function soma(numero1, numero2) {
//     return numero1 + numero2;

    
// }
// console.log(soma(2 + 2))









// GERADOR DE CPF

/* function gerarCPF() {
    // Gera 9 dígitos aleatórios
    let n = [];
    for (let i = 0; i < 9; i++) {
        n.push(Math.floor(Math.random() * 10));
    }

    // Calcula o primeiro dígito verificador
    let soma1 = 0;
    for (let i = 0, peso = 10; i < 9; i++, peso--) {
        soma1 += n[i] * peso;
    }
    let resto1 = soma1 % 11;
    let d1 = resto1 < 2 ? 0 : 11 - resto1;

    // Calcula o segundo dígito verificador
    let soma2 = 0;
    for (let i = 0, peso = 11; i < 9; i++, peso--) {
        soma2 += n[i] * peso;
    }
    soma2 += d1 * 2;
    let resto2 = soma2 % 11;
    let d2 = resto2 < 2 ? 0 : 11 - resto2;

    // Monta o CPF final
    return `${n[0]}${n[1]}${n[2]}.${n[3]}${n[4]}${n[5]}.${n[6]}${n[7]}${n[8]}-${d1}${d2}`;
}

console.log(gerarCPF());


function decimalParaBinario(n) {
  return n.toString(2);
}

console.log(decimalParaBinario(25)); // "11001"
 */