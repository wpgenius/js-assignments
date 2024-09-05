gsap.to(".container-wrap", {
  transform: "translateX(-200vw)",
  scrollTrigger: {
    trigger: ".container-wrap",
    scroller: "body",
    markers: true,
    pin: true,
    start: "top 100vh",
    end: "top -100vh",
    scrub: 4,
  },
});
