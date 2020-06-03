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
})