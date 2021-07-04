function exec(fn, a, b) {
  return fn(a, b)
}

const somarNoTerminal = (x, y) => console.log(x + y)
const subtrairNoTerminal = (w, z) => console.log(w + z)
const subtrair = (w, z) => w + z

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 182, 27)

exec(subtrair, 54, 23)

const cb = () => console.log('Executei')
setInterval(cb, 1000)
setInterval(() => console.log('Executei'), 1000)
setInterval(function() {
  console.log('Executei')
}, 1000)
