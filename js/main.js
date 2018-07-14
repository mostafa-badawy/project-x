$(document).ready(function(){
    $('.slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 4,
        responsive: [
        {
            breakpoint: 768,
            settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 4
            }
        },
        {
            breakpoint: 480,
            settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
            }
        }
        ]
    });
});