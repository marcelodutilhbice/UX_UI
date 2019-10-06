$(document).ready(function(){
    $("a").attr("target", "_blank");



    $( "ul li:nth-child(1) a" ).prepend( '<i class="fab fa-facebook-f"></i>' );
    $( "ul li:nth-child(2) a" ).prepend( '<i class="fab fa-instagram"></i>' );
    $( "ul li:nth-child(3) a" ).prepend( '<i class="fab fa-twitter"></i>' );
    $( "ul li:nth-child(4) a" ).prepend( '<i class="fab fa-pinterest"></i>' );

    $( "h2" ).click(function() {
        $(this).css("color", "red");
    }); 

    $("body section:nth-child(3) li:nth-child(4)").append('<ul><li><a href="#">link 4.a</a></li></ul>');
    $("body section:nth-child(3) li:nth-child(4)").after('<li><a href="#">link 5</a></li>')

    

});

