$(function () {
	
		// var mixer = mixitup('.products__container');
    
    // $(".products__btn button").click(function() {
    //     $(".products__btn button").removeClass("active").eq($(this).index()).addClass("active");
    // });

    //   $('.slaider__inner').slick({
    //     arrows: false,
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     responsive: [{
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 3,
    //           slidesToScroll: 3,
    //           infinite: true,
    //           dots: true
    //         }
    //       },
    //       {
    //         breakpoint: 600,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 2
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1
    //         }
    //       }

    //     ]
		// 	});
			
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

		$('.upload__form input[type="file"], .upload__form select').styler();

});