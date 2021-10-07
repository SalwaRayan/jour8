var prompt = require("prompt");

var mysteryNum = Math.floor(Math.random() * (100 - 1 + 1) + 1)

prompt.start()


function play() {
    prompt.get({ name: "q", description: "Quel est le nombre mystère ?" }, function (err, res) { // permet de paramétrer la question
      if (isNaN(res.q)) {
        console.log(err)
        console.log("That's not a number!")
        play()
      } else if (res.q < mysteryNum) {
        console.log("C'est plus!")
        play()
      } else if (res.q > mysteryNum) {
        console.log("C'est moins!")
        play()
      } else{
        console.log("Bravo!")
      }
    })
  }
  
  play()
