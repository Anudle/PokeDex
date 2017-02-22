$( document ).ready(function() {
  var baseurl = 'http://pokeapi.co/api/v2/pokemon/'
  num = 1

  function call(num){ $.ajax({
        type: "GET",
        url: baseurl + num,
        dataType: "json",
        success: function(result){
        var pic = result.sprites.front_default
        $('.dex').html(result.name)
        $('.pic').html("<img src='"+ pic +"'>")
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
