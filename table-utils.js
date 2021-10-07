var args = process.argv.slice(2)

var multiply = require("./multiply")

function addition(num1) {
  num1 = args[0]
  for (var i = 0; i <= 10; i++){
    var somme =  Number(num1) + i
    console.log(`${num1} + ${i} = ${somme}`)
  }
}

console.log(multiply)
console.log(addition())

module.export = {
  multiply,
  addition
}

