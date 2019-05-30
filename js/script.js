$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 150){
        $('.fixed-top').css('background', 'transparent');
        $('.navbar-brand').css('color', 'white','!important');
        $('.navbar-brand').css('font-size', '40px');
        $('.fixed-top').css('transition', '1s');
        $('.navbar').css('box-shadow','0px 0px rgba(0, 0, 0, 0)');
    } else{
        $('.fixed-top').css('background', 'rgba(255, 255, 255, 1)');
        $('.navbar-brand').css('color', 'black','!important');
        $('.navbar-brand').css('font-size', '24px');
        $('.navbar').css('box-shadow','0 2px 4px -1px rgba(0,0,0,0.25)');
    }
});

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    console.log(wScroll);
    
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/2.7 +'%)',
        'opacity' : '0.'+ (90-wScroll)
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)',
        'opacity' : '0.'+ (90-wScroll)
    });

});