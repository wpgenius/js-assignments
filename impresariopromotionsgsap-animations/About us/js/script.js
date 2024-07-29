function breakTheTextP1() {
    var h1 = document.querySelector(".t4");
    var h1Text = h1.textContent;
    var splitedText = h1Text.split("");
    var clutter = "";
    splitedText.forEach(function (elem) {
      clutter += `<span>${elem}</span>`;
    });
    h1.innerHTML = clutter;
    console.log(clutter);
  }
  function breakTheTextP2() {
    var h1 = document.querySelector(".t5");
    var h1Text = h1.textContent;
    var splitedText = h1Text.split("");
    var clutter = "";
    splitedText.forEach(function (elem) {
      clutter += `<span>${elem}</span>`;
    });
    h1.innerHTML = clutter;
    console.log(clutter);
  }

  breakTheTextP1();
  breakTheTextP2();
  var tl = gsap.timeline();
  tl.from(".t4 span", {
    y: "20vh",
    x: "-3vh",
    opacity: 0,
    duration: 0.09,
    stagger: 0.1,
  });
  tl.to(".img-bg", {
    height: "50%",
    duration: 0.5,
    // repeat:-1,
    ease: "elastic.out(0.1,0.0)",
  },1);
  tl.from(".t5 span", {
    y: "20vh",
    x: "-3vh",
    opacity: 0,
    duration: 0.09,
    stagger: 0.1,
  });
  tl.from(".image",{
    x:"90vw",
    duration:0.3,

  })