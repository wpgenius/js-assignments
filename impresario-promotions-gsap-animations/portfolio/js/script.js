function breakTheTextP1() {
    var h1 = document.querySelector(".t2");
    var h1Text = h1.textContent;
    var splitedText = h1Text.split("");
    var clutter = "";
    splitedText.forEach(function (elem) {
      clutter += `<span>${elem}</span>`;
    });
    h1.innerHTML = clutter;
  }

  function breakTheTextP2() {
    var h1 = document.querySelector("#text1");
    var h1Text = h1.textContent;
    var splitedText = h1Text.split("");
    var clutter = "";
    splitedText.forEach(function (elem) {
      clutter += `<span>${elem}</span>`;
    });
    h1.innerHTML = clutter;
  }
  function breakTheTextP3() {
    var h1 = document.querySelector("#text2");
    var h1Text = h1.textContent;
    var splitedText = h1Text.split("");
    var clutter = "";
    splitedText.forEach(function (elem) {
      clutter += `<span>${elem}</span>`;
    });
    h1.innerHTML = clutter;
  }
  breakTheTextP1();
  breakTheTextP2();
  breakTheTextP3()

  var tl = gsap.timeline();

  tl.to(".swing", {
    rotate: 25,
    yoyo: true,
    duration: 0.7,
    // repeat: -1,
  });

  gsap.from(".t1",{
      opacity: 0,
      duration: 1,
    },
    0.6
  );

  tl.to(".swing", {
    rotate: -45,
    yoyo: true,
    duration: 1,
    // repeat: -1,
  });

  gsap.from(
    ".t2 span",
    {
      y: "30vh",
      // x: "-8vh",
      opacity: 0,
      duration: 0.1,
      stagger: 0.2,
      // scrub: 4,
    },
    1
  );

  gsap.from(
    "#text1 span",
    {
      y: "20vh",
      x: "-19vh",
      opacity: 0,
      duration: 0.1,
      stagger: 0.08,
      scrub: 4,
    },
    2
  );
  gsap.from(
    "#text2 span",
    {
      y: "20vh",
      x: "-vh",
      opacity: 0,
      duration: 0.1,
      stagger: 0.08,
      scrub: 4,
    },
    2.5
  );

  tl.to(".swing", {
    rotate: 8,
    yoyo: true,
    duration: 1.4,
    // repeat: -1,
  });
  // tl.to(".swing", {
  //   rotate: -18,
  //   yoyo: true,
  //   duration: 1.6,
  //   // repeat: -1,
  // });

  // tl.to(".swing", {
  //   rotate: 6,
  //   yoyo: true,
  //   duration: 1.8,
  //   // repeat: -1,
  // });
  tl.to(".swing", {
    rotate: -8,
    yoyo: true,
    duration: 2,
    repeat: -1,
  });

  tl.to(".swing", {
    rotate: 2,
    yoyo: true,
    duration: 2.2,
    // repeat: -1,
  });
  tl.to(".swing", {
    rotate: 0,
    yoyo: true,
    duration: 2.2,
    repeat: -1,
  });