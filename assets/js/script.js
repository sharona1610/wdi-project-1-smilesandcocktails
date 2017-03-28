$(document).ready(function() {

  var puzzle =
    [
    {answer: 'CHARKWAYTEOW', category: 'FOOD'} ,
    {answer: 'ELDERFLOWER', category:'FLOWER'},
    {answer: 'GREENLAND', category:'COUNTRY'},
    ]

  var playerName = ''
  var randomIndex = puzzle.length + 1
  var solvedPuzzles = []
  var alphabets = []

//click on 'let's play button' - must create

  // function gameStart() {
    // playerName = prompt('PLAYER 1, PLEASE ENTER YOUR NAME:')
    // alert('ALRIGHT THEN ' + playerName.toUpperCase() + ', LET\'S PLAY!')
  // }

  var bottomContainer = document.querySelector('.bottom-container')
  bottomContainer.style.display = 'none'

  var startButton = document.querySelector('#startButton')

  startButton.addEventListener('click', function() {

      var intro = document.querySelector('.intro')
      intro.style.display = 'none'

      hideIntroShowButtons()
      displayPuzzle()
  })

  var guessButton = document.querySelector('#guessButton')

  guessButton.addEventListener('click', function () {
    checkGuess()
    guessResult()
    exposeLetter()
  })

  var solveButton = document.querySelector('#solveButton')

  solveButton.addEventListener('click', function() {
    isWordCorrect()
    restart()
  })

  // var playButton = document.querySelector('#playButton')
  //
  // playButton.addEventListener('click', function() {
  //   displayPuzzle()
  // })

  function randomizeIndex() {

    randomIndex = Math.floor(Math.random() * puzzle.length)
    return randomIndex
  }

  // function removeSolvedPuzzles() {
  //   var randomIndex = randomizeIndex()
  //   solvedPuzzles.push(puzzle[randomIndex])
  //   console.log(solvedPuzzles)
  // }

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
    categoryIntro.textContent = 'The category of this puzzle is:'
    categoryIntro.className = 'category'
    display.appendChild(categoryIntro)

    var showCategory = document.createElement('p')
    showCategory.className = 'category'
    showCategory.textContent = category
    display.appendChild(showCategory)

    console.log(answer, category)
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
      showResult.textContent = 'Sorry, you have to enter a 1-letter guess.'
      resultBox.appendChild(showResult)
    }
    else if (checkGuess() === 2) {
      showResult.textContent = 'You have already guessed \'' + guess.value.toUpperCase() + '\' earlier on.'
      resultBox.appendChild(showResult)
    }
    else if (checkGuess() === 3) {
      alphabets.push(guess.value.toUpperCase())
      console.log(alphabets)
      showResult.textContent = 'Excellent! \'' + guess.value.toUpperCase() + '\' IS in the word!'
      resultBox.appendChild(showResult)
    }
    else if (checkGuess() === 4) {
      alphabets.push(guess.value.toUpperCase())
      console.log(alphabets)
      showResult.textContent = 'Sorry, \'' + guess.value.toUpperCase() + '\' is NOT in the word!'
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
    var letters = document.querySelectorAll('.letter')
    var resultBox = document.querySelector('.interaction')
    var showResult = document.querySelector('.showResult')
    var playButton = document.querySelector('#playButton')

    showResult.textContent = 'TAKE A GUESS'
    resultBox.appendChild(showResult)

    if(solveInput.value.toUpperCase() === answer) {
      letters.forEach(function(letter) {
        letter.style.backgroundColor = 'pink'
      })
      showResult.textContent = 'YOU HAVE GOT IT!'
      resultBox.appendChild(showResult)

      return true

    } else if(solveInput.value.toUpperCase() !== answer) {
      showResult.textContent = 'SORRY PLEASE TRY AGAIN!'
      resultBox.appendChild(showResult)

      return false
    }
  }

  function restart() {
    if (isWordCorrect() === true) {
      var startButton = document.querySelector('#startButton')
      startButton.textContent = 'LET\'S PLAY AGAIN!'
      startButton.style.display = 'block'
    }
  }

})
