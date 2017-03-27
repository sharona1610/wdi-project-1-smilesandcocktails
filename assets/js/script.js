$(document).ready(function() {

  var alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

  var puzzle =
    [
    {answer: "BUN", category: "FOOD"} ,
    {answer: "CAKE", category:"FOOD"},
    {answer: "PUFF", category:"FOOD"},
    ]

  // var answer = ['PIZZA', 'PASSIONFRUITS', 'CHEESEBURGERS', 'BLACKBERRIES', 'GINGERBREAD', 'POMEGRANATE', 'QUESADILLAS', 'LEMONGRASS', 'PISTACHIOS', 'WATERMELON']

  var puzzleAlreadyDisplayed = []

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

    console.log("the answer length is : " + answer.length)

    for(var i = 0; i = answer.length; i++) {
      var letterOfWordBox = document.createElement('div')
      letterOfWordBox.id = 'letter'
      display.appendChild(letterOfWordBox)
    }


    console.log(answer, category)
  }

  // displayPuzzle()

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
