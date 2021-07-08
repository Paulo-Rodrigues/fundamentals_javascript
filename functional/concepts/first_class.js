// Uma função é dita de primeira classe (First Class Function) 
// quando essa função é tratada como qualquer outro valor/variavel
//
const x = 3
const y = function(txt) {
  return `Texto -> ${txt}`
}

console.log(x)
console.log(y('Olá'))
