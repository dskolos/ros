/*
 $('.btn-close').fadeOut(200);
 
 var open = false;
 $('.button a').on('click',function(){
	 if(open == false){
		 $('.overlay, .btn-close').fadeIn(200);
		 open = true; 	
		 } 
	 else {
		  $('.cd-primary-nav, .btn-close').fadeOut(200)
		  open = false; 
		  }
 });
 
 $('.cd-primary-nav').on('click', function(){
	
	 $('.cd-primary-nav, .btn-close').fadeOut(200);
	  $('.cd-primary-nav').toggleClass('open');
		 open = false;
	  });

 $('.cd-primary-nav a').on('click',function(){
			$('.cd-primary-nav').toggleClass('open');
		   $('.cd-primary-nav, .btn-close').fadeOut(200)
		  open = false;
 });
 
 $('.cd-primary-nav').click(function(){
	$(this).toggleClass('open');

});
*/


jQuery(document).ready(function($){
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MQL = 1170;

	//primary navigation slide-in effect
	if($(window).width() > MQL) {
		var headerHeight = $('.cd-header').height();
		$(window).on('scroll',
		{
	        previousTop: 0
	    }, 
	    function () {
		    var currentTop = $(window).scrollTop();
		    //check if user is scrolling up
		    if (currentTop < this.previousTop ) {
		    	//if scrolling up...
		    	if (currentTop > 0 && $('.cd-header').hasClass('is-fixed')) {
		    		$('.cd-header').addClass('is-visible');
		    	} else {
		    		$('.cd-header').removeClass('is-visible is-fixed');
		    	}
		    } else {
				
		    	//if scrolling down...
		    	$('.cd-header').removeClass('is-visible');
		    	if( currentTop > headerHeight && !$('.cd-header').hasClass('is-fixed')) $('.cd-header').addClass('is-fixed');
		    }
		    this.previousTop = currentTop;
			
		});
	}

	//open/close primary navigation
	$('.cd-primary-nav-trigger').on('click', function(){
		$('.cd-menu-icon').toggleClass('is-clicked'); 
		$('.cd-header').toggleClass('menu-is-open');
		
		
		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $('.cd-primary-nav').hasClass('is-visible') ) {
			$('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
				
				
			});
		} else {
			$('.cd-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
				
			});
		}
	});
});