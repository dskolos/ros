jQuery(document).ready(function() {

					var ie = jQuery.browser.msie && parseInt(jQuery.browser.version,0)<9;
					var ie9 = jQuery.browser.msie && parseInt(jQuery.browser.version,0)==9;
					if (ie) jQuery('body').addClass("ie8");
					if (ie9) jQuery('body').addClass("ie9");

					jQuery('#color-Selector').ColorPicker({
						color: '#a8b6bd',
						onShow: function (colpkr) {
							jQuery(colpkr).fadeIn(500);
							return false;
						},
						onHide: function (colpkr) {
							jQuery(colpkr).fadeOut(500);
							return false;
						},
						onChange: function (hsb, hex, rgb) {

							jQuery('body').css('background-color', '#' + hex);
							jQuery('.bgdiv').css('background-color','#'+hex);
						}
					});


					var api=jQuery('.megafolio-container').megafoliopro(
						{
							filterChangeAnimation:"fade",			// fade, rotate, scale, rotatescale, pagetop, pagebottom,pagemiddle
							filterChangeSpeed:600,					// Speed of Transition
							filterChangeRotate:99,					// If you ue scalerotate or rotate you can set the rotation (99 = random !!)
							filterChangeScale:0.6,					// Scale Animation Endparameter
							delay:20,
							defaultWidth:980,
							paddingHorizontal:10,
							paddingVertical:10,
							layoutarray:[0]		// Defines the Layout Types which can be used in the Gallery. 2-9 or "random". You can define more than one, like {5,2,6,4} where the first items will be orderd in layout 5, the next comming items in layout 2, the next comming items in layout 6 etc... You can use also simple {9} then all item ordered in Layout 9 type.

						});

					jQuery('.megafolio-container-splash').megafoliopro(
						{
							filterChangeAnimation:"rotatescale",			// fade, rotate, scale, rotatescale, pagetop, pagebottom,pagemiddle
							filterChangeSpeed:400,					// Speed of Transition
							filterChangeRotate:99,					// If you ue scalerotate or rotate you can set the rotation (99 = random !!)
							filterChangeScale:0.6,					// Scale Animation Endparameter
							delay:20,
							defaultWidth:980,
							paddingHorizontal:10,
							paddingVertical:10,
							layoutarray:[11]		// Defines the Layout Types which can be used in the Gallery. 2-9 or "random". You can define more than one, like {5,2,6,4} where the first items will be orderd in layout 5, the next comming items in layout 2, the next comming items in layout 6 etc... You can use also simple {9} then all item ordered in Layout 9 type.
						});

					jQuery(".fancybox").fancybox();

					jQuery('.order').click(function()  {
						jQuery('.order').each(function() { jQuery(this).removeClass("selected")});
						api.megaremix(jQuery(this).data('order'));
						jQuery(this).addClass("selected");

					});



					jQuery('.animb').click(function()  {
						var speed=jQuery('#tp-speed').val();
						var rotate=jQuery('#tp-rotate').val();
						var scale=jQuery('#tp-scale').val();
						jQuery('.animb').each(function() { jQuery(this).removeClass("selected")});
						api.megaanimchange(jQuery(this).data('ant'),speed,rotate,scale);
						jQuery(this).addClass("selected");
					});

					jQuery('.filter').click(function() {
						jQuery('.filter').each(function() { jQuery(this).removeClass("selected")});
						api.megafilter(jQuery(this).data('category'));
						jQuery(this).addClass("selected");
						jQuery('body').find('ul.filter_list').slideUp(500).addClass("closed");
						jQuery('body').find('.current-filter').html(jQuery(this).text());
					});

					jQuery('.filter_list_button').click(function() {
						var ul=jQuery('body').find('ul.filter_list');
						if (ul.hasClass('closed')) {
							ul.slideDown(500);
							ul.removeClass('closed');
						} else {
							ul.slideUp(500);
							ul.addClass('closed');
						}
					});


					
				   jQuery('.addmore').click(function() {
						for (var i=0;i<Math.round(Math.random()*4+1);i++) {
							var newentry=createEntry();
							api.megaappendentry(newentry);
						}



					});



					/***********************************************
						- 	CREATE RANDOM ENTRIES FOR PREVIEW  -
					************************************************/
					function createEntry() {
						// RANDOM CATEGORIE
						var cnu = Math.round(Math.random()*5+1);
						var cat ="one";
						if (cnu==1) cat="one";
						else
						if (cnu==2) cat="two";
						else
						if (cnu==3) cat="three";
						else
						cat=="four";

						var imgsrc=Math.round(Math.random()*8+1);
						var  newentry='<div class="mega-entry  cat-'+cat+' cat-all"  id="mega-entry-'+Math.round(Math.random()*1500+1000)+'" data-src="images/p'+imgsrc+'-full.jpg" data-width="577" data-height="500">'+
							             '<div class="mega-hover">'+
    										 '<div class="mega-hovertitle">CAR VINTAGE RACING<div class="mega-hoversubtitle">CATEGORY FOUR</div></div>'+
    										 '<div class="mega-hoverlink"></div>'+
    										 '<a class="fancybox" rel="group" href="images/p'+imgsrc+'-full.jpg"><div class="mega-hoverview"></div></a>'+
										 '</div>'+
								    '</div>';

						return newentry;
					}

				});
				
$(document).ready(function(){
  $('.bxslider').bxSlider();
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});

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
                            offset: '75%'
                    });
                });
            }

            onScrollInit( $('.os-animation') );
            onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') 
		
		
		
);

});
