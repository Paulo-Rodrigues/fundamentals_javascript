const nums = [1,2,3,4,5,6]
console.log(typeof nums) // object
const new_nums = nums
  .map(el => el + 3)
  .map(el => el * 2)

console.log(nums, new_nums);

function TipoSeguro(valor) {
  return {
    valor,
    map(fn) {
      return TipoSeguro(fn(this.valor))
    }
  }
}

const texto = TipoSeguro('esse texto')
  .map(t => t.toUpperCase())

console.log(texto.valor)
