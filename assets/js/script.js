document.addEventListener("DOMContentLoaded", function(event) {

  var puzzle =
    [
    {answer: 'PIZZA', category: 'FOOD'},
    {answer: 'PASSIONFRUITS', category: 'FOOD'},
    {answer: 'CHEESEBURGERS', category: 'FOOD'},
    {answer: 'BLACKBERRIES', category: 'FOOD'},
    {answer: 'GINGERBREAD', category: 'FOOD'},
    {answer: 'POMEGRANATE', category: 'FOOD'},
    {answer: 'QUESADILLAS', category: 'FOOD'},
    {answer: 'LEMONGRASS', category: 'FOOD'},
    {answer: 'PISTACHIOS', category: 'FOOD'},
    {answer: 'WATERMELON', category: 'FOOD'},
    {answer: 'HAZELNUTS', category: 'FOOD'},
    {answer: 'STONEHENGE', category: 'LANDMARK'},
    {answer: 'MERLION', category: 'LANDMARK'},
    {answer: 'PARTHENON', category: 'LANDMARK'},
    {answer: 'COLOSSEUM', category: 'LANDMARK'},
    {answer: 'KILIMANJARO', category: 'LANDMARK'},
    {answer: 'ACROPOLIS', category: 'LANDMARK'},
    {answer: 'POMPEII', category: 'LANDMARK'},
    {answer: 'ALCATRAZ', category: 'LANDMARK'},
    {answer: 'MECCA', category: 'LANDMARK'},
    {answer: 'FRANKENSTEIN', category: 'CHARACTER'},
    {answer: 'CHEWBACCA', category: 'CHARACTER'},
    {answer: 'LEPRECHAUNS', category: 'CHARACTER'},
    {answer: 'ZEUS', category: 'CHARACTER'},
    {answer: 'POSEIDON', category: 'CHARACTER'},
    {answer: 'VOLDEMORT', category: 'CHARACTER'},
    {answer: 'GODZILLA', category: 'CHARACTER'},
    {answer: 'BATWOMAN', category: 'CHARACTER'},
    {answer: 'CHIMPANZEES', category: 'ANIMALS'},
    {answer: 'CATERPILLAR', category: 'ANIMALS'},
    {answer: 'HUMMINGBIRD', category: 'ANIMALS'},
    {answer: 'WHALE', category: 'ANIMALS'},
    {answer: 'DOLPHINS', category:'ANIMALS'},
    {answer: 'HONEYBEES', category:'ANIMALS'},
    ]

  var randomIndex = puzzle.length + 1
  var solvedPuzzles = []
  var alphabets = []


  var bottomContainer = document.querySelector('.bottom-container')
  bottomContainer.style.display = 'none'

  var startButton = document.querySelector('#startButton')

  startButton.addEventListener('click', function() {

      var intro = document.querySelector('.intro')
      intro.style.display = 'none'

      hideIntroShowButtons()
      displayPuzzle()
      restart()
  })

  var guessButton = document.querySelector('#guessButton')

  guessButton.addEventListener('click', function () {
    checkGuess()
    guessResult()
    exposeLetter()
    guess.value =''
  })

  var solveButton = document.querySelector('#solveButton')

  solveButton.addEventListener('click', function() {
    isWordCorrect()
    displaySolveResult()
  })


  function randomizeIndex() {

    randomIndex = Math.floor(Math.random() * puzzle.length)

    return randomIndex
  }

  function hideIntroShowButtons() {
    var startButton = document.querySelector('#startButton')
    startButton.style.display = 'none'
    var bottomContainer = document.querySelector('.bottom-container')
    bottomContainer.style.display = 'block'
  }

  function displayPuzzle() {

    var dummyLetters = document.querySelectorAll('.letter')

    dummyLetters.forEach(function(letter) {
      letter.remove()
    })

    var dummyCategory = document.querySelectorAll('.category')

    dummyCategory.forEach(function(category) {
      category.remove()
    })
    var previousResultShow = document.querySelector('.showResult')

    previousResultShow.textContent = ''

    var randomIndex = randomizeIndex()

    var answer = puzzle[randomIndex].answer
    var category = puzzle[randomIndex].category
    var display = document.querySelector('#display-puzzle')

    console.log('the answer is: ' + answer + ' and the answer length is : ' + answer.length)

    for(var i = 0; i < answer.length; i++) {

      // Separate Letters of Word into Own Box
      var eachLetterBox = document.createElement('p')
      eachLetterBox.className = 'letter'
      eachLetterBox.textContent = answer.split('')[i]
      display.appendChild(eachLetterBox)
    }

    // Display corresponding Category below the boxes
    var categoryIntro = document.createElement('p')
    categoryIntro.textContent = 'THE CATEGORY OF THIS PUZZLE IS: '
    categoryIntro.className = 'category'
    display.appendChild(categoryIntro)

    var showCategory = document.createElement('p')
    showCategory.className = 'category'
    showCategory.textContent = category
    display.appendChild(showCategory)
  }


  function checkGuess() {
    var guess = document.querySelector('#guess')
    var answer = puzzle[randomIndex].answer

    if (guess.value.length > 1 || guess.value.length < 1) {
      // console.log('Guess entry is not a 1-letter word')
      return 1
    }
    else if (alphabets.includes(guess.value.toUpperCase()) === true) {
      // console.log('Letter has already been guessed')
      return 2
    }
    else if (answer.includes(guess.value.toUpperCase())) {
      // console.log('Letter is in the word')
      return 3
    }
    else if (!answer.includes(guess.value.toUpperCase())) {
      // console.log('Letter is not in the word')
      return 4
    }
  }

  function guessResult() {
    var guess = document.querySelector('#guess')
    var resultBox = document.querySelector('.interaction')
    var showResult = document.querySelector('.showResult')
    var answer = puzzle[randomIndex].answer

    resultBox.removeChild(resultBox.lastChild)


    if (checkGuess() === 1) {
      showResult.textContent = 'SORRY, YOU HAVE TO ENTER A 1-LETTER GUESS.'
      resultBox.appendChild(showResult)
    }
    else if (checkGuess() === 2) {
      showResult.textContent = 'YOU HAVE ALREADY GUESSED \'' + guess.value.toUpperCase() + '\' EARLIER ON.'
      resultBox.appendChild(showResult)
    }
    else if (checkGuess() === 3) {
      alphabets.push(guess.value.toUpperCase())
      console.log(alphabets)
      showResult.textContent = 'EXCELLENT! \'' + guess.value.toUpperCase() + '\' IS IN THE WORD'
      resultBox.appendChild(showResult)
    }
    else if (checkGuess() === 4) {
      alphabets.push(guess.value.toUpperCase())
      console.log(alphabets)
      showResult.textContent = 'SORRY, \'' + guess.value.toUpperCase() + '\' IS NOT IN THE WORD!'
      resultBox.appendChild(showResult)
    }

  }

  function exposeLetter() {
    var answer = puzzle[randomIndex].answer
    var guess = document.querySelector('#guess')
    var letters = document.querySelectorAll('.letter')

    letters.forEach(function(letter) {
      // console.log(letter)
      if(letter.textContent === guess.value.toUpperCase()) {
        letter.style.backgroundColor = 'pink'
      }
    })
  }

  function isWordCorrect() {
    var solveInput = document.querySelector('#solve')
    var answer = puzzle[randomIndex].answer

    if(solveInput.value.toUpperCase() === answer) {
      return true
    } else {
      return false
    }
  }

  function displaySolveResult() {

    var letters = document.querySelectorAll('.letter')
    var resultBox = document.querySelector('.interaction')
    var showResult = document.querySelector('.showResult')
    var playButton = document.querySelector('#playButton')

    if (isWordCorrect() === true) {
      letters.forEach(function(letter) {
        letter.style.backgroundColor = 'pink'
      })

      showResult.textContent = 'SMART ONE! YOU\'VE SOLVED IT!'
      resultBox.appendChild(showResult)

      solve.value = ''

      puzzle.splice(randomIndex,1)
      console.log("THE PUZZLE NOW HAS " + puzzle.length + " items.")

      restart()
    }
    else {
      showResult.textContent = 'SORRY PLEASE TRY AGAIN!'
      resultBox.appendChild(showResult)

      solve.value = ''
    }
  }

  function restart() {

      var startButton = document.querySelector('#startButton')
      startButton.value = 'ANOTHER PUZZLE'
      startButton.style.display = 'block'
  }

})
