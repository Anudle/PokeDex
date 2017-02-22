var baseurl = 'http://pokeapi.co/api/v2/pokemon/'
num = 1

function call(num){ $.ajax({
      type: "GET",
      url: baseurl + num,
      dataType: "json",
      success: function(result){
      console.log(result)
    }
});
}

function plus(){
num = num + 1
call(num)
}

plus()
