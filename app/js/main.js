$(document).ready(function () {
   $('.js-search').on('click',function () {
      $('.search-block').toggleClass('open');
   });
    $('.main-slider').slick({
        arrows: false,
        dots: true,
/*        autoplay: true,
        autoplaySpeed: 5000*/
    });
});