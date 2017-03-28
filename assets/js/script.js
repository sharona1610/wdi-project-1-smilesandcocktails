$(document).ready(function() {

  var puzzle =
    [
    {answer: "CHARKWAYTEOW", category: "FOOD"} ,
    {answer: "ELDERFLOWER", category:"FLOWER"},
    {answer: "GREENLAND", category:"COUNTRY"},
    ]

  var playerName = ''
  var randomIndex = puzzle.length + 1
  var solvedPuzzles = []

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
      displayPuzzle()
  })

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

    hideIntroShowButtons()
    var randomIndex = randomizeIndex()
    var answer = puzzle[randomIndex].answer
    var category = puzzle[randomIndex].category
    var display = document.querySelector('#display-puzzle')

    console.log("the answer is: " + answer + " and the answer length is : " + answer.length)

    for(var i = 0; i < answer.length; i++) {

      // Separate Letters of Word into Own Box
      var eachLetterBox = document.createElement('p')
      eachLetterBox.className = 'letter'
      eachLetterBox.textContent = answer.split('')[i]
      display.appendChild(eachLetterBox)
    }

    // Display corresponding Category below the boxes
    var categoryIntro = document.createElement('p')
    categoryIntro.textContent = "The category of this puzzle is:"
    display.appendChild(categoryIntro)

    var showCategory = document.createElement('p')
    showCategory.id = 'category'
    showCategory.textContent = category
    display.appendChild(showCategory)

    console.log(answer, category)
  }


  function checkGuess() {
    var guess = document.querySelector('#guess')
    var answer = puzzle[randomIndex].answer

    if (answer.includes(guess.value.toUpperCase()) && answer.length === 1) {
        // console.log (guess.value + " is in the " + answer)
      return true
    } else {
        // console.log (guess.value + " is not in the " + answer)
      return false
    }
  }

  function guessResult() {
    var guess = document.querySelector('#guess')
    var resultBox = document.querySelector('.interaction')
    var showResult = document.querySelector('.showResult')
    var answer = puzzle[randomIndex].answer

    resultBox.removeChild(resultBox.lastChild)

    if (checkGuess() === true) {
      showResult.textContent = "Great Job! " + guess.value.toUpperCase() + " is in the word."
      resultBox.appendChild(showResult)
    }
    else {
      showResult.textContent = "Sorry, " + guess.value.toUpperCase() + " is not in the word."
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
    // solveInput = ''

    showResult.textContent = "TAKE A GUESS"
    resultBox.appendChild(showResult)

    if(solveInput.value.toUpperCase() === answer) {
      letters.forEach(function(letter) {
        letter.style.backgroundColor = 'pink'
      })
      showResult.textContent = "YOU HAVE GOT IT!"
      resultBox.appendChild(showResult)

      playAgain()

      playButton.addEventListener('click', function() {
        // displayPuzzle()
        // removeSolvedPuzzles()
      })

    } else if(solveInput.value.toUpperCase() !== answer) {
      showResult.textContent = "SORRY PLEASE TRY AGAIN!"
      resultBox.appendChild(showResult)
    }
  }

  // isWordCorrect()

  function playAgain() {
    var playButton = document.createElement('input')
    var resultBox = document.querySelector('.interaction')

    playButton.setAttribute('type','button')
    playButton.setAttribute('value','LET\'S PLAY AGAIN!')
    playButton.id = 'playButton'
    resultBox.appendChild(playButton)

  }

  var guessButton = document.querySelector('#guessButton')

  guessButton.addEventListener('click', function () {
    checkGuess()
    guessResult()
    exposeLetter()

  })

  var solveButton = document.querySelector('#solveButton')

  solveButton.addEventListener('click', function() {
    isWordCorrect()
  })





  // $.ajax({
  //   url: 'products.json',
  //   dataType: 'json',
  //   type: 'get',
  //   cache: false,
  //   success:
  //
  //   function(data) {
  //     $(data.puzzle).each(function(index,value) {
  //       // console.log(index + " : " + value.answer + ", " + value.category)
  //     })
  //   }
  //
  // })


  // console.log('THIS WEBSITE IS RUNNING PROPERLY!')


})
