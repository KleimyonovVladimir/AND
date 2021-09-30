$(document).ready(() => {
  $('#control').click(function () {
    $('#crossing').toggleClass('expand');
  });

  // $("#control").click(function () {
  //   var any = document.getElementById('control');
  //   document.toggle(any.innerText = "развернуть");
  // });

  function toggleTxt(elem, anotherTxt) {
    var txt = $("#control").text();

    $("#control").click(function () {
      if ($(this).text() == txt) {
        $(this).text(anotherTxt);
      } else {
        $(this).text(txt);
      }
    });
  };
  toggleTxt($("#control"), "свернуть");


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
