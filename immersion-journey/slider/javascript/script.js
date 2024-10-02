var menu = ["01", "02", "03", "04"];
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  parallax: true,
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span style="font-weight: bolder;" class="' + className + '">' + menu[index] + "</span>";
    },
  },
});