function breakTheTextP1() {
  var h1 = document.querySelector(".t1");
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
  var h1 = document.querySelector("#text1");
  var h1Text = h1.textContent;
  var splitedText = h1Text.split("");
  var clutter = "";
  splitedText.forEach(function (elem) {
    clutter += `<span>${elem}</span>`;
  });
  h1.innerHTML = clutter;
  console.log(clutter);
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
  console.log(clutter);
}
breakTheTextP1();
breakTheTextP2();
breakTheTextP3();

function Animation() {
  var tl = gsap.timeline();

  tl.from(".main", {
    opacity: 0,
    duration: 1,
  });

  tl.from(".t1 span", {
    y: "20vh",
    x: "-8vh",
    opacity: 0,
    duration: 0.06,
    stagger: 0.08,
    scrub: 4,
  });
  tl.from(".Capabilites-main-heading1 span", {
    y: "20vh",
    x: "-8vh",
    opacity: 0,
    duration: 0.06,
    stagger: 0.08,
    scrub: 4,
  });

  tl.from(".t2", {
    opacity: 0,
  });

  tl.from(".capability-sub-heading-1", {
    opacity: 0,
  });

  tl.from(".t3", {
    opacity: 0,
  });
  
  tl.from(".capability-sub-heading-2", {
    opacity: 0,
  });

  tl.from("#text1 span", {
    y: "20vh",
    x: "-8vh",
    opacity: 0,
    duration: 0.06,
    stagger: 0.08,
    scrub: 4,
  });
  tl.from(".Capabilites-main-heading2 span", {
    y: "20vh",
    x: "-8vh",
    opacity: 0,
    duration: 0.06,
    stagger: 0.08,
    scrub: 4,
  });
  tl.from("#text2 span", {
    y: "20vh",
    x: "-8vh",
    opacity: 0,
    duration: 0.06,
    stagger: 0.08,
    scrub: 4,
  });
  tl.from(".Capabilites-main-heading3 span", {
    y: "20vh",
    x: "-8vh",
    opacity: 0,
    duration: 0.06,
    stagger: 0.08,
    scrub: 4,
  });
  tl.to(".o", {
    top: "32vh",
    duration: 1,
  });
  tl.to(".Capabilites-o-image", {
    top: "32vh",
    duration: 1,
  });
  tl.to(".o", {
    top: "37vh",
    yoyo: true,
    duration: 1,
    repeat: -1,
  });
  tl.to(".Capabilites-o-image", {
    top: "37vh",
    yoyo: true,
    duration: 1,
    repeat: -1,
  });
}
Animation();
