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




//soomth scrooling
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1500);
        return false;
      }
    }
  });
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



var Conclave=(function(){
	var buArr =[],arlen;
	return {
		init:function(){
			this.addCN();this.clickReg();
		},
		addCN:function(){
			var buarr=["holder_bu_awayL2","holder_bu_awayL1","holder_bu_center","holder_bu_awayR1","holder_bu_awayR2"];
			for(var i=1;i<=buarr.length;++i){
				$("#bu"+i).removeClass().addClass(buarr[i-1]+" holder_bu");
			}
		},
		clickReg:function(){
			$(".holder_bu").each(function(){
				buArr.push($(this).attr('class'))
			});
			arlen=buArr.length;
			for(var i=0;i<arlen;++i){
				buArr[i]=buArr[i].replace(" holder_bu","")
			};
			$(".holder_bu").click(function(buid){
				var me=this,id=this.id||buid,joId=$("#"+id),joCN=joId.attr("class").replace(" holder_bu","");
				var cpos=buArr.indexOf(joCN),mpos=buArr.indexOf("holder_bu_center");
				if(cpos!=mpos){
					tomove=cpos>mpos?arlen-cpos+mpos:mpos-cpos;
					while(tomove){
						var t=buArr.shift();
						buArr.push(t);
						for(var i=1;i<=arlen;++i){
							$("#bu"+i).removeClass().addClass(buArr[i-1]+" holder_bu");
						}
						--tomove;
					}
				}
			})
		},
		auto:function(){
			for(i=1;i<=1;++i){
				$(".holder_bu").delay(4000).trigger('click',"bu"+i).delay(4000);
				console.log("called");
			}
		}
	};
})();

$(document).ready(function(){
	window['conclave']=Conclave;
	Conclave.init();
})