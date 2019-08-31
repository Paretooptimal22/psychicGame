// letters array

const letters = [ `a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z` ]

// select random letter 

const randomLetter = letters[Math.floor(Math.random()*letters.length)]

console.log(randomLetter)

// wins/losses/guesses tracker

let wins = 0
let losses = 0
let guesses = 9

// player input event

document.onkeyup = function (event) {
  console.log(event.key)
}