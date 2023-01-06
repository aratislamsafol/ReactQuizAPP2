// owl Carousel
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        margin:10,
        nav:true,
        navText: [$('.am-next'),$('.am-prev')],
        responsive:{
            0:{
                items:1
            },
            
            600:{
                items:2
            },
            780:{
                items:2
            },
            1000:{
                items:3
            }
        }
        })
});


// SHadow
$(window).scroll(function() {
    if ($(window).scrollTop() > 10) {
        $('#navBar').addClass('floatingNav');
    } else {
        $('#navBar').removeClass('floatingNav');
    }
});
