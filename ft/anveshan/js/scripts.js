// JavaScript Document

//STICKEY HEADER
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});

//SMOOTH SCROLLING

	$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 60
        }, 1000);
        return false;
      }
    }
  });
});

$(window).load(function() {	
	/* Menu overlay */
	 $('.btn-close').fadeOut(200);
	 
	 var open = false;
	 $('.button a').on('click',function(){
		 if(open == false){
			 $('.overlay, .btn-close').fadeIn(200);
			 open = true; 	
			 } 
	 	 else {
			  $('.overlay, .btn-close').fadeOut(200)
			  open = false; 
		      }
	 });
	 $('.overlay').on('click', function(){
		
		 $('.overlay, .btn-close').fadeOut(200);
		  $('#nav-icon4').toggleClass('open');
			 open = false;
		  });
	
	 $('.overlay a').on('click',function(){
	 			$('#nav-icon4').toggleClass('open');
			   $('.overlay, .btn-close').fadeOut(200)
			  open = false;
	 });
	 
	 $('#nav-icon4').click(function(){
		$(this).toggleClass('open');

	});
	
});
//AMIMATION EFFECT

//paste this code under head tag or in a seperate js file.
	// Wait for window load
$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
		

            function onScrollInit( items, trigger ) {
                items.each( function() {
                var osElement = $(this),
                    osAnimationClass = osElement.attr('data-os-animation'),
                    osAnimationDelay = osElement.attr('data-os-animation-delay');
                  
                    osElement.css({
                        '-webkit-animation-delay':  osAnimationDelay,
                        '-moz-animation-delay':     osAnimationDelay,
                        'animation-delay':          osAnimationDelay
                    });

                    var osTrigger = ( trigger ) ? trigger : osElement;
                    
                    osTrigger.waypoint(function() {
                        osElement.addClass('animated').addClass(osAnimationClass);
                        },{
                            triggerOnce: true,
                            offset: '75%'
                    });
                });
            }

            onScrollInit( $('.os-animation') );
            onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') 
		
		
		
);

});