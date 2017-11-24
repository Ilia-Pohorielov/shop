$(document).ready(function () {
    $('.js-search').on('click', function () {
        $('.search-block').toggleClass('open');
        setTimeout(function () {
            $('.search-block .field-search input').focus();
        }, 1000);
    });
    /* ========================================same slider======================================*/
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
        infinite: true,
        responsive: [
            {
                breakpoint: 1320,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });
    $('.block-instagram .js-slider').slick({
        arrows: true,
        slidesToShow: 3,
        initialSlide: 0,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });

    $('.slider.js-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false
    });
    if ($(window).width() <= '991') {
        $(window).on('resize', function () {
            $('.js-panel').addClass('open');
            $('.js-panel #criteria-collapse-mobile').removeClass('in');
        });
        $(window).on('load', function () {
            $('.js-panel').addClass('open');
            $('.js-panel #criteria-collapse-mobile').removeClass('in');
        });
    }
    $('.js-big-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.js-mini-slider'
    });
    $('.js-mini-slider').slick({
        slidesToShow: 3,
        vertical: true,
        slidesToScroll: 1,
        asNavFor: '.js-big-slider',
        dots: false,
        focusOnSelect: true
    });
    /* ========================================end slider======================================*/

    /* ========================================same parallax======================================*/
    var controller = new ScrollMagic.Controller();
    if ($(window).width() >= '991') {
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
    }
    /* ========================================end parallax======================================*/


    $(".js-scroll").mCustomScrollbar();
    /* ========================================same validate======================================*/
    $('.js_validate [type="submit"]').on("click", function () {
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
        if (_thisMax != 0 && _thisMin != 0) {
            noUiSlider.create(range, {
                start: [_thisMinCur, _thisMaxCur],
                connect: true,
                step: 1,
                range: {
                    'min': _thisMin,
                    'max': _thisMax
                }
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
    /* ========================================end validate======================================*/

    $('.js-mobile-menu').on('click', function () {
        $('.header-menu').toggleClass('open');
        $('.search-block').removeClass('open');
    });
    $('.js-sub-menu').on('click', function () {
        $('.sub-menu-category').toggleClass('open');
    });
    if ($(window).width() > 767) {
        $(window).on('resize', function () {
            heightEL();
        });
        $(window).on('load', function () {
            heightEL();
        });
    }
    if ($(window).width() <= '1200') {
        $('.js-mobile-scroll').mCustomScrollbar();
        $('.js-search').on('click', function () {
            $('.header-menu').removeClass('open');
        });
    }

    /* ========================================same height======================================*/

    function heightEL() {
        var elH = document.getElementsByClassName("height");
        var maxHeight = 0;
        for (var i = 0; i < elH.length; ++i) {
            elH[i].style.height = "";
            // elH[i].style.lineHeight = "";
            if (maxHeight < elH[i].clientHeight) {
                maxHeight = elH[i].clientHeight;
            }
        }
        for (var i = 0; i < elH.length; ++i) {
            elH[i].style.height = maxHeight + "px";
            // elH[i].style.lineHeight = maxHeight + "px";
        }
    }

    if ($(window).width() > 767) {
        $(window).on('resize', function () {
            heightEL();
        });
        $(window).on('load', function () {
            heightEL();
        });
    }
    /* ========================================same height======================================*/
    /* ========================================same download image======================================*/
    if (window.File && window.FileList && window.FileReader) {
        $(".input-file").on("change", function (e) {
            var $this = $(this);
            var value = $this.val();
            if (value) {
                var filename = $this.val().replace(/C:\\fakepath\\/i, '');
                var FR = new FileReader();
                FR.onload = function (e) {
                    $this.parents('.upload-user-photo').find('img').attr('src', e.target.result);
                };
                FR.readAsDataURL(e.target.files[0]);
            }
        });
    }
    else {
        alert('File API не поддерживается данным браузером');
    }
    var list = $('.js-accordion.product-list');
    var caret = $('.js-total .caret');
    for (var i = 0; i < list.length; i++) {
        var count = list[i];
        if (count.children.length >= 3) {
            count.parentNode.parentNode.classList.add('accordion');
        }
    }
    caret.on('click', function () {
        $(this).parents('tr').find('.js-accordion').toggleClass('open');
    });
    /* ========================================init magnific-popup======================================*/
    $('.js-zoom-img').magnificPopup({
        type: 'image'
    });

    $('.big-slider .image').each(function () {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true
            },
            fixedContentPos: false
        });
    });

    $('.js-size-open').on('click', function () {
        $(this).parent().toggleClass('open');
        $(this).parent().siblings().removeClass('open');
    });

    $('.js-anchor').on('click', function () {
        var item = $('.block-question-answer .navigation-item').attr('id');
        if ($(this).attr('href') == item) {
            $("html, body").animate({
                scrollTop: item
            }, 600);
            return false;
        }
    });

    function blueHideTitle(el, size) {
        var itemLenght = $(el);
        var textItem = itemLenght.text();
        var lengItem = textItem.length;
        var maxL = size;
        if (textItem.length >= maxL) {
            var text = textItem.slice(0, maxL);
            textItem = text + '..';
            $(itemLenght).text(textItem);
        }
    };
    var hide = $('.cart-item').find('.js-hide');
    hide.each(function (i, e) {
        blueHideTitle($(e), 50);

    });
    var link = $('.js-anchor');
    link.each(function (i, e) {
       var href = e.getAttribute('href');
        $(this).on('click', function () {
            var h = href;
            $("html, body").animate({scrollTop: h}, 600);
            return false;
       });
    });
});