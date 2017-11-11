$(document).ready(function () {
   $('.js-search').on('click',function () {
      $('.search-block').toggleClass('open');
   });
    $('.main-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false
    });
    $('.block-collection .collection').slick({
        arrows: true,
        slidesToShow: 4,
        initialSlide: 0,
        slidesToScroll: 1
    })
});