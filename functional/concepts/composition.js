function composition(fn1, fn2) {
  return function(valor) {
    return f1(f2(valor))
  }
}

function compositions(...fns) {
  return function(valor) {
    return fns.reduce((acc, fn) => {
      return fn(acc)
    }, valor)
  }
}


function gritar(texto) {
  return texto.toUpperCase()
}

function enfatizar(texto) {
  `${texto}!!!`
}

const resultado = compositions(
  gritar,
  enfatizar
)('para')

console.log(resultado)
