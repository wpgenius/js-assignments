gsap.registerPlugin(ScrollTrigger);

var panelsbg = document.getElementsByClassName("post");
var panels = document.getElementsByClassName("point");

for (var i = 0; i < panels.length; i++) {
  panels[i].addEventListener("mouseover", function () {
    console.log("working");
    //this.style.fontSize ="2rem"
    gsap.to(this, {
      fontSize: "2rem",
    });
  });
  panels[i].addEventListener("mouseout", function () {
    console.log("working");
    //this.style.fontSize ="2rem"
    gsap.to(this, {
      fontSize: "1rem",
    });
  });

  gsap.fromTo(
    panels[i],
    {
      // fontSize: "1.5",
    },
    {
      fontSize: "2rem",
      scrollTrigger: {
        trigger: panels[i],
        start: "top 1vh",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    }
  );
}

gsap.to(".icon", {
  y: index * window.innerHeight, // Adjust the calculation based on your layout
  scrollTrigger: {
    trigger: section,
    start: "top center",
    end: "bottom center",
    scrub: true, // Smooth animation on scroll
  },
});
