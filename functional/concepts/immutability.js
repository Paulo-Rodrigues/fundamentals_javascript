const nums = [3,1,7,9,6,2]

// impura -> possui efeitos colaterais
// function ordenar(array) {
//   return array.sort()
// }
//
function ordenar(array) {
  return [...array].sort()
}

const pessoa = {
  nome: 'Maria',
  altura: 1.76,
  cidade: 'SP'
}

// const novaPessoa = pessoa // atribuido por referencia, dados internos mutaveis

// impura
function alteraPessoa(pessoa) {
  const nova = { ...pessoa }
  nova.nome = 'Joao'
  return nova
}

