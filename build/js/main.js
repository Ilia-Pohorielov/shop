$(document).ready(function () {
   $('.js-search').on('click',function () {
      $('.search-block').toggleClass('open');
   });
    $('.top-main .js-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false
    });
    $('.block-collection .js-slider').slick({
        arrows: true,
        slidesToShow: 4,
        initialSlide: 0,
        slidesToScroll: 1,
        infinite: false
    });
    $('.block-instagram .js-slider').slick({
        arrows: false,
        slidesToShow: 3,
        initialSlide: 0,
        slidesToScroll: 1
    });
    $('.js-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false
    });
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        triggerElement: ".js-animate-parallax",
        triggerHook: .8,
        duration: "500%"
    })
        .setTween(".js-animate-parallax .right", {y: "-50%", ease: Power0.easeNone})
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".js-animate-parallax",
        triggerHook: .8,
        duration: "500%"
    })
        .setTween(".js-animate-parallax .left", {y: "50%", ease: Power0.easeNone})
        .addTo(controller);

    $(".search-block .js-scroll").mCustomScrollbar();

    $('.js_validate [type="submit"]').on("click", function(){
        return validate($(this).parents(".js_validate"));
    });

});