$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('.service-content').slick({
    autoplay: false,
    slidesToShow: 4,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('.slider-footer').slick({
    autoplay: true,
    slidesToShow: 4,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});
