$( document ).ready(function() {

    $('.popup-galleria').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">La imagen %curr%</a> no se encuentra.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});

        $('.image-link').magnificPopup({type:'image'});
     
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
    $('.buy').click(function(){
        $('.bottom').addClass("clicked");
      });
      
      $('.remove').click(function(){
        $('.bottom').removeClass("clicked");
      });