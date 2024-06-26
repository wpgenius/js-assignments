function breakTheTextP2() {
  var h1 = document.querySelector(".p2");
  var h1Text = h1.textContent;
  var splitedText = h1Text.split("");
  var clutter = "";
  splitedText.forEach(function (elem) {
    clutter += `<span>${elem}</span>`;
  });
  h1.innerHTML = clutter;
}
// ----------------------------------------------

function animate() {
  var tl = gsap.timeline();

  tl.from(".png", {
    y: "-150%",
    duration: 0.3,
    scrub:1
  });

  tl.from(".p1", {
    opacity: 0,
    duration: 0.5,
    scrub:2,
  });

  tl.from(".p2 span", {
    y: "20vh",
    x: "-8vh",
    opacity: 0,
    duration: 0.06,
    stagger: 0.08,
    scrub:4
  });

  tl.from(".p3", {
    opacity: 0,
    duration: 0.5,
    scrub:2
  });

  tl.to(".png", {
    y: "-10%",
    duration: 1.5,
    yoyo: true,
    repeat: -1,
    scrub:2
  },0.4
);

}

breakTheTextP2();
animate();