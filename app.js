var baseurl = 'http://pokeapi.co/api/v2/pokemon/'
num = 2

function plus(){
  num + 1;
}

plus()
  $.ajax({
      type: "GET",
      url: baseurl + num,
      dataType: "json",
      success: function(result){
            pokemon = result
      console.log(pokemon)

    }
});
