$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});
	
jQuery(document).ready(function() {
    jQuery('.toggle-nav').click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery('.menu ul').toggleClass('active');
        e.preventDefault();
		
    });
	jQuery('.menu ul li a').click( function(){
			 	jQuery('.toggle-nav').toggleClass('active');
				jQuery('.menu ul').toggleClass('active');				
			});
		/*$('.menu ul li a').click(function(){
  $(this).css('color','red');
  $(this).parent().siblings().find('a').css('color','white');
})*/	
});
//active menu JS
// Cache selectors
var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });
// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 1000);
  e.preventDefault();
});
// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
});
//Smooth Scrooling
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 40
        }, 1000);
        return false;
      }
    }
  });
});
$(document).ready(function() {
		$('#myRoundabout').roundabout({
			 shape: 'square',
			 minScale: 0.93, // tiny!
			 maxScale: 1, // tiny!
			 easing:'easeOutExpo',
			 clickToFocus:'true',
			 focusBearing:'0',
			 duration:800,
			 reflect:true
		});		
	}); 
	
$('.bxslider').bxSlider({
  minSlides: 1,
  maxSlides: 3,
   slideWidth: 354,
  slideMargin: 10
});

	$(document).ready(function(){
  $('.slider1').bxSlider({
  auto: true,
  autoControls: true
  });
});
$(function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 0 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      } 
    }; 
    // set effect from select menu value
	$("#button").click(function () {
    // Set the effect type
    var effect = 'slide';
    // Set the options for the effect type chosen
    var options = { direction: $('.mySelect').val() };
    // Set the duration (default: 400 milliseconds)
    var duration = 500;
    $('#effect').toggle(effect, options, duration);
});	
  });
  
$(function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
      // most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 0 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }	   
      // run the effect
    };
    // set effect from select menu value
    $("#button1").click(function () {		 
    // Set the effect type
    var effect = 'slide';
    // Set the options for the effect type chosen
    var options = { direction: $('.mySelect').val() };
    // Set the duration (default: 400 milliseconds)
    var duration = 500;
    $('#effect1').toggle(effect, options, duration);
});
  });
document.addEventListener("touchstart", function(){}, true);

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
