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