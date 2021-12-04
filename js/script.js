// $(window).scroll(function(){
//     var docscroll=$(document).scrollTop();
//     if(docscroll>$(window).height()){
//       $('nav').css({'height': $('nav').height(),'width': $('nav').width()}).addClass('fixed');
//     }else{
//       $('nav').removeClass('fixed');
//     }
//   });
$(function() {
  let header = $('.header');
   
  $(window).scroll(function() {
    if($(this).scrollTop() > 230) {
     header.addClass('header_fixed');
    } else {
     header.removeClass('header_fixed');
    }
  });
});

$(window).scroll(function(){
  var docscroll=$(document).scrollTop();
  if(docscroll>$(window).height()){
    $('nav').css({'height': $('nav').height(),'width': $('nav').width()}).addClass('fixed');
  }else{
    $('nav').removeClass('fixed');
  }
});

$(document).ready(function(){
  $('.header__burger').click(function(event){ //обращаемся к классу header__burger и добавляем ему событие click
      $('.header__burger,.header__menu').toggleClass('active') //бургер шапке и бургер меню добавить класс active (toggle - нажали и зафиксировался класс)
      $('body').toggleClass('lock');//добавляем к body класс lock, чтобы блокировать прокрутку страницы во время открытого меню
  });
});