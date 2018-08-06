;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);
	var $sidebar = $('.widget-sidebar');
	var activeClass = 'active';
	
	initAccordions();

	function isMobile() {
		return $win.width() < 768;
	}
	
	/**
	 * Accordions functionality
	 * @return {[type]} [description]
	 */
	function initAccordions() {
	    var $accordions = $('.js-accordion');
	    var $accordionsMobile = $('.js-accordion-mobile');

	    var mobileLandscape = window.matchMedia( "(max-width: 767px)" );

	    if( $accordions.length === 0 ) {
	        return;
	    }

	    $accordions.each(function(){
	        var $accordion = $(this);
	        var $head = $accordion.find(' > .js-accordion-head');
	        var $body = $accordion.find(' > .js-accordion-body');

	        $head.click(function(e){
	            e.preventDefault();

	            $accordion.toggleClass('is-collapsed', $body.is(':visible')).siblings().addClass('is-collapsed').removeClass(activeClass).find('> .js-accordion-body').slideUp();
	            $accordion.toggleClass(activeClass); 
	            $body.slideToggle();

	            console.log($accordion);

	            setTimeout(function() {
	            	if ( isMobile() ) {
						$('html, body').animate({
							scrollTop: $accordion.offset().top - $('.site-banner').outerHeight() - 20
						},1000)
	            	}
	            }, 450);
	        });
	        
	    });

	}

	//Tabs

	$('.tabs__nav a').on('click', function(event) {
		event.preventDefault();
		
		var $tabLink = $(this);
		var $targetTab = $($tabLink.attr('href'));

		$tabLink
			.parent()
			.add($targetTab)
			.addClass(activeClass)
				.siblings()
				.removeClass(activeClass);

		
	});
})(jQuery, window, document);
