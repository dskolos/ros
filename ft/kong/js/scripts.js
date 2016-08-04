$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
});

 $(".progress-bar").loading();
	  $('input').on('click', function () {
		   $(".progress-bar").loading();
	  });
	  
	  $(window).load(function(){
      $('.flexslider').flexslider({
        animation: "slide",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
    });
	
	
	jQuery(document).ready(function($){
  $('.isotope').isotope({
    itemSelector : '.isotope-item',
    resizable: true,
    resizesContainer: true
  });

  $('#isotope-filter a').click(function(){
    $('#isotope-filter a').removeClass('active');
    $(this).addClass('active');
    var selector = $(this).attr('data-filter');
    $('.isotope').isotope({ filter: selector });
    return false;
  });

  $('.toggle-sidebar').click(function(){
    $('body').toggleClass('sidebar-open');
  });
});
	

$(document).ready(function(){

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
	

	 /* Smooth Scrolling*/
	 $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
	
});	

	
	//animation effect(waypoint)
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
                            offset: '90%'
                    });
                });
            }

            onScrollInit( $('.os-animation') );
            onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') 
  
  
  
);
});
