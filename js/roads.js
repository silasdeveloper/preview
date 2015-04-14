// JavaScript Document
// Roads v1.0 || ex nihilo || September 2013


// map closer
function closerUp() {

    $(".map-closer").animate({
        bottom: "15px"
    }, "slow", "swing", closerDown);

}

function closerDown() {

    $(".map-closer").animate({
        bottom: "30px"
    }, "slow", "swing", closerUp);

}

$(document).ready(function() {

    closerUp();

});


// flexslider
  $(window).load(function() {
    $('.flexslider').flexslider({
		  
		  animation: "fade",              //String: Select your animation type, "fade" or "slide"
          easing: "swing",                //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
          direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
          reverse: false,                 //{NEW} Boolean: Reverse the animation direction
          animationLoop: true,            //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
          smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode 
          startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
          slideshow: true,                //Boolean: Animate slider automatically
          slideshowSpeed: 8000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
          animationSpeed: 2000,           //Integer: Set the speed of animations, in milliseconds
          initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds
          randomize: false                //Boolean: Randomize slide order

    });
  });
  
  
// niceScroll
$(document).ready(function () {
    $("body").niceScroll({
       cursorborder: "1px solid #fff",
       cursorcolor: "#fff",
       background: "rgba(255, 255, 255, 0.1)",
       scrollspeed: "60",
       mousescrollstep: "40"
    });
});


// niceScroll || scrollbars resize
$("body").getNiceScroll().resize();
	
	
// countdown animation
$(function(){
		   
			$("ul.button").delay(7200).animate({
			   right: 0
			}, 800);
			
			$(".countdown-animation .countdown-bg").delay(6400).animate({
			   height: 120,
			   top: 0
			}, 800);
			
			$("a.close").click(function(){
			$(".countdown-animation .countdown-bg").stop().animate({
			   height: 0,
			   top: 66
			}, 300);
				
			$("ul.button a.open").stop().animate({
			   left: 0
			}, 300);
				
			$("ul.button a.close").stop().animate({
			   left: -30
			}, 300);
			});
			
			
			$("ul.button a.open").click(function(){
			$(".countdown-animation .countdown-bg").stop().animate({
			   height: 120,
			   top: 0
			}, 800);
				
			$("ul.button a.open").stop().animate({
			   left: 30
			}, 300);
				
			$("ul.button a.close").stop().animate({
			   left: 0
			}, 300);
			});

});


// function for the vertical scrolling effect
$(function() {
    $('.go-under, .go-way-under, .go-way-up').bind('click',function(event){
        var $anchor = $(this);
 
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000,'easeInOutExpo');
        /*
        if you don't want to use the easing effects:
        $('html, body').stop().animate({
           scrollTop: $($anchor.attr('href')).offset().top
        }, 1000);
        */
        event.preventDefault();
    });
});


// twitter ticker
      jQuery(function($){
        $("#ticker").tweet({
          username: "enihilo",
          page: 1,
          avatar_size: 0,
          count: 20,
          loading_text: "loading"
        }).bind("loaded", function() {
          var ul = $(this).find(".tweet_list");
          var ticker = function() {
            setTimeout(function() {
              ul.find('li:first').animate( {marginTop: '-70px'}, 500, function() {
                $(this).detach().appendTo(ul).removeAttr('style');
              });
              ticker();
            }, 8000);
          };
          ticker();
        });
      });
	  
	  
// twitter ticker settings
$(document).ready(function(){
        $(this).find(".tweet_list").list_ticker({
                speed: 8000,
                effect: 'fade' // fade, slide
        })             
})


// sti menu
$(function() {
	$('#sti-menu, #sti-menu-2, #sti-menu-3').iconmenu();
});


// site loader
            $(window).load(function() {
                $('body').css('overflow', 'hidden');
                $('.loader').fadeOut('slow');
            });


// mobile-detect
	var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };