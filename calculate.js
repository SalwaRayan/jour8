var args = process.argv.slice(2)

function calculate(num1, num2, operation){
  num1 = Number(args[0])
  num2 = Number(args[1])
  operation = args[2]
  var result
  if (operation === "+"){
    result = num1 + num2
  } else if (operation === "-") {
    result = num1 - num2 
  } else if (operation === "/") {
    result = num1 / num2
  } else if (operation === "x") {
    result = num1 * num2
  } else if (operation === "%") {
    result = num1 % num2
  } else {
    result = "error"
  }

  var resultat = `
    ${num1} ${operation} ${num2} = ${result}
    `
  return resultat
}

console.log(calculate())