const readlineSync = require("readline-sync");

console.log(`
  Escolha uma dentre as opções
    1 - Pipoca 
    2 - Macarrão 
    3 - Carne 
    4 - Feijão 
    5 - Brigadeiro 
`);

// Escolha do prato e tratamento para opção inexistente

do {
  opcao = readlineSync.question("Escolha a sua opcao: ");
  if (opcao > 5) {
    console.log("Prato inexistente");
  }
} while (opcao > 5);

// Time

if (opcao == 1) {
  var timep = 10;
} else if (opcao == 2) {
  var timep = 8;
} else if (opcao == 3) {
  var timep = 15;
} else if (opcao == 4) {
  var timep = 12;
} else var timep = 8;

// escolhas e respostas

if (timep) {
  console.log("O tempo programado para preparação é de " + timep + " segundos");
  const time = readlineSync.question("Qual o tempo desejado: ");
  if (time < timep) {
    console.log("Tempo insuficiente");
  } else if (time >= 3 * timep) {
    console.log("Kabumm");
  } else if (time > 2 * timep) {
    console.log("A comida queimou");
  } else console.log("Prato pronto, bom apetite!!!");
}