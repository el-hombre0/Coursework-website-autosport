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

// Дата и время

function clock() {
var d = new Date();
var month_num = d.getMonth()
var day = d.getDate();
var hours = d.getHours();
var minutes = d.getMinutes();
var seconds = d.getSeconds();

month=new Array("января", "февраля", "марта", "апреля", "мая", "июня",
"июля", "августа", "сентября", "октября", "ноября", "декабря");

if (day <= 9) day = "0" + day;
if (hours <= 9) hours = "0" + hours;
if (minutes <= 9) minutes = "0" + minutes;
if (seconds <= 9) seconds = "0" + seconds;

date_time = "Сегодня - " + day + " " + month[month_num] + " " + d.getFullYear() +
" г.&nbsp;&nbsp;&nbsp;Текущее время - "+ hours + ":" + minutes + ":" + seconds;
if (document.layers) {
 document.layers.doc_time.document.write(date_time);
 document.layers.doc_time.document.close();
}
else document.getElementById("doc_time").innerHTML = date_time;
 setTimeout("clock()", 1000);
}
clock();