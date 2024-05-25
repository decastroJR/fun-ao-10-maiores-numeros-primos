//963R - PROGRAMAÇÃO JAVASCRIPT 2024/1 
//ISLANDE DE CASTRO SILVA JUNIOR 
//matricula: 2024101054

function ehPrime(num) {
  if (num <= 1) {
      return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
          return false;
      }
  }
  return true;
}

function findLargestPrimes() {
  const userInput = parseInt(prompt("Digite um número:"));
  if (isNaN(userInput)) {
      console.log("Entrada inválida. Por favor, insira um número válido.");
      return;
  }

  const largestPrimes = [];
  let currentNumber = userInput;
  while (largestPrimes.length < 10) {
      if (ehPrime(currentNumber)) {
          largestPrimes.push(currentNumber);
      }
      currentNumber--;
  }

  console.log("Os 10 maiores números primos a partir de", userInput, "são:");
  console.log(largestPrimes);
}

// Chame a função para encontrar os 10 maiores números primos
findLargestPrimes();
