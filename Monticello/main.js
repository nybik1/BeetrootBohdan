////show&close menu
$('.header__burger').click(function () {
    $('.header__menu').toggleClass('header__menu-tooggler')
});

/// close menu when click on anchor
let menu = document.querySelector('.header__menu');
menu.addEventListener('click', (event) => {
    menu.classList.add('header__menu-tooggler')
});


//slick slider
$(document).ready(function () {
    $(".news__slider").slick({
        dots: true,
        infinite: true,
        variableWidth: true,
        arrows: false,
        centerMode: false,
        autoplay: false,
        autoplaySpeed: 1000,
        slidesToShow: 3,
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 1340,
                settings: {
                    dots: false,
                }

            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }

            }

        ]

    });

    $(".arrowprev").click(function () {
        $(".news__slider").slick("slickPrev");
    });
    $(".arrownext").click(function () {
        $(".news__slider").slick("slickNext");
    })
});
//slick slider header
$(document).ready(function () {
    $(".section1__slider").slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,

    });
});



/// Popup plugin
$(document).ready(function () {
    $(".section4__card").magnificPopup({
        type: "image",
        removalDelay: 300,
        mainClass: 'mfp-fade',
    });
});

////add&remove active status on link
$(".header__menu a[href^=#], .section1__scrollDown a").on('click', function (event) {
    event.preventDefault();

    $('.header__menu .link.active').removeClass('active');
    $(this).children('.link').addClass('active');

    const target = $($(this).attr('href'));
    $('html,body').animate({ scrollTop: $(target).offset().top }, 'slow');
});

//// reduce call time
function handleScroll(selector, scrollTop) {
    const $selector = $(selector);
    const top = $selector.offset().top - 100;

    if (top <= scrollTop && $selector.height() + top >= scrollTop) {
        $('.header__menu .link.active').removeClass('active');
        $(`[href="${selector}"]`).children('.link').addClass('active');
    }
}

function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

$(document).on('scroll', debounce(function (e) {
    const scrollTop = $(this).scrollTop();
    if (scrollTop > 10) {
        $('.header').addClass('')
    }
    handleScroll('#about', scrollTop);
    handleScroll('#projects', scrollTop);
    handleScroll('#news', scrollTop);
    handleScroll('#get', scrollTop);
}, 200));


//// Sticky menu
let menuPosition = 1;
$(window).scroll(function () {
    let menuTop = $(window).scrollTop();
    if (menuPosition < menuTop) {
        $('.header').addClass('sticky')
    }
    else { $('.header').removeClass('sticky') }
});





