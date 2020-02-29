(function($){
	// Preloader
	$(window).on("load", function(){
		$(".preloader").fadeOut();
	});

	$(document).ready(function(){	
		// Sticky Navigation
		$(window).scroll(function(){
			var scrollHeight = $(document).scrollTop();
			if(scrollHeight > 100){
				$('.navbar').addClass('nav-fixed');
			}else{
				$('.navbar').removeClass('nav-fixed');
			}
		});

		// Home Slider
		$('.home-slider').owlCarousel({
			'items' : 1,
			'nav' : true,
			'dots' : false,
			'mouseDrag' : false,
			'autoplay' : true,
			'loop' : true,
			'navText' : ['<i class="icofont-rounded-left"></i>', '<i class="icofont-rounded-right"></i>'],
			'animateIn' : 'fadeIn',
			'animateOut' : 'fadeOut'
		});

		$(".home-slider").on("translate.owl.carousel", function(){
			$(".slide h1, .slide p").removeClass("animated fadeInUp").css("opacity", "0");
			$(".slide .slide-btn").removeClass("animated fadeInDown").css("opacity", "0");
	    });

	    $(".home-slider").on("translated.owl.carousel", function(){
			$(".slide h1, .slide p").addClass("animated fadeInUp").css("opacity", "1");
			$(".slide .slide-btn").addClass("animated fadeInDown").css("opacity", "1");
	    });
	    $('.partnar-slider').owlCarousel({
	    	'items' : 5,
	    	'margin' : 50,
	    	'loop' : true,
	    	'autoplay' : true
	    });
	    // Mixitup Plugin Integration
		var mixer = mixitup('.project-items');

	});
}(jQuery))