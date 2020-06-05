$(document).ready(function () {
    $(".news__slider").slick({
        dots: true,
        infinite: true,
        variableWidth: true,
        arrows: false,
        centerMode: true,
        autoplay: false,
        autoplaySpeed: 1000,

    });

    $(".arrowprev").click(function () {
        $(".news__slider").slick("slickPrev");
    });
    $(".arrownext").click(function () {
        $(".news__slider").slick("slickNext");
    })
});

$(document).ready(function () {
    $(".section1__slider").slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,

    });
});







$(document).ready(function () {
    $(".section4__card").magnificPopup({
        type: "image",
        removalDelay: 300,
        mainClass: 'mfp-fade',
    });
});





$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });







