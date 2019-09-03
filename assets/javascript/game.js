// wins/losses/guesses tracker
let wins = 0
let losses = 0
let guesses = 9


// letters array
const letters = [ `a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z` ]


// select random letter 
const randomLetter = () => {
  return letters[Math.floor(Math.random()*letters.length)]
}

const compLetter = randomLetter()
console.log(compLetter)

const changeDisplay = () => {
  document.getElementById(`display`).innerHTML = `
  <h2>Guess what letter I am thinking of</h2>
  <h3>Wins: ${wins}</h3>
  <h3>Losses: ${losses}</h3>
  <h3>Guesses left: ${guesses}</h3>
  <h3>Your guesses so far:</h3>
  `
}
changeDisplay()

// player input event - letter interpretation
document.onkeyup = (event) => {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    console.log(event.key) 
    guesses--
    
    
    // document.getElementById(`display`).append(` ` + event.key)


    // win: player guess = randomLetter
    if (event.key === compLetter) {
      wins++
      guesses = 9
      const compLetter = randomLetter()
      console.log(compLetter)
    } else {
      losses++
      
    }

    changeDisplay()

    // run out of guesses
    if (guesses === 0) {
      alert(`You Lose`)
      location.reload()
    }
  }
  
  
}






