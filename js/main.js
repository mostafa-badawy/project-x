$(document).ready(function(){
    $('.slider').slick({
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 4,
        responsive: [
        {
            breakpoint: 1200,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
            }
        }
        ]
    });
    $('.ui.rating').rating({
        initialRating: 4,
        maxRating: 5,
    });
    $('.ui.rating')
    .rating('disable')
    ;
});

