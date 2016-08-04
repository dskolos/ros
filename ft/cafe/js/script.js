// JavaScript Document

$(document).ready(function(){
  $('.bxslider').bxSlider();
});
$(document).ready(function(){
  $('.slider1').bxSlider({
    slideWidth: 2000,
    minSlides: 1,
    maxSlides: 1,
    slideMargin: 0
  });
});

$('#clickme').click(function() {
    var $slider = $('.inside-map');
    $slider.animate({
      left: parseInt($slider.css('left'),10) == -1800 ?
       0 : -1800
    });
  });
  
  $(window).scroll(function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();


  if (scroll >= 200) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
  
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
