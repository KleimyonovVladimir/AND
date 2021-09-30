$(document).ready(() => {
  $('#control').click(function () {
    $('#crossing').toggleClass('expand');
  });
  // $("#control").click(function () {
  //   control.text(function () {
  //     //change text based on condition
  //     return $content.is(":visible") ? "свернуть" : "развернуть";
  //   });
  // });
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
