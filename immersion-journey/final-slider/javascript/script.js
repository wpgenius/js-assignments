var menu = ["01", "02", "03", "04", "05", "06", "07"];
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  mousewheel: {
    forceToAxis: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + menu[index] + "</span>";
    },
  },
});
