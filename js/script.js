$(function(){

  // слайдер
  $('.banner__section__slider').slick({
    dots: true,
    prevArrow: '<button class="banner__section__slider-btn banner__section__slider-btnprev"><img src="img/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="banner__section__slider-btn banner__section__slider-btnnext"><img src="img/arrow-right.svg" alt=""></button>'
  });

  // форма с табами
  $('.search__tabs-item').on('click', function(e){
    e.preventDefault();

    $('.search__tabs-item').removeClass('search__tabs-item--active');
    $('.search__content-item').removeClass('search__content-item--active');
  
    $(this).addClass('search__tabs-item--active');
    $($(this).attr('href')).addClass('search__content-item--active');
  })

});