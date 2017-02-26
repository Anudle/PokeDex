$(document).ready(function() {
    var baseurl = 'http://pokeapi.co/api/v2/pokemon/'
    num =99

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
                $('.move').append('Moves: ' + final)
            }
            if (i != 0) {
                $('.move').append(', ' + final)
            }
        }
    }

    function getType(data) {
        var type = data.types[0].type.name.split('')
        var cap = type[0].toUpperCase()
        type.shift()
        type.unshift(cap)
        var final = type.join('')
          $('.type').html(final)

    }

    function minus() {
        num = num - 1;
        call(num)
    }

    function plus() {
        num = num + 1
        call(num)
    }


    function call(num) {
        $.ajax({
            type: "GET",
            url: baseurl + num,
            dataType: "json",
            success: function(result) {
                $('.move').html(' ')
                getname(result)
                getmoves(result)
                getType(result)
                var pic = result.sprites.front_default
                $('.pic').html("<img src='" + pic + "'style='height: 150px; overflow:atuo'>")
                $('.height').html(result.height + ' inches')
                $('.weight').html(result.weight + ' pounds')
                console.log(result)
                getType(result)
            }
        });
    }

    call(num)

    $("#rightcross").click(function() {
        plus()
    });

    $("#leftcross").click(function() {
        minus()
    });

});
