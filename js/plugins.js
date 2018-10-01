
$(document).ready(function (){

	// Nice Scroll

	$("html").niceScroll();

// Change The Time Carousel in Photo
	$('.carousel').carousel({

		interval:5000
	});

// Show Color Option When Click On The Gear

	$(".gear-check").click(function (){

		$(".color-option").fadeToggle();


	});

// Change Theme Color On Click

	// Cashing By Varible :)

	var colorLi = $(".color-option ul li");

	// Create Background-color In ' li ' Start Index in li = 0
	colorLi
		.eq(0).css("backgroundColor", "#E41B17").end()
		.eq(1).css("backgroundColor", "#17e4a3").end()
		.eq(2).css("backgroundColor", "#40e417").end()
		.eq(3).css("backgroundColor", "#17a0e4").end()
		.eq(4).css("backgroundColor", "#e4d617").end()
		.eq(5).css("backgroundColor", "#e417dc");

		// Sharch In Page For Link Attr href Contine ' theme ' And Replace The Now Attr in ' li ' If Clock In Any ' li '

colorLi.click(function (){

		$("link[href*='theme']").attr("href",$(this).attr("data-value"));

	});


// Start Scroll Top

	// Caching The Scroll Top Element
	var scrollBotton = $("#scroll-top");

	$(window).scroll(function (){

		if($(this).scrollTop() >= 4500){

			scrollBotton.show();
		}else {
			scrollBotton.hide();
		}

	});

	//Click On Button To Scroll Top
	scrollBotton.click(function (){

		$("body,html").animate({scrollTop: 0}, 600);

	});


	/* Start Scroll*/

	$(".one").click(function() {
	$('html, body').animate({
	scrollTop: $("#about").offset().top
	}, 925);
	});


	$(".two").click(function() {
	$('html, body').animate({
	scrollTop: $("#clients-say").offset().top
	}, 925);
	});


	$(".three").click(function() {
	$('html, body').animate({
	scrollTop: $("#statistic").offset().top
	}, 925);
	});

	$(".four").click(function() {
	$('html, body').animate({
	scrollTop: $("#features").offset().top
	}, 925);
	});

	$(".five").click(function() {
	$('html, body').animate({
	scrollTop: $("#prices").offset().top
	}, 925);
	});

	$(".six").click(function() {
	$('html, body').animate({
	scrollTop: $("#skills").offset().top
	}, 925);
	});

	$(".seven").click(function() {
	$('html, body').animate({
	scrollTop: $("#team").offset().top
	}, 925);
	});

	$(".eight").click(function() {
	$('html, body').animate({
	scrollTop: $("#contact").offset().top
	}, 925);
	});

	$(".teen").click(function() {
	$('html, body').animate({
	scrollTop: $("#footer").offset().top
	}, 925);
	});


	/* End Scroll*/

//Loading Screen Before Load All Elements In Site
$(window).load(function(){

		setTimeout(function(){
	        $('body').addClass('loaded');
					$("body").css("overflow", "auto");
	    }, 3000);

	});


// End jQuery Fonction
});
