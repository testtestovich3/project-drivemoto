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
  $('.filter__item-drop').on('click', function(){
    $(this).toggleClass('filter__item-drop--active');
    $(this).next().slideToggle(200);
  })

});