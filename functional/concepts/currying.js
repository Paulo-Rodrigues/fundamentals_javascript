function textoComTamanhoEntre(min) {
  return function(max) {
    return function(erro) {
      return function(texto) {
        // Lazy
        const tamanho = (texto || '').trim().length

        if(tamanho < min || tamanho > max) {
          throw erro
        }
      }
    }
  }
}

const p1 = { nome: 'A', preco: 12.12, desc: 0.25 }

// textoComTamanhoEntre(4)(255)('Nome inválido')(p1.nome)

const forcarTamanhoPradrao = textoComTa manhoEntre(4)(255) // implementação parcial
forcarTamanhoPradrao('Nome invalido')(p1.nome)

const forcarNomeProdutoValido = forcarTamanhoPradrao('Nome valido')
forcarNomeProdutoValido(p1.nome)
