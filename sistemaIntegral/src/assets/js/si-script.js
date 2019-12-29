$( document ).ready(function() {
   //Hamburguer
    var pull 		= $('#pull');
        menu 		= $('nav ul');
        menuHeight	= menu.height();
    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function(){
        var w = $(window).width();
        if(w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
    $('.content-sitioweb').ripples({
        resolution: 512,
        dropRadius: 10, //px
        perturbance: 0.002,
      });
 //End Hamburguer
  $(".scroll").on('click',function(event){		
            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
        });
        $().UItoTop({ easingType: 'easeOutQuart' });

        new WOW().init();
    });
