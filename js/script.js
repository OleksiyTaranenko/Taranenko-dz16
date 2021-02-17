$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        nav: true,
        dots: false,
        items: 5,
        loop: true,
        margin: 35,
        navText : ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        autoplaySpeed: 1000,
        responsiveClass: true,        
        responsive:{
            400:{
                items:2,
                nav:true
            },            
            800:{
                items:3,
                nav:true
            },
            1000:{
                items:5,
                nav:true                
            }            
        }      
    });
});