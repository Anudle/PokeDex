$(document).ready(function() {
    var baseurl = 'http://pokeapi.co/api/v2/pokemon/'
    num = 99
function getname(data){
  $('.name').html(data.name.toUpperCase())
}
function getmoves(data){
  for (i = 0; i < 3; i++) {
      var move = data.moves[i].move.name
      var movearray = move.split('')
      var cap = movearray[0].toUpperCase()
      movearray.shift()
      movearray.unshift(cap)
      var final = movearray.join('')
      if (i != 2) {
          $('.move').append(final + ', ')
      }
      if (i == 2){
          $('.move').append(final)
        }
    }
}


    function call(num) {
        $.ajax({
            type: "GET",
            url: baseurl + num,
            dataType: "json",
            success: function(result) {
              getmoves(result)
                var pic = result.sprites.front_default
                getname(result)
                $('.pic').html("<img src='" + pic + "'>")
                $('.weight').html('weight: ' + result.weight + ' pounds')
                console.log(result)

            }
        });
    }




    call(num)

    function minus() {
        num = num - 1;
        call(num)
    }

    function plus() {
        num = num + 1
        call(num)
    }

    $(".next").click(function() {
        plus()
    });

    $(".back").click(function() {
        minus()
    });

});
