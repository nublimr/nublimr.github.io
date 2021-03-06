AOS.init();
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 500){
        $('.fixed-top').css({'background': 'transparent'});
        $('.navbar').css('box-shadow','0px 0px rgba(0, 0, 0, 0)');
        $('.navbar-brand, .nav-item').css({'color' : 'white','text-shadow' : '1px 1px 10px #000'});
        $('.active').css({'color' : '#90CAF9'});
        $('.fixed-top').css('transition', '.7s');
    } else{
        $('.fixed-top').css({'background' : 'rgba(255, 255, 255, 1)'});
        $('.navbar').css('box-shadow','0 2px 4px -1px rgba(0,0,0,0.25)');
        $('.navbar-brand, .nav-item').css({'color': 'black','text-shadow': 'unset'});
        $('.active').css({'color' : '#64B5F6'});
    }
});

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    $('#particles-js img').css({
        'transform' : 'translate(0px, '+ wScroll/.5 +'%)',
        'opacity' : 1-(wScroll/350),
        '-webkit-transform' : 'translate(0px, '+ wScroll/.5 +'%)',
        '-moz-transform' : 'translate(0px, '+ wScroll/.5 +'%)',
        '-ms-transform' : 'translate(0px, '+ wScroll/.5 +'%)',
        '-o-transform' : 'translate(0px, '+ wScroll/.5 +'%)'
    });

    $('#particles-js h1').css({
        'transform' : 'translate(0px, '+ wScroll/.5 +'%)',
        'opacity' : 1-(wScroll/350),
        '-webkit-transform' : 'translate(0px, '+ wScroll/.5 +'%)',
        '-moz-transform' : 'translate(0px, '+ wScroll/.5 +'%)',
        '-ms-transform' : 'translate(0px, '+ wScroll/.5 +'%)',
        '-o-transform' : 'translate(0px, '+ wScroll/.5 +'%)'
    });

    $('#particles-js p').css({
        'transform' : 'translate(0px, '+ wScroll/.25 +'%)',
        'opacity' : 1-(wScroll/350),
        '-webkit-transform' : 'translate(0px, '+ wScroll/.25 +'%)',
        '-moz-transform' : 'translate(0px, '+ wScroll/.25 +'%)',
        '-ms-transform' : 'translate(0px, '+ wScroll/.25 +'%)',
        '-o-transform' : 'translate(0px, '+ wScroll/.25 +'%)'
    });

    $('#particles-js button').css({
        'transform' : 'translate(0px, '+ wScroll/.4 +'%)',
        'opacity' : 1-(wScroll/350),
        '-webkit-transform' : 'translate(0px, '+ wScroll/.4 +'%)',
        '-moz-transform' : 'translate(0px, '+ wScroll/.4 +'%)',
        '-ms-transform' : 'translate(0px, '+ wScroll/.4 +'%)',
        '-o-transform' : 'translate(0px, '+ wScroll/.4 +'%)'
    });
});

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top-30
        }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    } // End if

    // event.preventDefault();

    });
  });

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})