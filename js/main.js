$(function(){
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    fade: true,
    speed: 1000,
    centerMode: true,
    arrows: false,
  });

   $(".fadeInUp").on("inview", function () {
    $(this).addClass("is-inview");
  });

   $(".hamberger_icon").on("click", function () {
    $('.hamberger').toggleClass("open");
    $('.hamberger_icon').toggleClass("active");
    $('body').toggleClass("active");
  });
});


