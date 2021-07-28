function eager(a,b) {

  // simula processamento mais pesado
  const fim = Date.now() + 2500
  while(Date.now < fim) {}

  const valor = Mat.pow(a, 3)
  return valor + b
}


function lazy(a) {

  // simula processamento mais pesado
  const fim = Date.now() + 2500
  while(Date.now < fim) {}

  const valor = Mat.pow(a, 3)
  return function(b) {
    valor + b

  }
}

console.time('#1')
console.log(eager(3, 100))
console.log(eager(3, 100))
console.log(eager(3, 100))
console.timeEnd('#1')


console.time('#2')
console.log(lazy(3) (100))
console.log(lazy(3) (100))
console.log(lazy(3) (100))
console.timeEnd('#2')


console.time('#3')
const lazy3 = lazy(3)
console.log(lazy3(100))
console.log(lazy3(100))
console.log(lazy3(100))
console.timeEnd('#3')
