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

 $(document).ready(function() {
jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    });
});

 $(window).scroll(function() {
       $('.topnav').removeClass("responsive");
        if ($(this).scrollTop() > 1){  
          $('#sticky').addClass("sticky1");
        }
        else{
          $('#sticky').removeClass("sticky1");
        }
      });

 $(document).ready(function() {
    $('.accordion').accordion({
      defaultOpen: 'section1',
      speed: 'slow'
    }); //some_id section1 in demo 
    $('.bxslider').bxSlider();
  });