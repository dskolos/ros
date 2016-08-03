//animation effect(waypoint)
//paste this code under head tag or in a seperate js file.
 // Wait for window load
 $(window).load(function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");

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
  onScrollInit( $('.staggered-animation'), $('.staggered-animation-container'));
});

 $('.bxslider').bxSlider({
  minSlides: 1,
  maxSlides: 3,
  slideWidth: 350,
  slideMargin: 15
});
 
 //Smooth Scrooling
$(document).ready(function() {
    $("a[href^='#']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    $(window).scroll(function(){
         if ($(this).scrollTop() > 200) {
             $('.btn-scroll-to-top').fadeIn();
         } else {
             $('.btn-scroll-to-top').fadeOut();
         }
    });
});