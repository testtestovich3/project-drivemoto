$(function(){

  // слайдер
  $('.banner__section__slider').slick({
    dots: true,
    prevArrow: '<button class="banner__section__slider-btn banner__section__slider-btnprev"><img src="img/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="banner__section__slider-btn banner__section__slider-btnnext"><img src="img/arrow-right.svg" alt=""></button>'
  });

  // форма с табами
  $('.tab').on('click', function(e){
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');
  
    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');
  });

  // клик "Избранное"
  $('.product-item__favorite').on('click', function(){
    $(this).toggleClass('product-item__favorite--active');
  })

  // клик "Корзины"
  $('.product-item__busket').on('click', function(){
    $(this).toggleClass('product-item__busket--active');
  })

  // Слайдер популярных товаров
  $('.product-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="img/arrow-black-left.svg" alt=""></button>',
    nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="img/arrow-black-right.svg" alt=""></button>'
  });

  // Обращение к инпутам (стилизация фильтра)
  $('.filter-style').styler();

  // Открытие/закрытие фильтра
  $('.filter__item-drop, .filter__extra').on('click', function(){
    $(this).toggleClass('filter__item-drop--active');
    $(this).next().slideToggle(200);
  })

  // Подключение фильтрая для цены
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 100000,
    max: 500000,
    from: 200,
    to: 500,
    grid: false
  });

  // Переключатор для иконок
  $('.catalog__filter-btn-grid').on('click', function(){
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btn-line').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').removeClass('product-item__wrapper--list');
  });

  $('.catalog__filter-btn-line').on('click', function () {
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btn-grid').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').addClass('product-item__wrapper--list');
  });

});

