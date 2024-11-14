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
      return `<span class="${className}">${menu[index]} <img class="pin-icon" src="pin.png" alt="icon"></span>`;
    },
  },
  on: {
    init: function () {
      updatePinIcon(this.activeIndex);
    },
    slideChange: function () {
      updatePinIcon(this.activeIndex);
    },
  },
});

function updatePinIcon(activeIndex) {
  const bullets = document.querySelectorAll(".swiper-pagination-bullet");
  bullets.forEach((bullet, index) => {
    const pinIcon = bullet.querySelector(".pin-icon");
    if (index === activeIndex) {
      pinIcon.style.opacity = 1; // Show the icon on the active bullet
    } else {
      pinIcon.style.opacity = 0; // Hide the icon on non-active bullets
    }
  });
}
