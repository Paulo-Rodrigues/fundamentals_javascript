// Funções que operam em outras funções,
// tomando-as como argumentos ou retornando-as,
//   são chamadas de higher-order functions

function executar(fn, ...params) {
  fn(...params)
}

function somar(a,b,c) {
  return a + b + c
}

function multiplicar(a,b) {
  return a * b
}

executar(somar, 4,5,6)
executar(multiplicar, 4 ,6)


// retornando uma função
//
function executar(fn, ...params) {
  return function(texto) {
    return `${texto} -  ${fn(...params)`
  }
}

executar(somar, 4,5,6)('O resultado da soma ')
executar(multiplicar, 4 ,6) ('O resultado da multiplicação ')
