$(function(){
  $(".menu_toggle__burger").on('click',function(){
  	$(".menu_toggle__burger").toggleClass("active");
  	$(".header").toggle('slow');
    $(".modal").toggle('slow');
    
    if (!$(".modal").find(".nav__bottom").length){
      $(".nav__bottom").clone().appendTo(".modal");
      $(".nav__top").clone().appendTo(".modal");
      $(".modal__cart").clone().appendTo(".modal");
      $(".header__social").clone().appendTo(".modal");
    }

  });
});