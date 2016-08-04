// JavaScript Document

//Stickey

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
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
        scrollTop: target.offset().top -100
      }, 1000);
      return false;
      }
    }
 });
});



// NAVIGATION MENU 

$(document).ready(function () {
	"use strict";
	var myNav = {
		init: function () {
			this.cacheDOM();
			this.browserWidth();
			this.bindEvents();
		},
		cacheDOM: function () {
			this.navBars = $(".navBars");
			this.toggle = $("#toggle");
			this.navMenu = $("#menu");
		},
		browserWidth: function () {
			$(window).resize(this.bindEvents.bind(this));
		},
		bindEvents: function () {
			var width = window.innerWidth;

			if (width < 960) {
				this.navBars.click(this.animate.bind(this));
				this.navMenu.hide();
				this.toggle[0].checked = false;
			} else {
				this.resetNav();
			}
		},
		animate: function (e) {
			var checkbox = this.toggle[0];

			if (!checkbox.checked) {
				this.navMenu.slideDown();
			} else {
				this.navMenu.slideUp();
			}

		},
		resetNav: function () {
			this.navMenu.show();
		}
	};
	myNav.init();
});




// JavaScript Document
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

