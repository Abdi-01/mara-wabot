$('.venue-content').slick({
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

$(".filter-button").click(function () {
    var value = $(this).attr('data-filter');

    if (value == "all") {

        $('.filter').show('1000');
    } else {

        $(".filter").not('.' + value).hide('3000');
        $('.filter').filter('.' + value).show('3000');

    }


    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

});
