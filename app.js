$(document).ready(function() {
    var baseurl = 'https://pokeapi.co/api/v1/pokemon/'
    var picurl= 'https://pokeapi.co/api/v2/pokemon/'
    num = 23

    function getname(data) {
        $('.name').html(data.name.toUpperCase())
    }

    function getmoves(data) {
        for (i = 0; i < 3; i++) {
            var move = data.moves[i].move.name
            var movearray = move.split('')
            var cap = movearray[0].toUpperCase()
            movearray.shift()
            movearray.unshift(cap)
            var final = movearray.join('')
            if (i == 0) {
                $('.move').append(final)
            }
            if (i != 0) {
                $('.move').append(', ' + final)
            }
        }
    }

    function getType(data) {
        var type = data.types[0].name.split('')
        var cap = type[0].toUpperCase()
        type.shift()
        type.unshift(cap)
        var final = type.join('')
          $('.type').html(final)

    }

    function minus() {
        num = num - 1;
        call(num)
        getPic(num)
    }

    function plus() {
        num = num + 1
        call(num)
        getPic(num)
    }


    function call(num) {
        $.ajax({
            type: "GET",
            url: baseurl + num,
            dataType: "json",
            success: function(result) {

                 getname(result)
                 getType(result)
                 $('.height').html(result.height + ' Feet')
                $('.weight').html(result.weight + ' pounds')
                console.log(result)

            }
        });
    }
function getPic(num){
  $.ajax({
    type:"GET",
    url: picurl + num,
    dataType: "json",
    success: function(result){
      var pic = result.sprites.front_default
      $('.pic').html("<img src='" + pic + "'style='height: 150px; overflow:atuo'>")
      $('.move').html(' ')
      getmoves(result)
    }
  })
}
    call(num)
    getPic(num)
    $("#rightcross").click(function() {
        plus()
    });

    $("#leftcross").click(function() {
        minus()
    });

});
