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
        pauseOnHover: false,
        fade: true,
        cssEase: 'linear',
        touchThreshold: 100
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
    if ($(window).width() <= 991) {
        $(window).on('resize', function () {
            $('.js-panel').addClass('open');
            $('.js-panel #criteria-collapse-mobile').removeClass('in');
        });
        $(window).on('load', function () {
            $('.js-panel').addClass('open');
            $('.js-panel #criteria-collapse-mobile').removeClass('in');
        });
        $('.js-panel').addClass('open');
        $('.js-panel #criteria-collapse-mobile').removeClass('in');
    }
    $('.js-big-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.js-mini-slider'
    });
    $('.js-mini-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.js-big-slider',
        dots: false,
        focusOnSelect: true
    });
    /* ========================================end slider======================================*/

    /* ========================================same parallax======================================*/
    var controller = new ScrollMagic.Controller();
    if ($(window).width() >= 991) {
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


    $(".js-scroll").mCustomScrollbar({
        mouseWheel:{ scrollAmount: 200 }
    });
    if ($(window).width() > 991) {
        $('.js-scroll-table').mCustomScrollbar();
    }
    /* ========================================same validate======================================*/
    $('.js_validate [type="submit"]').on("click", function () {
        $(this).siblings('.form-group').find('input').attr('placeholder', '');
        $(this).siblings('.form-group').find('input').val('');
        return validate($(this).parents(".js_validate"));
    });
    $('.js_validate [type="submit"]').on("click", function () {

    });
    if (document.querySelector('.range-slider') !== null) {
        var range = document.getElementById('range'),
            _thisMin, _thisMax, _thisMinCur, _thisMaxCur;

        _thisMin = parseInt(range.getAttribute('data-min'));
        _thisMax = parseInt(range.getAttribute('data-max'));
        _thisMinCur = parseInt(range.getAttribute('data-slider-min'));
        _thisMaxCur = parseInt(range.getAttribute('data-slider-max'));
        var input0 = document.getElementById('input-with-keypress-0');
        var input1 = document.getElementById('input-with-keypress-1');
        var inputs = [input0, input1];

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
            range.noUiSlider.on('update', function( values, handle ) {
                inputs[handle].value = values[handle];
            });
            function setSliderHandle(i, value) {
                var r = [null,null];
                r[i] = value;
                range.noUiSlider.set(r);
            }
            inputs.forEach(function(input, handle) {
                input.addEventListener('change', function(){
                    setSliderHandle(handle, this.value);
                });
                input.addEventListener('keydown', function( e ) {
                    var values = range.noUiSlider.get();
                    var value = Number(values[handle]);
                    var steps = range.noUiSlider.steps();
                    var step = steps[handle];
                    var position;
                    switch ( e.which ) {
                        case 13:
                            setSliderHandle(handle, this.value);
                            break;
                        case 38:
                            position = step[1];
                            if ( position === false ) {
                                position = 1;
                            }
                            if ( position !== null ) {
                                setSliderHandle(handle, value + position);
                            }
                            break;
                        case 40:
                            position = step[0];
                            if ( position === false ) {
                                position = 1;
                            }
                            if ( position !== null ) {
                                setSliderHandle(handle, value - position);
                            }
                            break;
                    }
                });
            });
        }
    }
    /* ========================================end validate======================================*/

    $('.js-mobile-menu').on('click', function () {
        $(this).toggleClass('open');
        $('.header-menu').toggleClass('open');
        $('.top-header').toggleClass('open');
        $('.search-block').removeClass('open');
    });
    $('.js-sub-menu > span').on('click', function () {
        $(this).toggleClass('active');
        $('.sub-menu-category').slideToggle();
    });
    if ($(window).width() > 767) {
        $(window).on('resize', function () {
            heightEL();
        });
        $(window).on('load', function () {
            heightEL();
        });
    }
    $('.js-search').on('click', function () {
        $('.header-menu').removeClass('open');
        $('.main-hamburger').removeClass('open');
        $('.top-header').removeClass('open');
    });
    $(document).click(function(event) {
        if ($(event.target).closest(".bottom-header").length)
            return;
        $(".search-block.open").removeClass("open");
        event.stopPropagation();
    });
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
    heightEL();
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
    if ($(window).width() > 767) {
        $('.js-size-open').on('click', function () {
            $(this).parent().toggleClass('open');
            $(this).parent().siblings().removeClass('open');
        });
        $('.js-scroll-info').mCustomScrollbar();
    }
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
    var text = $('.collection-item .description .text');
    text.each(function (i, e) {
        blueHideTitle($(e), 65);
    });
    var link = $('.js-anchor');
    link.on('click',function () {
       var href = $(this).attr('href'),
           offset = $(href).offset().top;
        $("html, body").animate({scrollTop: offset}, 600);
    });

    $('.js-reinit a').on('shown.bs.tab', function (e) {
        $('.block-collection .js-slider').slick('unslick');
        $('.block-collection .js-slider').slick('init');
    });
    $('.js-home-anchor').on('click', function () {
       var offset = $('.block-collection').offset().top;
        $("html, body").animate({scrollTop: offset}, 600);
    });

    if ($('form button[type="submit"]').hasClass('has-error')) {
        $(this).find('input').attr('placeholder', '213123 ');
    };

    $('form .form-group').on('click', function(){
        if ($(this).hasClass('has-error')) {
            $(this).find('.error-text').hide();
            $(this).find('input').focus();
        }
    });
    $('form .input-group').on('click', function(){
        if ($(this).hasClass('has-error')) {
            $(this).find('.error-text').hide();
            $(this).find('input').focus();
        }
    });
    $(".js-nav-title").click(function () {
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.classList.remove("show");
            $(this).removeClass('rotate');
        } else {
            panel.style.maxHeight = panel.scrollHeight + "%";
            panel.classList.add("show");
            $(this).addClass('rotate');
        }
    });
    $(document).on('click', '.js-minus', function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.attr('value')) - 1;
        count = count < 1 ? 1 : count;
        $input.attr('value', count);
        $input.change();
        changeCountCart($input.attr('data-cart-key'), count);
        return false;
    });
    $(document).on('click', '.js-plus', function () {
        var $input = $(this).parent().find('input');
        _max = parseInt($input.attr('max'));
        _val = parseInt($input.attr('value')) + 1;
        if(_val > _max)
            alert('Ошибка', "Выбрано максимально доступное кол-во товаров.");
        else {
            $input.attr('value', _val);
            $input.change();
            if($input.hasClass('js_cart'))
                changeCountCart($input.attr('data-cart-key'), _val);
        }
        return false;
    });
    $('.js-change').on('click', function () {
       $(this).parent().find('.settings').toggleClass('open');
       return false;
    });
    $(".js-phone-mask").mask("(999) 999-99-99");
    $('.js-mobile-scroll .category-title').click(function() {
        $(this).toggleClass("rotate");
        $(this).next("ul").slideToggle();
    });
    /* scroll page top */
    $(window).on('scroll', function () {
        var scrollTopPosition = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
        if (scrollTopPosition > 300) {
            document.querySelector('.js-top').classList.add('visible');
        } else {
            document.querySelector('.js-top').classList.remove('visible');
        }
    });
    $(document).on('click', '.js-top', function () {
        $('html, body').animate({scrollTop: 0}, 500);
    });
});