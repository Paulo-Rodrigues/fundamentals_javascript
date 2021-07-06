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

function esperarPor(tempo=2000) {
  return new Promise(function(resolve)) {
    setTimeout(function() {
      console.log('Executando')
      resolve()
    }, tempo)
  }
}

esperarPor()
  .then(esperarPor)
  .then(esperarPor)

function gerarNumerosEntre(min, max) {
  if(min > max) {
    [max, min] = [min, max]
  }

  return new Promise(resolve => {
    const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
    resolve(aleatorio)
  })
}

gerarNumerosEntre(10, 30)
  .then(num => num * 10)
  .then(console.log)

function funcionaOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    if(Math.random() < chanceErro) {
      reject('Ocorreu um erro')
    } else {
      resolve(valor)
    }
  })
}

funcionaOuNao('testando', 0.5)
    .then(v => `O valor é ${v}`)
    .then(console.log)
    .catch(err => console.log(err))
