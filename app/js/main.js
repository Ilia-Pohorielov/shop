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

    if (document.querySelector('.range-slider') !== null) {
        var range = document.getElementById('range'),
            _thisMin, _thisMax, _thisMinCur, _thisMaxCur;

        _thisMin = parseInt(range.getAttribute('data-min'));
        _thisMax = parseInt(range.getAttribute('data-max'));
        _thisMinCur = parseInt(range.getAttribute('data-slider-min'));
        _thisMaxCur = parseInt(range.getAttribute('data-slider-max'));
        if (!_thisMaxCur) {
            _thisMinCur = _thisMin;
        }
        if (!_thisMaxCur) {
            _thisMaxCur = _thisMax;
        }
        if(_thisMax != 0 && _thisMin != 0) {
            noUiSlider.create(range, {
                start: [_thisMinCur, _thisMaxCur],
                connect: true,
                step: 1,
                range: {
                    'min': _thisMin,
                    'max': _thisMax
                },
            });

            var thisInputFrom = $(range).parents('.range-slider').find('.js_from'),
                thisInputTo = $(range).parents('.range-slider').find('.js_to');
            range.noUiSlider.on('update', function (values, handle) {
                var value = parseInt(values[handle]);
                if (handle) {
                    thisInputTo.val(value);
                } else {
                    thisInputFrom.val(value);
                }
            });

            var sliderIt = range;
            range.noUiSlider.on('end', function (values, handle) {
                getCatalog();
            });
        }
    }
});