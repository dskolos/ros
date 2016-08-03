// JavaScript Document

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});

$(document).ready(function(){

	//menu items show/hide animation
	var block;
	block = false;

	$(document).on( 'click', '#sitcky_menu', function(event){
		event.preventDefault();
		var header_pos;

		 if($(this).hasClass('hero_nav')){
			header_pos = 'hero_header';
		}

		if(!$(this).hasClass('active')){
			$(this).addClass('active');
			show_nav_menu(header_pos);
			block = false;
		}else{
			$(this).removeClass('active');
			block = true;
			hide_nav_menu(header_pos);
		}
		
	});

	//function to show/animate the nav menu elements
	var timer;
	function show_nav_menu(selector){
		var count_li = $('header.' + selector + ' nav ul li').length - 1;	
		
		$('header.' + selector + ' nav ul li').each(function(i) {

			timer = setTimeout(function(){

				if(!block){		
					i = count_li - i;
					$('header.' + selector + ' nav ul li').eq(i).fadeIn(300).animate({marginTop : '0'}, {duration :300,queue:false});
				}else{
					clearTimeout(timer);
					$('header.' + selector + ' nav ul li').hide();
					block = true;
				}

			}, 200*i);		
			
		});			
			
	}

	//function to hide the nav menu
	function hide_nav_menu(selector){	
		$('header.' + selector + ' nav ul li').stop().fadeOut(300,function(){
			$(this).css({marginTop : '-10px;'});
		});
	}


});



/*
	@author Arunkumar Maha for 2my4edge.com
*/
; (function(){

jQuery('document').ready(function() {
	function filter_portfolio() {
		var script = jQuery('#selectFieldscript').val();
		//var dynamic = jQuery('#selectFielddynamic').val();
		//var code = jQuery('#selectFieldcode').val();
		var target = '';
		
		if(script != 'all-sort') { target += '.' + script; }
		//if(dynamic != 'all-sort') { target += '.' + dynamic; }
		//if(code != 'all-sort') { target += '.' + code; }
		if(target == '') target = '.all-sort';
		var $items_container = jQuery("#portfolio-container");		
		$items_container.isotope({
			itemSelector : ".portfolio",
			layoutMode: "masonry",
			filter: target
		});
	}
	jQuery('#selectFieldscript').on('change', function() {
		filter_portfolio();
	});
});	
})();






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
