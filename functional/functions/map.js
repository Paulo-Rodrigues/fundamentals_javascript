const nums = [1,2,3,4,5]
const dobro = n => n * 2
console.log(nums.map(dobro))

const nomes = ['Ana', 'Bia', 'Pedro']
console.log(nomes.map(nome => nome[0]))

const carrinho = [
  {nome: 'Caneta', qtde: 10, preco: 1.00},
  {nome: 'Caderno', qtde: 5, preco: 12.00},
  {nome: 'Lapis', qtde: 5 , preco: 0.50},
  {nome: 'Compasso', qtde: 1, preco: 3.00},
]

const getNome = item => item.nome
console.log(carrinho.map(getNome))

const getTotal = item => item.qtde * item.preco
const totais = carrinho.map(getTotal)
console.log(totais)

Array.prototype.myMap = function(fn) {
  const mapped = []

  for(let i=0; i < this.length; i++) {
    const result = fn(this[i], i, this)
    mapped.push(result)
  }
  return mapped
}

const getNome = item => item.nome
console.log(carrinho.myMap(getNome))

const getTotal = item => item.qtde * item.preco
const totais = carrinho.myMap(getTotal)
console.log(totais)

