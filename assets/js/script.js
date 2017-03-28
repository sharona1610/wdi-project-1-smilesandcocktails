$(document).ready(function() {

  // var alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

  var puzzle =
    [
    {answer: "CHARKWAYTEOW", category: "FOOD"} ,
    {answer: "ELDERFLOWER", category:"FLOWER"},
    {answer: "GREENLAND", category:"COUNTRY"},
    ]

  var playerName = ''
  var randomIndex = puzzle.length + 1

//click on 'let's play button' - must create

  // function gameStart() {
    // playerName = prompt('PLAYER 1, PLEASE ENTER YOUR NAME:')
    // alert('ALRIGHT THEN ' + playerName.toUpperCase() + ', LET\'S PLAY!')
  // }


  function randomizePuzzle() {
      randomIndex = Math.floor(Math.random() * puzzle.length)
      console.log(randomIndex)
      return randomIndex
}
  randomizePuzzle()

  function displayPuzzle() {
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

  displayPuzzle()

  function keyInMethod() {
    var guessArea = document.querySelector('.guess-letter')

    var guessLabel = document.createElement('label')
    guessLabel.setAttribute("for","guess")

    var guess = document.createElement('input')
    guess.setAttribute('type','text')
    guess.id = 'guess'

    var guessButton = document.createElement('input')
    guessButton.setAttribute('type','button')
    guessButton.setAttribute('value','GUESS LETTER')
    guessButton.id = 'guessButton'

    guessArea.appendChild(guessLabel)
    guessArea.appendChild(guess)
    guessArea.appendChild(guessButton)

  }

  keyInMethod()


  function checkGuess() {
    var guess = document.querySelector('#guess')
    var answer = puzzle[randomIndex].answer

      if (answer.includes(guess.value.toUpperCase())) {
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

    resultBox.removeChild(resultBox.lastChild)

    if (checkGuess() === true) {
      showResult.textContent = "Great Job! " + guess.value.toUpperCase() + " is in the word."
      resultBox.appendChild(showResult)
    } else {
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


  function createSolveButton() {
    var solveArea = document.querySelector('.solve-word')

    var solveLabel = document.createElement('label')
    solveLabel.setAttribute("for","solve")

    var solveInput = document.createElement('input')
    solveInput.setAttribute('type','text')
    solveInput.id = 'solve'

    var solveButton = document.createElement('input')
    solveButton.setAttribute('type','button')
    solveButton.setAttribute('value','SOLVE WORD')
    solveButton.id = 'solveButton'

    solveArea.appendChild(solveLabel)
    solveArea.appendChild(solveInput)
    solveArea.appendChild(solveButton)

  }

  createSolveButton()

  function isWordCorrect() {
    var solveInput = document.querySelector('#solve')
    var answer = puzzle[randomIndex].answer
    var letters = document.querySelectorAll('.letter')
    var resultBox = document.querySelector('.interaction')
    var showResult = document.querySelector('.showResult')
    // solveInput = ''

    showResult.textContent = "TAKE A GUESS"
    resultBox.appendChild(showResult)

    if(solveInput.value.toUpperCase() === answer) {
      letters.forEach(function(letter) {
        letter.style.backgroundColor = 'pink'
      })
      showResult.textContent = "YOU HAVE GOT IT!"
      resultBox.appendChild(showResult)

    } else if(solveInput.value.toUpperCase() !== answer) {
      showResult.textContent = "SORRY PLEASE TRY AGAIN!"
      resultBox.appendChild(showResult)
    }
  }

  // isWordCorrect()

  function startPlay() {

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
