let p = new Promise(function(resolve) {
  resolve(['Ana', 'Bia', 'Carlos'])
})

// p.then(function(valor) {
//   console.log(valor)
// })

p.then(valor => valor[0]) // pega o primeiro valor do array
 .then(primeiro => primeiro[0]) // pega a primeira letra do primeiro nome
 .then(letra => letra.toLowerCase()) // transforma a letra em minuscula
 .then(console.log) // mostra no console -> equivalente a - v => console.log(v)
