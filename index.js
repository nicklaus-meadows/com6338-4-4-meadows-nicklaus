var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]

var guessEl = document.getElementById('word-to-guess')
var previousWordEl = document.getElementById('previous-word')
var incorrectLettersEl = document.getElementById('incorrect-letters')
var remainingGuessesEl = document.getElementById('remaining-guesses')
var winsEl = document.getElementById('wins')
var lossesEl = document.getElementById('losses')

var wins = 0
var losses = 0

document.onkeyup = function (e) {
  var key = e.key.toLowerCase()
  if (/^[a-zA-Z]$/.test(key))// should filter non letters from my vague understanding of it.
    console.log(e.key) // it does work on my console
  // we need to randomly pick a word from the array like in the practice example
  var randomWord = words[Math.floor(Math.random() * words.length)];
  console.log(key, randomWord); // tests checks out 
  // compare typed vs word options
  if (key === randomWord) {
    wins++
    winsEl.textContent = wins
  } else {
    losses++
    lossesEl.textContent = losses
  }
  previousWordEl.textContent = words

  // calc scores
  // display scores

}