

$('.image-pengumaman').slick({
  infinite: true,
	dots: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 3000,
	fade: true,
	fadeSpeed: 1000
});

/* ========================================== 
scrollTop() >= 300
Should be equal the the height of the header
========================================== */
var x = $('.sorot').height();
var y = x - 20;
$(window).scroll(function(){
    if ($(window).scrollTop() > y) {
        $('nav.navbar').addClass('fixed');
    }
    else {
        $('nav.navbar').removeClass('fixed');
    }
});


$('.slider-for-text').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-nav'
});

$('.slider-nav-image').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	dots: true,
	centerMode: true,
	focusOnSelect: true
});
