$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 410){
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