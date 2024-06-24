function slideAnimateStart() {
  gsap.to(".swiper-slide-active .gsap", {
    opacity: 1,
    y: "20",
    duration: 1,
  });
}
function slideAnimateRevert() {
  gsap.to(".gsap", {
    opacity: 0,
    y: 20,
    duration: 0.2,
  });
}

function swiperJS() {
  var menu = ["2021", "2022", "2023", "2024"];
  //  Initialize Swiper
  var swiper = new Swiper(".timeline-slider", {
    direction: "vertical",
    speed: 1400,
    parallax: true,
    effect: "fade",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + menu[index] + "</span>";
      },
    },

    // on Slide Change -------------------------
    on: {
      init: function () {
        slideAnimateStart();
      },
      beforeSlideChangeStart: function () {
        slideAnimateRevert();
      },
      slideChangeTransitionEnd: function () {
        slideAnimateStart();
      },
    },
    // on Slide Chage ENd-----------------------
  });
  //  Initialize Swiper END--------------
}

swiperJS();
