function pageStartAnime() {
  gsap.from("#line1", {
    width: "0",
    opacity: 0,
    duration: 1,
  });

  gsap.from(".swiper-slide", {
    opacity: 0,
    y: -20,
    duration: 0.4,
    delay: 0.5,
    stagger: 0.1,
  });
}

function swiperJS() {
  var menu = ["2021", "2022", "2023", "2024"];

  //  Initialize Swiper
  var swiper = new Swiper(".timeline-slider", {
    direction: "vertical",
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

    // GSAP -------------------------
    on: {
      slideChange: function () {
        // Line Tramsition effect
        gsap.from("#line1", {
          width: "0",
          opacity: 0,
          duration: 0.6,
        });

        // Page Load Animation
        gsap.from(".swiper-slide", {
          opacity: 0,
          y: -20,
          duration: 0.5,
          stagger: 0.1,
        });
      },
    },
    // GSAP ENd-----------------------
  });
}

pageStartAnime();
swiperJS();
