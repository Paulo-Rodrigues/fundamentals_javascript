const nums = [3,1,7,9,6,2]

// impura -> possui efeitos colaterais
// function ordenar(array) {
//   return array.sort()
// }
//
function ordenar(array) {
  return [...array].sort()
}

