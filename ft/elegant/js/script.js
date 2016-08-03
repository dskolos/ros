// JavaScript Document
// Menu active Js
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
		
		$('body').removeClass('has-active-menu');
    $('#o-wrapper').removeClass('has-slide-right');
    $('#c-menu--slide-right').removeClass('is-active');
    $('#c-mask').removeClass('is-active');
	
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
		
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 1000, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#topmenu ul li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#topmenu ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}


// Progress Bar JS
jQuery(document).ready(function () {  
jQuery('.skills li').each(function () {  
    jQuery(this).appear(function() {  
      jQuery(this).animate({opacity:1,left:"0px"},800);  
      var b = jQuery(this).find(".progress-bar").attr("data-width");  
      jQuery(this).find(".progress-bar").animate({  
        width: b + "%"  
      }, 1300, "linear");  
    });   
});   

    });  
   jQuery(document).ready(function(){  
jQuery('.skillbar').each(function(){  
    jQuery(this).appear(function() {  
        jQuery(this).find('.skillbar-bar').animate({  
            width:jQuery(this).attr('data-percent')  
        },5000);  
    });  
});  
    });
	

//Progress Bar JS
 $(document).ready(function() {
jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    });
});

//STICKY Menu Js
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});

//SIde BAr MEnu JS
/**
   * Slide right instantiation and action.
   */
  var slideRight = new Menu({
    wrapper: '#o-wrapper',
    type: 'slide-right',
    menuOpenerClass: '.c-button',
    maskId: '#c-mask'
  });

  var slideRightBtn = document.querySelector('#c-button--slide-right');
  
  slideRightBtn.addEventListener('click', function(e) {
    e.preventDefault;
    slideRight.open();
  });
  
//POrtfolio Js
$(function () {
		
		var filterList = {
		
			init: function () {
			
				// MixItUp plugin
				// http://mixitup.io
				$('#portfoliolist').mixitup({
					targetSelector: '.portfolio',
					filterSelector: '.filter',
					effects: ['fade'],
					easing: 'snap',
					// call the hover effect
					onMixEnd: filterList.hoverEffect()
				});				
			
			},
			
			hoverEffect: function () {
			
				// Simple parallax effect
								
			
			}

		};
		
		// Run the show!
		filterList.init();
		
		
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

//BXSLIDER Js
$('.bxslider').bxSlider({
  minSlides: 1,
  maxSlides: 3,
  slideWidth: 380,
  slideMargin: 15
});


