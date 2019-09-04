// wins/losses/guesses tracker
let wins = 0
let losses = 0
let guesses = 9
let letterGuess = []

// letters array
const letters = [ `a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z` ]


// select random letter 
let randomLetter = (letters[Math.floor(Math.random()*letters.length)])

console.log(randomLetter)


const changeDisplay = () => {
  document.getElementById(`display`).innerHTML = `
  <h2>Guess what letter I am thinking of</h2>
  <h3>Wins: ${wins}</h3>
  <h3>Losses: ${losses}</h3>
  <h3>Guesses left: ${guesses}</h3>
  <h3>Your guesses so far: ${letterGuess}</h3>
  `
}
changeDisplay()

// player input event - letter interpretation
document.onkeyup = (event) => {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    console.log(event.key) 
    guesses--
    

    // win: player guess = randomLetter
    if (event.key === randomLetter) {
      wins++
      guesses = 9
      randomLetter = (letters[Math.floor(Math.random() * letters.length)])
      console.log(randomLetter)
    } else {
      letterGuess.push(` ` + event.key)
      
      // letterGuess = letterGuess + ` ` + event.key
      
    }

    changeDisplay()

    // run out of guesses
    if (guesses === 0) {
      losses++
      guesses = 9
      letterGuess = []
      randomLetter = (letters[Math.floor(Math.random() * letters.length)])
      console.log(randomLetter)
      changeDisplay()
      
      
    }
  }
  
  
}






