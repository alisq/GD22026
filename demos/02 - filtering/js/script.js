$(".filters button").click(function(){
    f = $(this).data("year");
    $(f).fadeToggle(500);
})