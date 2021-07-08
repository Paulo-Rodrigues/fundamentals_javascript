// Uma função pura é aquela em que o valor de retorno
// é determinado apenas pelos seus valores de entrada
// sem efeitos colaterais observáveis


// Exemlpo de função impura
// PI é externo a funçao
// const PI = 3.14
//
// function areaCirculo(raio) {
//   return PI * (raio * raio);
// }

// Ainda é uma função impura
// PI ainda é externo a função apesar de ser mais estável que a primeira
//
// function areaCirculo(raio) {
//   return Math.PI * (raio * raio);
// }

// Uma versão pura poderia ser
function areaCirculo(raio, pi) {
  return pi * (raio * raio);
}

//Função impura (Math.rando())
//a função é não determinística
//
function gerarNumeroAleatorio(min, max) {
  const fator = max - min + 1
  return parseInt(Math.random() * fator) + min
}

console.log(gerarNumeroAleatorio(5,6))

// basico de uma função pura
// o retorno só depende dos parametros de entrada
// resultado deterministico, previsivel
//
function somar(a,b) {
  return a + b
}

// impura pois possui efeitos colaterais observáveis
//
// let execucoes = 0
//
// function somar(a,b) {
//   execucoes++
//   return a + b
// }
