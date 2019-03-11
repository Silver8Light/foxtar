$(function(){

    var mixer = mixitup('.products__container');
    
    $(".products__btn button").click(function() {
        $(".products__btn button").removeClass("active").eq($(this).index()).addClass("active");
    });
    
});