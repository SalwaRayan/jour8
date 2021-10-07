var args = process.argv.slice(2)

function multiply(num) {
  num = args[0]
  for (var i = 0; i <= 10; i++){
    var multi =  num * i
    console.log(`${num} x ${i} = ${multi}`)
  }
}

console.log(multiply())

module.export = multiply