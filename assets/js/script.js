$(document).ready(function() {

  var alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

  var category = ''








  $.ajax({
    url: 'products.json',
    dataType: 'json',
    type: 'get',
    cache: false,
    success:

    function(data) {
      $(data.puzzle).each(function(index,value) {
        // console.log(index + " : " + value.answer + ", " + value.category)
      })
    }

  })


  console.log('THIS WEBSITE IS RUNNING PROPERLY!')


})
