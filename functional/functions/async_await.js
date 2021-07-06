function esperarPor(tempo=2000) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log('Executando')
      resolve()
    }, tempo)
  })
}

esperarPor(3000)
  .then(esperarPor)
  .then(esperarPor)

async function executar() {
  await esperarPor(3000)
  console.log('Async/Await')
}

executar()
