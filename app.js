$( document ).ready(function() {
  var baseurl = 'http://pokeapi.co/api/v2/pokemon/'
  num = 35

  function call(num){ $.ajax({
        type: "GET",
        url: baseurl + num,
        dataType: "json",
        success: function(result){
        var pic = result.sprites.front_default
        $('.name').html(result.name.toUpperCase())
        $('.pic').html("<img src='"+ pic +"'>")
        console.log(result)
      }
  });
  }

  call(num)

  function minus(){
    num = num - 1;
    call(num)
  }

  function plus(){
  num = num + 1
  call(num)
  }

  $( ".next" ).click(function() {
    plus()
  });

  $( ".back" ).click(function() {
    minus()
  });

});
