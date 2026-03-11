$("#preamble-btn-1").click(function(){
   
    $("#preamble-btn-2").css({
        "background":"blue",
        "font-size":"20px",
        
    })

})




$(document).scroll(function(){

    let distance = $(document).scrollTop()
    let height = $(document).height()-$(window).height();
    let ratio = distance/height;

    $(".header-right").html(ratio)

    $("h1").css({
        "transform":"rotate("+ (720 * ratio) +"deg)"
    })
})

/*
1. when you click on the title element
2. toggle the class "active" on the #menu element
*/

$(".album-thumbs").flickity({
    wrapAround: true
})

/* 

1. remove the dots!
2. make the whole thing fade!

*/
