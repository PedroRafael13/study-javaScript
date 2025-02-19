/**
  Escreva um programa que 
  verifique se um número é positivo e exiba o resultado no console.
*/

function isPositive(number) {
  const result = () => {
    if (number > 0) {
      return 'positivo';
    } else if (number < 0) {
      return 'negativo';
    } else {
      return 'zero';
    }
  };

  console.log(`Seu número é ${result()}`);
}

isPositive(2);
isPositive(-2);
isPositive(0);