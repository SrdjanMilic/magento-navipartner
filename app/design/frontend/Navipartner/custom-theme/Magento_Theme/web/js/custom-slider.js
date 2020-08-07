define([
  'jquery',
  'slick'
], function ($) {
  'use-strict';

  $(".slick-slider").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    swipe: true,
    pauseOnFocus: true,
    mobileFirst: true
  });
});
