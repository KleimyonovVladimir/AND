$(document).ready(() => {
  $("#control").click(function () {
    $("#crossing").toggleClass("expand");
    if ($("#crossing").hasClass("expand")) {
      $(".control-text").html("свернуть");
    } else {
      $(".control-text").html("развернуть");
    }
  });


  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 30,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

});
