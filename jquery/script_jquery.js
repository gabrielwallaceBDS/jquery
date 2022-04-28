//$(document).ready(function(){
// $(function(){
//         $('button').click(function(){
//             $('h1').hide();
//         });
// });

// $(function(){
//     $('button').click(function(){
//         //$('h1').css("color", "red" );
//         $('#unico').css("color", "red" );
//     });
// });

// $(function(){
//     $('#azul').click(function(){
//         $('p').css("color", "blue" );
//         $('p').css("background-color", "aqua" );
//         //$('p').hide();
//         $('p').fadeOut();
//         $('p').delay(1000);
//         $('p').fadeIn();
//     });
//     $('#vermelho').click(function(){
//         $('p').css("color", "red" );
//         $('p').css("background-color", "red" );
//         $('p').fadeOut();
//         $('p').delay(1000);
//         $('p').fadeIn('slow');
//     });
// });

// $(function(){
//     $('#azul').click(function(){
//         $('p').css("color", "blue" );
//         $('p').css("background-color", "aqua" );
//         //$('p').hide();
//         $('p').fadeOut();
//         $('p').delay(1000);
//         $('p').fadeIn();
//     });
//     $('#vermelho').click(function(){
//         $('p').css("color", "red" );
//         $('p').css("background-color", "red" );
//         $('p').fadeOut('fast');
//         $('p').fadeIn(5000);
//         $('p').fadeIn('fast');
//     });
// });

// $(function(){
//     $('#azul').click(function(){
//         $('p').css("color", "blue" );
//         $('p').css("background-color", "aqua" );
//         //$('p').hide();
//         $('p').fadeOut();
//         $('p').delay(1000);
//         $('p').fadeIn();
//     });
//     $('#vermelho').click(function(){
//         $('p').css("color", "red" );
//         $('#mensagem').text("cor alterada com sucesso");
//         $('#mensagem').css('color','red');
//         $('#mensagem').css('border','1px solid red');
//         $('#mensagem').delay(3000);
//         $('#mensagem').fadeOut('fast');

//     });
// });

// $(function(){
//     $('#azul').click(function(){
//         $('p').css("color", "blue" );
//         $('p').css("background-color", "aqua" );
//         //$('p').hide();
//         $('p').fadeOut();
//         $('p').delay(1000);
//         $('p').fadeIn();
//     });
//     $('#vermelho').click(function(){
//         $('p').css("color", "red" );
//         $('#mensagem').text("cor alterada com sucesso")
//             .css('color','red')
//             .css('border','1px solid red')
//             .delay(3000)
//             .fadeOut('fast');
//     });
// });

// $(function(){
//     $('#azul').click(function(){
//         $('p').css("color", "blue" );
//         $('p').css("background-color", "aqua" );
//         //$('p').hide();
//         $('p').fadeOut();
//         $('p').delay(1000);
//         $('p').fadeIn();
//     });
//     $('#vermelho').click(function(){
//         $('p').css("color", "red" );
//         $('#mensagem').text("cor alterada com sucesso")
//             .css({color:'red', border:'1px solid red', backgroundColor:'#F08080'})
//             .delay(3000)
//             .fadeOut('fast');
//     });
// });

// $(function(){
//     $('#azul').click(function(){
//         $('p').css("color", "blue" );
//         $('p').css("background-color", "aqua" );
//         //$('p').hide();
//         $('p').fadeOut();
//         $('p').delay(1000);
//         $('p').fadeIn();
//     });
//     $('#vermelho').click(function(){
//         $('p').css("color", "red" );
//         $('#mensagem')
//             .text("cor alterada com sucesso")
//             .css({color:'red', border:'1px solid red'})
//             .delay(3000)
//             .addClass('green')
//         $('button').removeClass('red');
//     });
// });

$(function(){
    $('#l1').click(function(){
        $('#i1').show();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').hide();
    });
    $('#l2').click(function(){
        $('#i1').hide();
        $('#i2').show();
        $('#i3').hide();
        $('#i4').hide();
    });
    $('#l3').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').show();
        $('#i4').hide();
    });
    $('#l4').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').show();
    });
});