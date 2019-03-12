$(function(){
    $(".tab_item").not(":first").hide();
    $(".tabs-wrapper .tab").click(function() {
        $(".tabs-wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    // var mixer = mixitup('.products__container');
    
    // $(".products__btn button").click(function() {
    //     $(".products__btn button").removeClass("active").eq($(this).index()).addClass("active");
		// });
		
		$(".js-range-slider").ionRangeSlider({
			type: "double",
			min: 0,
			max: 1000,
			from: 0,
			to: 600,
			grid: false,
			prefix: '$',
			hide_min_max: true
	});
    
});