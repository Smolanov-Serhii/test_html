$( document ).ready(function() {


    $('.container__mainlist').slick({
        dots: false,
        infinite: true,
        speed: 300,
        arrows: true,
        fade: true,
        slidesToShow: 1,
        prevArrow: document.querySelector('.prew-nav'),
        nextArrow: document.querySelector('.next-nav'),
        centerMode: false,
        asNavFor: '.container__items',
        variableWidth: false
    });


    $('.container__items').slick({
        infinite: false,
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.container__mainlist',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });

});





