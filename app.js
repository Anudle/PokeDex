var baseurl = 'http://pokeapi.co/api/v2/pokemon/'
num = 33

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

function plus(){
num = num + 1
call(num)
}

plus()
