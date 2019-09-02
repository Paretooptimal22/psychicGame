// letters array

const letters = [ `a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z` ]


// select random letter 

const randomLetter = letters[Math.floor(Math.random()*letters.length)]

console.log(randomLetter)




// wins/losses/guesses tracker

let wins = 0
let losses = 0
let guesses = 9

document.getElementById(`wins`).innerHTML = `Wins: ` + wins

document.getElementById(`losses`).innerHTML = `Losses: ` + losses

document.getElementById(`guessesLeft`).innerHTML = `Guesses Left: ` + guesses

// player input event - letter interpretation

document.onkeyup = (event) => {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    console.log(event.key) 

    guesses--
    
    document.getElementById(`soFar`).append(` ` + event.key)

    
  }
  
}


// conditionals



