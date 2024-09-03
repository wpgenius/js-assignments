var img = document.querySelector(".hover-img");
img.addEventListener("mouseover", () => {
  console.log("yes");
  gsap.to(".hover-img", {
    x: "4rem",
    duration: 0.7,
  });
});
img.addEventListener("mouseleave", () => {
  console.log("leave");
  gsap.to(".hover-img", {
    x: "3rem",
    duration: 0.7,
  });
});
