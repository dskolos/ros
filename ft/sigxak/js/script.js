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
  onScrollInit( $('.staggered-animation'), $('.staggered-animation-container')  


    );
});

 $(document).ready(function() {
  // $(window).scroll(function () {     
  //   console.log($(window).scrollTop())
  //   if ($(window).scrollTop() > 870) {
  //     $('#nav_bar').addClass('navbar-fixed');
  //   }
  //   if ($(window).scrollTop() < 871) {
  //     $('#nav_bar').removeClass('navbar-fixed');
  //   }
  // });
  $(function() {
    var wH = $(window).height(),
        top;
    $("#home").css("height", wH);
    $(window).scroll(function(){
        top = jQuery(window).scrollTop();
        if(top>wH) // height of float header
            $('#nav_bar').addClass('navbar-fixed');
        else
           $('#nav_bar').removeClass('navbar-fixed');
     });
});
});

$(document).ready(function () {
    $(document).on("scroll", onScroll);    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
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
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#nav_bar a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#nav_bar ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}


 $(function () {   
  var filterList = {
    init: function () {

        $('#portfoliolist').mixitup({
          targetSelector: '.portfolio',
          filterSelector: '.filter',
          effects: ['scale'],
          easing: 'smooth',
          // call the hover effect
          onMixEnd: filterList.hoverEffect()
        });   
      },      
      hoverEffect: function () {
      }
    };
    // Run the show!
    filterList.init();  
  }); 