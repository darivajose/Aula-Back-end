readline = require('readline-sync');

let continuar = true;


console.log("--- CALCULADORA EM JAVASCRIPT ---");

while (continuar) {
    try {
        // 1. Solicitar o primeiro número
        let num1Input = readline.question("\nDigite o primeiro numero (ou 'sair'): ");

        if (num1Input.toLowerCase() === 'sair') {
            console.log("Encerrando a calculadora...");
            break;
        }

        let num1 = parseFloat(num1Input);

        // 2. Solicitar a operação
        let operacao = readline.question("Digite a operacao (+, -, *, /): ");

        if (operacao.toLowerCase() === 'sair') {
            console.log("Encerrando a calculadora...");
            break;
        }

        // 3. Solicitar o segundo número
        let num2 = parseFloat(readline.question("Digite o segundo numero: "));

        // 4. Executar a lógica (Usando if/else para ficar igual ao seu Python)
        let resultado = null;

        if (operacao === '+') {
            resultado = num1 + num2;
        } else if (operacao === '-') {
            resultado = num1 - num2;
        } else if (operacao === '*') {
            resultado = num1 * num2;
        } else if (operacao === '/') {
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                console.log("Erro: Divisao por zero nao e permitida.");
                continue; // Volta para o início do while
            }
        } else {
            console.log("Operacao invalida. Tente novamente.");
            continue;
        }

        // 5. Exibir o resultado
        if (resultado !== null) {++
            console.log(`Resultado: ${num1} ${operacao} ${num2} = ${resultado}`);
        }

        // 6. Perguntar se quer continuar
        let opcaoSaida = readline.question("Deseja fazer outra conta? (s/n): ").toLowerCase();
        if (opcaoSaida === 'n') {
            console.log("Obrigado por usar a calculadora!");
            continuar = false;
        }

    } catch (error) {
        console.log("Erro: Por favor, digite numeros validos.");
    }
}

console.log("Programa finalizado.");