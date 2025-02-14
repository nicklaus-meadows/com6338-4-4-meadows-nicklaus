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

var guessEl = document.getElementById('word-to-guess') //set guess var el
var previousWordEl = document.getElementById('previous-word') // set previous guess
var incorrectLettersEl = document.getElementById('incorrect-letters') // wrong letters
var remainingGuessesEl = document.getElementById('remaining-guesses') // changes
var winsEl = document.getElementById('wins') // wins obvi
var lossesEl = document.getElementById('losses') // losses 

var wins = 0 // set wwins
var losses = 0 // set losses
var maxGuesses = 10 //max 10
var incorrectGuesses = []
var guessedLetters = []
var selectedWord = words[Math.floor(Math.random() * words.length)]
var displayWord = '_'.repeat(selectedWord.length)

guessEl.textContent = displayWord
remainingGuessesEl.textContent = maxGuesses
winsEl.textContent = wins
lossesEl.textContent = losses

document.onkeyup = function (e) {
  var key = e.key.toLowerCase()

  if (!/^[a-z]$/.test(key)) return // throw a slightly new version of this in.

  if (guessedLetters.includes(key) || incorrectGuesses.includes(key)) {
    return // cancel letters already used
  }

  if (selectedWord.includes(key)) {
    guessedLetters.push(key)


    displayWord = selectedWord
      .split('')
      .map(function (letter) {
        return guessedLetters.indexOf(letter) !== -1 ? letter : '_';
      })
      .join('')

    guessEl.textContent = displayWord


    if (!displayWord.includes('_')) {
      wins++
      winsEl.textContent = wins
      previousWordEl.textContent = selectedWord
      resetGame()
    }
  } else {
    incorrectGuesses.push(key)
    incorrectLettersEl.textContent = incorrectGuesses.join(', ')
    maxGuesses--
    remainingGuessesEl.textContent = maxGuesses

    if (maxGuesses === 0) {
      losses++
      lossesEl.textContent = losses
      previousWordEl.textContent = selectedWord
      resetGame()
    }
  }
}

function resetGame() {
  selectedWord = words[Math.floor(Math.random() * words.length)]
  displayWord = '_'.repeat(selectedWord.length)
  guessEl.textContent = displayWord
  incorrectGuesses = []
  guessedLetters = []
  maxGuesses = 10 //had a typo here that I spent way too much time on that it hurt my soul.
  incorrectLettersEl.textContent = ''
  remainingGuessesEl.textContent = maxGuesses
}