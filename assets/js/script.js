$(document).ready(function() {

  var alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

  var puzzle =
    [
    {answer: "BUN", category: "FOOD"} ,
    {answer: "ELDERFLOWER", category:"FLOWER"},
    {answer: "GREENLAND", category:"COUNTRY"},
    ]

  // var answer = ['PIZZA', 'PASSIONFRUITS', 'CHEESEBURGERS', 'BLACKBERRIES', 'GINGERBREAD', 'POMEGRANATE', 'QUESADILLAS', 'LEMONGRASS', 'PISTACHIOS', 'WATERMELON']

  var puzzleAlreadyDisplayed = []
  var listedWords = []

  var pOneName = ''
  var pTwoName = ''
  var randomIndex = puzzle.length + 1

  // function gameStart() {
    // pOneName = prompt('PLAYER 1, PLEASE ENTER YOUR NAME:')
    // pTwoName = prompt('PLAYER 2, NOW YOUR NAME:')
    //
    // alert('ALRIGHT THEN, LET\'S PLAY!')
  // }
  // gameStart()

  function randomizePuzzle() {
    // if (puzzleAlreadyDisplayed.includes(randomIndex) === true) {
      randomIndex = Math.floor(Math.random() * puzzle.length)
      console.log(randomIndex)
    // } else {
    //   puzzleAlreadyDisplayed.push(randomIndex)
      return randomIndex
  // }
}
  randomizePuzzle()

  function displayPuzzle() {
    var answer = puzzle[randomIndex].answer
    var category = puzzle[randomIndex].category

    var display = document.querySelector('#display-puzzle')

    console.log("the answer is: " + answer + " and the answer length is : " + answer.length)

    for(var i = 0; i < answer.length; i++) {

      // Separate as Letter of the Answer into 1 Box
      var letterOfWordBox = document.createElement('div')
      letterOfWordBox.className = 'letter'
      letterOfWordBox.textContent = answer.split('')[i]
      display.appendChild(letterOfWordBox)
    }

    // Display corresponding Category below the boxes
    var categoryIntro = document.createElement('div')
    categoryIntro.textContent = "The category of this puzzle is:"
    display.appendChild(categoryIntro)

    var showCategory = document.createElement('div')
    showCategory.id = 'category'
    showCategory.textContent = category
    display.appendChild(showCategory)

    console.log(answer, category)
  }

  displayPuzzle()

  function keyInMethod() {
    var inputSpot = document.querySelector('#inputSpotForGuess')

    var newLabel = document.createElement('label')
    newLabel.setAttribute("for","guess")

    var input = document.createElement('input')
    input.setAttribute('type','text')
    input.id = 'guess'

    var button = document.createElement('input')
    button.setAttribute('type','button')
    button.setAttribute('value','Submit')
    button.id = 'guessButton'

    inputSpot.appendChild(newLabel)
    inputSpot.appendChild(input)
    inputSpot.appendChild(button)

  }

  keyInMethod()


  function checkGuess() {
    var input = document.querySelector('#guess')
    var button = document.querySelector('#guessButton')
    var answer = puzzle[randomIndex].answer

      if (answer.includes(input.value.toUpperCase())) {
        // console.log (input.value + " is in the " + answer)
        return true
      } else {
        // console.log (input.value + " is not in the " + answer)
        return false
      }
  }

  // checkGuess()

  function guessResult() {
    var input = document.querySelector('#guess')
    var showResultBox = document.querySelector('.interaction')
    var showResult = document.createElement('p')
    showResult.id = 'showResult'

    showResultBox.removeChild(showResultBox.lastChild)

    if (checkGuess() === true) {
      showResult.textContent = "Great Job! " + input.value.toUpperCase() + " is in the word."
      showResultBox.appendChild(showResult)

    } else {
      showResult.textContent = "Sorry, " + input.value.toUpperCase() + " is not in the word."
      showResultBox.appendChild(showResult)

    }
  }

  // guessResult()

  function iWantToSolve() {

  }

  var button = document.querySelector('#guessButton')

  button.addEventListener('click', function () {
    checkGuess()
    guessResult()
  })

  // document.addEventListener('click', function() {
  //   clearResult()
  // })

  // function puzzleDisplayed() {
  //   if (puzzleAlreadyDisplayed.includes(randomIndex) === true) {
  //     console.log("puzzle is already displayed - true")
  //     console.log(puzzleAlreadyDisplayed)
  //     return true
  //   }
  //   else {
  //     puzzleAlreadyDisplayed.push(randomIndex)
  //     console.log("puzzle is not yet displayed - false")
  //     console.log(puzzleAlreadyDisplayed)
  //     return false
  //   }
  // }
  //
  // puzzleDisplayed()





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


  console.log('THIS WEBSITE IS RUNNING PROPERLY!')


})
