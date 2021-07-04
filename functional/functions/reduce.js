const nums = [3,2,1,-3,4,7]
nums.reduce((acc, el) => acc + el, 0)

const carrinho = [
  {nome: 'Caneta', qtde: 10, preco: 1.00},
  {nome: 'Caderno', qtde: 5, preco: 12.00},
  {nome: 'Lapis', qtde: 5 , preco: 0.50},
  {nome: 'Compasso', qtde: 1, preco: 3.00},
]

const somar = (acc, el) => acc + el
const getTotal = item => item.qtde * item.preco
const totais = carrinho
      .map(getTotal)
      .reduce(somar)

Array.prototype.myReduce = function(fn, acc) {
  let accumulator = acc

  for(let i=0; i < this.length; i++) {
    if(!accumulator && i === 0) {
      accumulator = this[i]
      continue
    }
    accumulator = fn(acc, this[i], i, this)
  }

  return accumulator
}
