

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
$(window).scroll(function(){
    if ($(window).scrollTop() > 300) {
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




(function(){
    // Slide In Panel - by CodyHouse.co
	var panelTriggers = document.getElementsByClassName('js-cd-panel-trigger');
	if( panelTriggers.length > 0 ) {
		for(var i = 0; i < panelTriggers.length; i++) {
			(function(i){
				var panelClass = 'js-cd-panel-'+panelTriggers[i].getAttribute('data-panel');
				var panels = document.getElementsByClassName(panelClass)[0];
				// open panel when clicking on trigger btn
				panelTriggers[i].addEventListener('click', function(event){
					event.preventDefault();
					addClass(panels, 'show');
				});
				//close panel when clicking on 'x' or outside the panel
				panels.addEventListener('click', function(event){
					console.log("hello")
					if( hasClass(event.target, 'js-cd-close') || hasClass(event.target, panelClass)) {
						event.preventDefault();
						removeClass(panels, 'show');
					}
				});
			})(i);
		}
	}
	
	//class manipulations - needed if classList is not supported
	//https://jaketrent.com/post/addremove-classes-raw-javascript/
	function hasClass(el, className) {
	  	if (el.classList) return el.classList.contains(className);
	  	else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
	}
	function addClass(el, className) {
	 	if (el.classList) el.classList.add(className);
	 	else if (!hasClass(el, className)) el.className += " " + className;
	}
	function removeClass(el, className) {
	  	if (el.classList) el.classList.remove(className);
	  	else if (hasClass(el, className)) {
	    	var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
	    	el.className=el.className.replace(reg, ' ');
	  	}
	}
})();


$('.slider-news').slick({
	dots: false,
	infinite: false,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 4,
	centerMode: false,
	variableWidth: true,
	arrows: false,
	onAfterChange: function(slide, index){
		if($('.slick-slide:nth-last-child(1)')){
			$('.pages .slider').slickPause();
		}
	}
  });

  $('.sorot-image').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.sorot-title',
	dots: true,
  });
  
  $('.sorot-title').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.sorot-image',
	dots: false,
	centerMode: true,
	focusOnSelect: true,
	fade: true,
	arrows: false,
  });
		  