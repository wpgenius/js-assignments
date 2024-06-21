function slideAnimateStart() {


  gsap.to(".swiper-slide-active .gsap", {
    opacity: 1,
    y: 20,
    delay: 0.5,
    duration: 0.9,
  });
  gsap.from(".swiper-slide-active .line", {
    width: "0",
    opacity: 0,
    duration: 2,
    delay: 1,
  });
  gsap.from(".swiper-slide-next .line", {
    width: "100",
    opacity: 0,
    duration: 0,
    delay: 0,
  });

}
function slideAnimateRevert() {
 

  gsap.to(".gsap", {
    opacity: 0,
    y: 20,
    delay: 0.1,
    duration: 0,
  });
}

function swiperJS() {
  var menu = ["2021", "2022", "2023", "2024"];
  //  Initialize Swiper
  var swiper = new Swiper(".timeline-slider", {
    direction: "vertical",
    speed: 1400,
    parallax: true,
    // effect: "fade",
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
    // on: {
    //   init: function ( a ) {
    //     slideAnimateStart();
    //   },
    //   beforeSlideChangeStart	: function ( a ) {
    //     slideAnimateRevert();
    //   },
    //   slideChangeTransitionEnd: function () {
    //     slideAnimateStart();
    //   },
    // },
    // on Slide Chage ENd-----------------------
  });
  //  Initialize Swiper END--------------
}

swiperJS();
