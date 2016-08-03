$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
});

$(document).ready(function(){
	
	
		
	
	/* Menu overlay */
	 $('.btn-close').fadeOut(200);
	 
	 var open = false;
	 $('.button a').on('click',function(){
		 if(open == false){
			 $('.overlay, .btn-close').fadeIn(200);
			 open = true; 
   		   		 $('.logo a').css('background','url(images/logo.png) no-repeat center left');
			 } 
	 	 else {
			  $('.overlay, .btn-close').fadeOut(200)
			  open = false;
			   $('.logo a').css('background','url(images/logo.png) no-repeat center left');
		      }
	 });
	 $('.overlay').on('click', function(){
		 $('.logo a').css('background','url(images/logo.png) no-repeat 0 0');
		 $('.overlay, .btn-close').fadeOut(200);
		  $('#nav-icon4').toggleClass('open');
		   
			 open = false;
		  });
	
	 $('.overlay a').on('click',function(){
	 			$('#nav-icon4').toggleClass('open');
			   $('.overlay, .btn-close').fadeOut(200)
			  open = false;
			  $('.logo a').css('background','url(images/logo.png) no-repeat 0 0');
			
	 });
	 
	 $('#nav-icon4').click(function(){
		$(this).toggleClass('open');

	});
	
	/* Justified Gallery*/
	$('#fe_gallery').justifiedGallery({
    rowHeight : 200,
    lastRow : 'nojustify',
	captionSettings : { // ignored with css animations
        animationDuration : 500,
        visibleOpacity : 1, 
        nonVisibleOpacity : 0.0 
      }, 
    margins : 0
	});
	
	/* Flex Slider*/
	 $('.flexslider').flexslider({
    animation: "slide",
	 directionNav: false
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

//paste this code under head tag or in a seperate js file.
	// Wait for window load
$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
		
		$('.wp1').waypoint(function() {
			$('.wp1').addClass('animated bounce');
		}, {
			offset: '75%'
		});
		
		
	 $('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
		 $('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	
	 $('.wp6').waypoint(function() {
		$('.wp6').addClass('animated tada');
	}, {
		offset: '75%'
	});
		
		$('.wp9').waypoint(function() {
			$('.wp9').addClass('animated fadeInDown');
		}, {
			offset: '75%'
		});
		
		$('.wptl1').waypoint(function() {
			$('.wptl1').addClass('animated fadeIn');
		}, {
			offset: '75%'
		});
		$('.wptl2').waypoint(function() {
			$('.wptl2').addClass('animated fadeIn');
		}, {
			offset: '75%'
		});
		$('.wptl3').waypoint(function() {
			$('.wptl3').addClass('animated fadeIn');
		}, {
			offset: '75%'
		});
		$('.wptl4').waypoint(function() {
			$('.wptl4').addClass('animated fadeIn');
		}, {
			offset: '75%'
		});
		$('.wptl5').waypoint(function() {
			$('.wptl5').addClass('animated fadeIn');
		}, {
			offset: '75%'
		});
		
		
});
	
	
	