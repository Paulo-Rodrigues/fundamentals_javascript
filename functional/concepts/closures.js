// Closure é quando uma função 'lembra' seu escopo léxico,
// mesmo quando a função é executada fora desse escopo léxico
//
const somarXMais3 = require('./closure_escope')

const x = 100

console.log(somarXMais3()) // -> resultado = 3, pois a função lembra seu escopo léxico
